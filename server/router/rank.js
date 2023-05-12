const express = require('express');
const router = express.Router();
const users = require('../mock-data/users');

// 사용자 랭킹
router.get('/', (req, res) => {
	const { topCount } = req.query;
	const usersRank = users.getUsersRank(topCount);

	res.send({ usersRank });
});

module.exports = router;
