const express = require('express');
const router = express.Router();

// 장바구니 목록
router.get('/:userid', (req, res) => {
	const { userid } = req.params;

	res.send({ hi: 'cart' });
});

// 장바구니 상품 추가
router.post('/:userid', (req, res) => {
	const { userid } = req.params;

	res.send();
});

// 장바구니 상품 삭제
router.delete('/:cartid', (req, res) => {
	const { cartid } = req.params;

	res.send();
});

// 장바구니 상품 정보 수정
router.patch('/:cartid', (req, res) => {
	const { cartid } = req.params;

	res.send();
});

module.exports = router;
