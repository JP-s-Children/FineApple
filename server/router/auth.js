const express = require('express');
const router = express.Router();
const users = require('../mock-data/users');
const jwt = require('jsonwebtoken');

const TOKEN = 'accessToken';

// 유저 정보가져오기 (test 용)
router.get('/users', (req, res) => {
	res.send({ users: users.getUsers() });
});

// 유저 토큰 인증
router.get('/auth', (req, res) => {
	const accessToken = req.cookies.accessToken;

	try {
		const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
		console.log(`😀 사용자 인증 성공`, decoded);

		const user = users.findUserByEmail(decoded.email);
		res.send({
			email: user.email,
			nickName: user.nickName,
			avatarId: user.avatarId,
		});
	} catch (e) {
		console.error('😱 사용자 인증 실패..', e);
		res.status(401).send({ auth: 'fail' });
	}
});

// 로그인
router.post('/signin', (req, res) => {
	const { email, password } = req.body;

	console.log(email, password);

	// console.log(req);
	// 401 Unauthorized
	if (!email || !password)
		return res
			.status(401)
			.send({ error: '사용자 아이디 또는 패스워드가 전달되지 않았습니다.' });

	const user = users.findUser(email, password);

	// 401 Unauthorized
	if (!user)
		return res.status(401).send({ error: '등록되지 않은 사용자입니다.' });

	const accessToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
		expiresIn: '1d',
	});

	res.cookie(TOKEN, accessToken, {
		maxAge: 1000 * 60 * 60 * 24 * 7, // 7d
		httpOnly: true,
	});

	res.send({
		email: user.email,
		nickName: user.nickName,
		avatarId: user.avatarId,
	});
});

// 회원가입
router.post('/signup', (req, res) => {
	const { userInfo } = req.body;

	if (users.findUserByEmail(userInfo.email))
		return res.status(401).send({ error: '이미 등록된 사용자입니다.' });

	users.createUser(userInfo);
	res.send({ message: '회원가입에 성공하였습니다.' });
});

// 로그아웃
router.get('/signout', (req, res) => {
	return res.clearCookie(TOKEN).end();
});

// 이메일 중복체크
router.post('/checkemail', (req, res) => {
	const { email } = req.body;

	res.send({ duplicated: !!users.findUserByEmail(email) });
});

// 닉네임 중복체크
router.post('/checknickname', (req, res) => {
	const { nickName } = req.body;

	res.send({ duplicated: !!users.findUserByNickName(nickName) });
});

module.exports = router;
