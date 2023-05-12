const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const posts = require('../mock-data/posts');
const comments = require('../mock-data/comments');
const users = require('../mock-data/users');

// nickName, 아바타 / level point //

const PAGE_SIZE = 10;

// post 목록 전체 가져오기 test 용)
router.get('/', (req, res) => {
	res.send({ posts: posts.getPosts() });
});

// comments 목록 전체 가져오기 (test용)
router.get('/comments', (req, res) => {
	res.send({ comments: comments.getComments() });
});

// 커뮤니티 글 정보
router.get('/:postId', (req, res) => {
	const { postId } = req.params;

	const post = posts.getPost(postId);
	const { nickName, avatarId, level, point } = users.findUserByEmail(
		post.author
	);

	res.send({ post: { ...post, nickName, avatarId, level, point } });
});

// 커뮤니티 글 작성 - 작성자 point + 10
router.post('/', (req, res) => {
	const { postInfo } = req.body;

	const postId = posts.createPost(postInfo);
	users.updatePoint(postInfo.author, 10);

	res.send({ postId });
});

// 커뮤니티 글 수정
router.patch('/:postId', (req, res) => {
	const { postId } = req.params;
	const { postInfo } = req.body;

	posts.updatePost(postId, postInfo);

	res.send({ postInfo });
});

// 커뮤니티 글 삭제 - 작성자 point - 10
router.delete('/:postId', (req, res) => {
	const { postId } = req.params;
	const { author } = posts.getPost(postId);

	posts.deletePost(postId);
	users.updatePoint(author, -10);

	res.send({ postId });
});

// comment 가져오기
router.get('/:postId/comment', (req, res) => {
	let isAdmin = false;

	try {
		const accessToken = req.cookies.accessToken;

		const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
		isAdmin = users.checkUserIsAdmin(decoded.email);
	} catch (e) {
		isAdmin = false;
	} finally {
		const { postId } = req.params;
		const { page } = req.query;

		const startIdx = PAGE_SIZE * (page - 1);

		const commentList = comments.getPostComments(postId);

		const commentsData = commentList
			.slice(startIdx, startIdx + PAGE_SIZE)
			.map((comment) => {
				const { nickName, avatarId, level, point } = users.findUserByEmail(
					comment.author
				);

				return { ...comment, nickName, avatarId, level, point };
			});

		res.send({
			isAdmin,
			comments: commentsData,
			totalLength: commentList.length,
		});
	}
});

// 커뮤니티 글에 댓글 추가
router.post('/:postId/comment', (req, res) => {
	const accessToken = req.cookies.accessToken;
	const { postId } = req.params;
	const { commentInfo } = req.body;

	try {
		jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

		comments.createComment({ ...commentInfo, postId });

		res.send({ postId });
	} catch {
		res
			.status(403)
			.send({ error: '로그인이 만료되었습니다. 다시 로그인 후 시도해주세요.' });
	}
});

// 커뮤니티 글에 댓글 수정
router.patch('/:postId/comment/:commentId', (req, res) => {
	const accessToken = req.cookies.accessToken;

	try {
		jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

		const { commentId } = req.params;
		const { commentInfo } = req.body;

		comments.updateComment(commentId, commentInfo);

		res.send({ commentId });
	} catch {
		res
			.status(403)
			.send({ error: '로그인이 만료되었습니다. 다시 로그인 후 시도해주세요.' });
	}
});

// useful 댓글 설정
router.patch('/:postId/comment/useful/:commentId', (req, res) => {
	const accessToken = req.cookies.accessToken;

	try {
		jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

		const { commentId, postId } = req.params;
		const { useful } = req.body;
		const { author } = posts.getPost(postId);

		comments.updateUsefulComment(commentId, useful);
		posts.updateCompletedPost(postId, useful);
		users.updatePoint(author, useful ? 20 : -20);

		res.send({ commentId, postId });
	} catch {
		res
			.status(403)
			.send({ error: '로그인이 만료되었습니다. 다시 로그인 후 시도해주세요.' });
	}
});

router.patch('/:postId/comment/certified/:commentId', (req, res) => {
	const accessToken = req.cookies.accessToken;

	try {
		const decode = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

		if (!users.checkUserIsAdmin(decode.email)) throw new Error();

		const { commentId, postId } = req.params;
		const { certified } = req.body;

		comments.updateCertifiedComment(commentId, certified);
		posts.updateCertifiedPost(postId, certified);

		res.send({ commentId, postId });
	} catch {
		res.status(403).send({ error: '관리자 계정이 아닙니다.' });
	}
});

// 커뮤니티 글에 댓글 삭제
router.delete('/:postId/comment/:commentId', (req, res) => {
	const accessToken = req.cookies.accessToken;

	try {
		jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

		const { commentId, postId } = req.params;
		const { certified, useful } = comments.getComment(commentId);

		if (certified) posts.updateCertifiedPost(postId, false);
		if (useful) posts.updateCompletedPost(postId, false);

		comments.deleteComment(commentId);

		res.send({ commentId });
	} catch {
		res
			.status(403)
			.send({ error: '로그인이 만료되었습니다. 다시 로그인 후 시도해주세요.' });
	}
});

module.exports = router;
