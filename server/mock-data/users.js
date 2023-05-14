// const bcrypt = require('bcrypt')

/* 
	Fake users database

	user => { 
		id : uuid
		firstName: string,
		lastName: string,
		country: string,
		birthDate: date,
		email: string,
		password: string,
		nickName: string,
		phoneNumber: string, 
		products : [],
		point : number
		level : number,
		avatar : string | null
	}

	product-type 목록 : 
		'ipad-basic', 'ipad-air', 'ipad-mini', 'ipad-pro',
  	'iphone-13', 'iphone-14', 'iphone-14-pro', 'iphone-se',
  	'macbook-air-m1', 'macbook-air-m2',
  	'macbook-pro-13', 'macbook-pro-14', 'macbook-pro-16',

	product: {
		type: string,
		// options: {}, // 상품 주문하기 기능 구현시 설정
	}
*/

// verify 시, 클라이언트에 전송할 데이터 :email, nickName, avatarId
// 랭크에 접근 시 : level, point
let users = [
	{
		firstName: '인애플',
		lastName: '파',
		country: '미국',
		birthDate: new Date('1976-04-01'),
		email: 'fineapple@email.com',
		password: 'apple1234',
		nickName: 'FineApple',
		phoneNumber: '02-6712-6700',
		products: [],
		point: 0,
		level: 0,
		avatarId: 'avatar-33',
		aboutMe: '나는 파인애플 관리자',
		role: 'admin',
	},
	{
		firstName: '서',
		lastName: '준표',
		country: '대한민국',
		birthDate: new Date('1995-09-15'),
		email: 'cooljp95@naver.com',
		password: 'ABcdef12',
		nickName: 'Cool JP',
		phoneNumber: '010-2395-9282',
		products: [],
		point: 520,
		level: 6,
		avatarId: 'avatar-2',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '으',
		lastName: '아니',
		country: '대한민국',
		birthDate: new Date('1995-09-15'),
		email: 'cooljp95@gmail.com',
		password: 'ABcdef12',
		nickName: 'Cool',
		phoneNumber: '010-2395-9282',
		products: [],
		point: 140,
		level: 2,
		avatarId: 'avatar-19',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: 'park',
		lastName: 'sunhwa',
		country: '대한민국',
		birthDate: new Date('1994-06-03'),
		email: 'qwer@qwer.ee',
		password: 'Qwer1234',
		nickName: '서나',
		phoneNumber: '010-1234-1234',
		products: [
			{ type: 'ipad-pro' },
			{ type: 'ipad-basic' },
			{ type: 'iphone-13' },
			{ type: 'iphone-14' },
			{ type: 'iphone-14-pro' },
			{ type: 'iphone-se' },
		],
		point: 590,
		level: 6,
		avatarId: 'avatar-1',
		aboutMe: '응애 나 아기 프엔',
		role: 'user',
	},
	{
		firstName: 'minhyuk',
		lastName: 'kwon',
		country: '대한민국',
		birthDate: new Date('1996-06-15'),
		email: 'kylekwon.dev@gmail.com',
		password: 'khm0912',
		nickName: 'hyuk',
		phoneNumber: '010-1111-0615',
		products: [
			{ type: 'ipad-pro' },
			{ type: 'iphone-14-pro' },
			{ type: 'iphone-se' },
		],
		point: 550,
		level: 6,
		avatarId: 'avatar-0',
		aboutMe: 'junior fe dev',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '이',
		country: '대한민국',
		birthDate: new Date('2000-01-02'),
		email: 'email30@email.com',
		password: 'Qwer1234',
		nickName: '김이',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 270,
		level: 3,
		avatarId: 'avatar-30',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡25',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email25@email.com',
		password: 'Qwer1234',
		nickName: '25',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 490,
		level: 5,
		avatarId: 'avatar-26',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡24',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email24@email.com',
		password: 'Qwer1234',
		nickName: 'KOON',
		phoneNumber: '010-3443-4987',
		products: [],
		point: 480,
		level: 5,
		avatarId: 'avatar-25',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡23',
		country: '대한민국',
		birthDate: new Date('1980-02-05'),
		email: 'email23@email.com',
		password: 'Qwer1234',
		nickName: '8080',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 460,
		level: 5,
		avatarId: 'avatar-24',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡22',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email22@email.com',
		password: 'Qwer1234',
		nickName: '투투입니다',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 440,
		level: 5,
		avatarId: 'avatar-23',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡21',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email21@email.com',
		password: 'Qwer1234',
		nickName: '트웬티원',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 420,
		level: 5,
		avatarId: 'avatar-22',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡20',
		country: '대한민국',
		birthDate: new Date('2004-02-03'),
		email: 'email20@email.com',
		password: 'Qwer1234',
		nickName: 'MyAge_IsTwenty',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 400,
		level: 5,
		avatarId: 'avatar-21',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡19',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email19@email.com',
		password: 'Qwer1234',
		nickName: '쿵후핸더',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 380,
		level: 4,
		avatarId: 'avatar-20',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡18',
		country: '대한민국',
		birthDate: new Date('2006-12-21'),
		email: 'email18@email.com',
		password: 'Qwer1234',
		nickName: '에잇',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 360,
		level: 4,
		avatarId: 'avatar-19',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡17',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email17@email.com',
		password: 'Qwer1234',
		nickName: 'SAMSUNG',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 340,
		level: 4,
		avatarId: 'avatar-18',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡16',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email16@email.com',
		password: 'Qwer1234',
		nickName: 'LG',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 320,
		level: 4,
		avatarId: 'avatar-17',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡15',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email15@email.com',
		password: 'Qwer1234',
		nickName: 'LONDON',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 300,
		level: 4,
		avatarId: 'avatar-16',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡14',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email14@email.com',
		password: 'Qwer1234',
		nickName: 'PARIS',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 280,
		level: 3,
		avatarId: 'avatar-15',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡13',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email13@email.com',
		password: 'Qwer1234',
		nickName: 'BERLIN',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 260,
		level: 3,
		avatarId: 'avatar-14',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡12',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email12@email.com',
		password: 'Qwer1234',
		nickName: 'PRAGUE',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 240,
		level: 3,
		avatarId: 'avatar-13',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡11',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email11@email.com',
		password: 'Qwer1234',
		nickName: 'ROME',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 220,
		level: 3,
		avatarId: 'avatar-12',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡10',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email10@email.com',
		password: 'Qwer1234',
		nickName: 'HELSINKI',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 200,
		level: 3,
		avatarId: 'avatar-11',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡9',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email9@email.com',
		password: 'Qwer1234',
		nickName: 'STOCKHOLM',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 180,
		level: 2,
		avatarId: 'avatar-10',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡8',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email8@email.com',
		password: 'Qwer1234',
		nickName: 'MUNICH',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 160,
		level: 2,
		avatarId: 'avatar-9',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡7',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email7@email.com',
		password: 'Qwer1234',
		nickName: 'BERN',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 140,
		level: 2,
		avatarId: 'avatar-8',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡6',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email6@email.com',
		password: 'Qwer1234',
		nickName: 'MANCHESTER',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 120,
		level: 2,
		avatarId: 'avatar-7',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡5',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email5@email.com',
		password: 'Qwer1234',
		nickName: 'COPENHAGEN',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 100,
		level: 2,
		avatarId: 'avatar-6',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡4',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email4@email.com',
		password: 'Qwer1234',
		nickName: 'VIENNA',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 80,
		level: 1,
		avatarId: 'avatar-5',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡3',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email3@email.com',
		password: 'Qwer1234',
		nickName: 'POLSKI',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 60,
		level: 1,
		avatarId: 'avatar-4',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡2',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email2@email.com',
		password: 'Qwer1234',
		nickName: 'BUDAPEST',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 40,
		level: 1,
		avatarId: 'avatar-3',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡1',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email1@email.com',
		password: 'Qwer1234',
		nickName: 'TOKYO',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 20,
		level: 1,
		avatarId: 'avatar-2',
		aboutMe: '',
		role: 'user',
	},
	{
		firstName: '김',
		lastName: '땡0',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email0@email.com',
		password: 'Qwer1234',
		nickName: 'ZERO',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 0,
		level: 1,
		avatarId: 'avatar-1',
		aboutMe: '',
		role: 'user',
	},
];

const calcLevel = (point) => {
	return Math.floor(point / 100) + 1;
};

const findUserByEmail = (email) => users.find((user) => user.email === email);

const findUserByNickName = (nickName) =>
	users.find((user) => user.nickName === nickName);

const findUser = (email, password) =>
	users.find((user) => user.email === email && user.password === password);

const createUser = (userInfo) => {
	users = [
		...users,
		{
			...userInfo,
			products: [],
			point: 0,
			level: 1,
			avatarId: null,
		},
	];
};

const findUserProfileByNickName = (userNickName) => {
	const { email, nickName, level, point, avatarId, aboutMe } = users.find(
		(user) => user.nickName === userNickName
	);

	return { email, nickName, level, point, avatarId, aboutMe };
};

const checkUserIsAdmin = (email) =>
	users.find((user) => user.email === email).role === 'admin';

const getUsersRank = (topCount) => {
	// TODO:알고리즘 수정
	const usersRank = users.sort((user1, user2) => user2.point - user1.point);

	return usersRank
		.slice(0, +topCount || 10)
		.map(
			({ firstName, lastName, nickName, point, level, avatarId }, index) => ({
				rank: index + 1,
				name: lastName + firstName,
				nickName,
				point,
				level,
				avatarId,
			})
		);
};

const updatePoint = (email, point) => {
	users = users.map((user) =>
		user.email === email
			? {
					...user,
					point: user.point + point,
					level: calcLevel(user.point + point),
			  }
			: user
	);
};

const updateProfile = ({ userInfo: { userId, ...newUserInfo } }) => {
	users = users.map((user) =>
		user.email === userId ? { ...user, ...newUserInfo } : user
	);
};

const addProduct = ({ userId, productInfo }) => {
	users = users.map((user) =>
		user.email === userId
			? {
					...user,
					products: [...user.products, { type: productInfo.productType }],
			  }
			: user
	);
};

const getUsers = () => users;

module.exports = {
	findUser,
	createUser,
	updateProfile,
	findUserByEmail,
	findUserByNickName,
	findUserProfileByNickName,
	checkUserIsAdmin,
	getUsers,
	getUsersRank,
	updatePoint,
	addProduct,
};