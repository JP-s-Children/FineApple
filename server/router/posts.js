const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const posts = require('../mock-data/posts');
const comments = require('../mock-data/comments');
const users = require('../mock-data/users');

const PAGE_SIZE = 5;

const slicePost = (post, page) => {
	const startIdx = PAGE_SIZE * (page - 1);

	return post.slice(startIdx, startIdx + PAGE_SIZE);
};

// GET | 카테고리별 글 목록
router.get('/', (req, res) => {
	const { category, page } = req.query;

	const postList = category
		? posts.getFilteredPosts(category)
		: posts.getPosts();

	res.send({
		posts: slicePost(postList, page).map((post) => ({
			...post,
			avatarId: users.findUserByEmail(post.author).avatarId,
			commentsLength: comments.getPostComments(post.id).length,
		})),
		totalLength: postList.length,
	});
});

// GET | AutoComplete 검색 결과
router.get('/search', (req, res) => {
	const { keyword, category } = req.query;

	const filteredPosts = posts.getFilteredPosts(category);
	const searchedPosts = posts.searchPost(filteredPosts, keyword).slice(0, 5);

	res.send({
		posts: searchedPosts.map((searchedPost) => ({
			...searchedPost,
			avatarId: users.findUserByEmail(searchedPost.author).avatarId,
		})),
	});
});

// GET | 내가 작성한 글 목록
router.get('/me', (req, res) => {
	try {
		const accessToken = req.cookies.accessToken;

		const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
		const { email: userId } = users.findUserByEmail(decoded.email);

		const myPosts = posts.getMyPosts(userId);
		const user = users.findUserByEmail(userId);

		if (!user)
			return res
				.status(401)
				.send({ error: '해당 사용자가 존재하지 않습니다.' });

		const { page } = req.query;

		res.send({
			posts: slicePost(myPosts, page).map((myPost) => ({
				...myPost,
				avatarId: user.avatarId,
				commentsLength: comments.getPostComments(myPost.id).length,
			})),
			totalLength: myPosts.length,
		});
	} catch (e) {
		console.error('😱 사용자 인증 실패..', e);
		res.status(403).send({ auth: 'fail' });
	}
});

// GET | 사용자 프로필 - 글 목록
router.get('/profile', (req, res) => {
	const { page, nickname } = req.query;

	const user = users.findUserByNickName(nickname);
	if (!user)
		return res.status(401).send({ error: '해당 사용자가 존재하지 않습니다.' });

	const userPosts = posts.getMyPosts(user.email);

	res.send({
		posts: slicePost(userPosts, page).map((post) => ({
			...post,
			avatarId: user.avatarId,
			commentsLength: comments.getPostComments(post.id).length,
		})),
		totalLength: userPosts.length,
	});
});

module.exports = router;
