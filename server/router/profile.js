const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const users = require('../mock-data/users');

// 사용자 프로필
router.post('/', (req, res) => {
	try {
		const accessToken = req.cookies.accessToken;
		const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

		const { email: userId } = users.findUserByEmail(decoded.email);

		const user = users.findUserByEmail(userId);

		if (!user)
			return res
				.status(401)
				.send({ error: '해당 사용자가 존재하지 않습니다.' });

		const {
			nickName,
			firstName,
			lastName,
			country,
			phoneNumber,
			products,
			point,
			level,
			avatarId,
			aboutMe,
			birthDate,
			email,
		} = user;

		res.send({
			nickName,
			name: lastName + firstName,
			country,
			phoneNumber,
			products,
			point,
			level,
			avatarId,
			aboutMe,
			birthDate,
			email,
		});
	} catch (e) {
		console.error('😱 사용자 인증 실패..', e);
		res.status(403).send({ auth: 'fail' });
	}
});

// 프로필 수정
router.post('/edit', (req, res) => {
	try {
		const accessToken = req.cookies.accessToken;
		const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

		const { email: userId } = users.findUserByEmail(decoded.email);

		const user = users.findUserByEmail(userId);

		if (!user)
			return res
				.status(401)
				.send({ error: '해당 사용자가 존재하지 않습니다.' });

		const userInfo = req.body;

		users.updateProfile(userInfo);
		res.send({ message: '회원 정보가 수정되었습니다.' });
	} catch (e) {
		console.error('😱 사용자 인증 실패..', e);
		res.status(401).send({ auth: 'fail' });
	}
});

router.post('/register-product', (req, res) => {
	try {
		const accessToken = req.cookies.accessToken;
		const { productInfo } = req.body;

		const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

		const user = users.findUserByEmail(decoded.email);
		if (!user)
			return res
				.status(401)
				.send({ error: '해당 사용자가 존재하지 않습니다.' });

		const { email: userId } = user;

		users.addProduct({ userId, productInfo });

		res.send({ message: '기기 등록이 완료되었습니다.' });
	} catch (e) {
		console.error('😱 사용자 인증 실패..', e);
		res.status(401).send({ auth: 'fail' });
	}
});

router.get('/community/:nickName', (req, res) => {
	const { nickName } = req.params;

	const userInfo = users.findUserProfileByNickName(nickName);

	res.send({ userInfo });
});

module.exports = router;
