const { v4: uuidv4 } = require('uuid');

let comments = [
	{
		id: uuidv4(),
		postId: '1',
		author: 'qwer@qwer.ee',
		content: `저는 지금 <b>아이폰12 프로맥스</b> 사용중이고 업데이트도 최신 버전인 <b>16.4.1</b> 사용중인데 같은 현상을 일으킨 적은 없고,
		<b>예전에 아이폰X를 사용할 때 그런 동일한 경험이 있긴 합니다.</b><br/><br/>
		저 같은 경우엔 유심칩쪽을 제대로 인식 못해서 처음엔 기다리면 다시 되더니
		<i>나중에는 유심칩 트레이를 뽑았다 다시 장착하거나 그 후에는 동일한 방법을 써도 인식이 잘 안되더라구요.</i><br/><br/>
		사용하시다가 앱 실행 초기말고 사용하시다 중간 중간에 그런다면 
		<mark><b>유심칩 트레이 불량이거나 유심칩 불량일 가능성도 있기 때문에</b></mark>
		괜찮으시다면 유심칩 먼저 교환해보시거나 <b>esim</b> 지원한다면 esim도 한 번 고려해 보세요.`,
		createAt: new Date('2023-04-24'),
		updateAt: new Date(),
		certified: true,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'cooljp95@gmail.com',
		content: '해결하기 어려운 문제라고 생각되네요.',
		createAt: new Date('2023-04-15'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'kylekwon.dev@gmail.com',
		content:
			'저도 똑같은 증상을 겪었었는데, 해결되지 않아 답답함을 겪었습니다.',
		createAt: new Date('2023-04-10'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email2@email.com',
		content: '이전 폰 기종도 복불복인 것 같네요.',
		createAt: new Date('2023-04-01'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email25@email.com',
		content: '제대로 된 해결 방법이 있다면 공유해주시면 좋을 것 같네요 🙏🏻',
		createAt: new Date('2023-03-24'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email24@email.com',
		content:
			'저도 아이폰 11 pro max를 사용하고 있는데 똑같은 문제가 발생해서, 공기계로 사용하고 있어요.',
		createAt: new Date('2023-03-21'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email23@email.com',
		content:
			'애플 스토어 매장 방문하셔서 제대로 문의해보시면 좋을 것 같네요 🥲',
		createAt: new Date('2023-03-11'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email22@email.com',
		content: `저도 똑같은 문제로 <b>애플 스토어</b>에 방문했는데 제대로 된 해결책을 주지 않아서, esim으로 바꿔서 해결했습니다. <br/>
		특정 앱에서 네트워크 통신 간에 문제가 있는 것 같은데, <b>확실한 해결책은 아니지만 저는 esim으로 해결했습니다.</b> <br/>
		<i>물리적으로 비싼 돈</i>을 다시 들여서 핸드폰을 바꾸는 것보다 나은 것 같네요.`,
		createAt: new Date('2023-03-06'),
		updateAt: new Date(),
		certified: false,
		useful: true,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email21@email.com',
		content: '제대로 된 해결책이 나오진 않은 것 같네요.',
		createAt: new Date('2023-02-26'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email19@email.com',
		content: '해결 불가능인가요?',
		createAt: new Date('2023-02-21'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email18@email.com',
		content: `권장 답변처럼 esim 사서 해결해보는 것도 하나의 방법일 것 같아요! <br/>`,
		createAt: new Date('2023-02-20'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email17@email.com',
		content: '안드로이드폰으로 갈아타시는 것도 하나의 방법이네요.',
		createAt: new Date('2023-02-11'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email16@email.com',
		content: '어마어마한 수리비네요.....',
		createAt: new Date('2023-02-04'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email15@email.com',
		content: '수리비가 60만원이라뇨...',
		createAt: new Date('2023-01-31'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email14@email.com',
		content: '사설 수리업체를 방문 해보시는 것도 방법일 것 같아요.',
		createAt: new Date('2023-01-21'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email13@email.com',
		content: 'IOS 버전을 다운그레이드 하는 건 어떠신가요?',
		createAt: new Date('2023-01-15'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email12@email.com',
		content: '해결하는 방법 찾으시면 공유 부탁드립니다...',
		createAt: new Date('2023-01-04'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email11@email.com',
		content: 'haben sie eine lösung gefunden? Bitte 🚀',
		createAt: new Date('2023-01-01'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email10@email.com',
		content: '교체하거나 새 휴대폰을 구매해야겠네요.',
		createAt: new Date('2022-12-28'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email9@email.com',
		content: '교체하거나 새 휴대폰을 구매해야겠네요.',
		createAt: new Date('2022-12-28'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email8@email.com',
		content: 'Please....',
		createAt: new Date('2022-12-25'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'email7@email.com',
		content: 'BITTE',
		createAt: new Date('2022-12-25'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '2',
		author: 'email8@email.com',
		content: `특정인에게 발생되는 내용인가요? 상대방도 동일 모델이라면 사운드가 나오지 않는 문제에 대한 iPhone 12 및 iPhone 12 Pro 서비스 프로그램
		해당 서비스가 필요한지 확인을 해봐야할 것 같네요.`,
		createAt: new Date('2023-03-25'),
		updateAt: new Date(),
		certified: true,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '2',
		author: 'email11@email.com',
		content: `정말로 급한 상황에서는 <b>이어폰</b>을 활용해야 할 것 같네요.`,
		createAt: new Date('2023-03-29'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '2',
		author: 'email24@email.com',
		content: `혹시 통화 환경이 좋지 않은 건 아닐까요?`,
		createAt: new Date('2023-04-01'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '2',
		author: 'email21@email.com',
		content: `음성이 전달되는 마이크 부분에 먼지가 많이 껴서 그럴 수도 있을 것 같네요. <br/>
		<b>휴대폰을 오래사용하셨다면, 내부 청소를 하는 것도 방법일 것 같아요.</b><br/>
		그래도 안된다면, 애플 공식 매장에 방문하셔서 수리받으셔야 해요`,
		createAt: new Date('2023-04-05'),
		updateAt: new Date(),
		certified: false,
		useful: true,
	},
	{
		id: uuidv4(),
		postId: '3',
		author: 'fineapple@email.com',
		content: `M1 칩이 탑재된 MacBook Air 충전 속도에 대해 글을 남겨주셨군요.
		아쉽게도 Apple은 기기별 충전 속도에 대한 공식적인 자료가 없습니다.
		급속 충전 여부가 궁금하신거라면, <b><i>M2칩이 탑재된 MacBook Air가 급속 충전이 가능하며,</i></b>
		가장 충전 전류량이 큰 Macbook용 충전 어댑터를 이용하시더라도 
		자동으로 해당 제품에 맞는 전력량으로 조절하여 공급이 됩니다. <br/><br/>
		따라서 더 높은 용량의 충전기를 이용하시는 것은 문제가 없습니다. 다만 더 높은 용량의 타사 어댑터를 이용하시는 경우에는 정상적인 작동을 보장드리기 어렵습니다.<br/>
		추가 질문은 <mark>Apple 기술 지원 080-333-8877</mark>에 연결해 보시길 바랍니다. <br/>
		조금이나마 도움이 되셨길 바랍니다.
		감사합니다.<br/>
		`,
		createAt: new Date('2023-03-13'),
		updateAt: new Date(),
		certified: true,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '3',
		author: 'email15@email.com',
		content: `Belkin에서 지원하는 충전기 어댑터 제품들 중에 급속 충전 지원하는 것을 알고 있는데요. <br/>
		m1 맥북 에어 자체가 지원을 하지 않는 것 같더라구요.`,
		createAt: new Date('2023-03-16'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '4',
		author: 'email2@email.com',
		content: `특정 앱을 실행하면 해당 오류가 보이는 증상이시군요.<br/>
		이 문제는 해당 앱의 문제이기 때문에 <mark>개발사로 해당 버그에 대해 보고 후 문제 해결 방법을 확인</mark>해 보세요.<br/>
		Apple 지원 커뮤니티를 이용해 주셔서 감사드리며, 문제가 잘 해결되기를 바랍니다.`,
		createAt: new Date('2023-03-18'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '4',
		author: 'email3@email.com',
		content: `앱 개발자에게 직접 문의하시는 게 빠를 것 같네요.`,
		createAt: new Date('2023-04-08'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '5',
		author: 'email6@email.com',
		content: `아이패드에서 유튜브 앱을 사용할때 기능이라면 구글이나 유튜브쪽에 문의나 확인해보시는게 맞을 듯 합니다.<br/>
		제가 <a href="https://www.google.com"><u>구글 고객 센터</u></a>에서 확인시 관련 내용은 없긴 하더라구요.<br/>
		문제가 잘 해결되시길 바랍니다. 감사합니다. <br/>
		`,
		createAt: new Date('2023-01-23'),
		updateAt: new Date(),
		certified: false,
		useful: true,
	},
	{
		id: uuidv4(),
		postId: '6',
		author: 'kylekwon.dev@gmail.com',
		content:
			'<b>설정 -> safari -> 방문기록 및 웹사이트 데이터 지우기</b> 진행해도 동일한가요?',
		createAt: new Date('2023-03-19'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '19',
		author: 'email19@email.com',
		content: `시스템 종료 후 MacBook의 상판 덮개를 닫으면 자동으로 부팅이 되는 증상이시군요.<br/>
			제 생각에는 MacBook의 <b>힌지 부분</b>이 문제로 생각이 됩니다.<br/><br/>
			감사합니다.`,
		createAt: new Date(),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '29',
		author: 'email20@email.com',
		content: `애플 스토어 예약관련 문의 주셨군요.<br/><br/>
			친구분의 휴대폰을 사용할 수 없는 상태이기 때문에, 어쩔수 없는 상황이라면 그렇게 진행하셔도 될 것 같습니다.<br/>
			<mark><b>다만, 예약자 정보를 친구 분의 성함으로 진행해 보시기 바랍니다.</b></mark><br/>
			아무쪼록 문제가 잘 해결되시길 바랍니다.`,
		createAt: new Date('2022-10-06'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '31',
		author: 'fineapple@email.com',
		content: `<b>iPhone 14 Pro 발열 관련 글</b>을 남겨주셨군요.
			일반적으로 아래와 같은 상황에서는 기기의 온도가 높아질 수 있습니다.
			<br/><br/>
			- 1. 기기를 처음 설정하는 경우
			<br/>
			- 2. 백업에서 복원하는 경우
			<br/>
			- 3. 소프트웨어 업데이트 후 사진 앱에서 얼굴, 장소 또는 키워드를 태그할 때처럼 앱에서 데이터를 재인덱스하거나 다시 분석하는 경우
			<br/>
			- 4. 증강 현실 또는 그래픽이 많은 앱이나 기능을 사용하는 경우, 기기의 온도가 특정 임계 값을 초과하게 되면 온도 경고 화면을 보여 줍니다.<br/><br/>
			다만, 현재 사용한지 두달이 된 상황으로
			기기의 온도가 높아질 수 있는 일반적인 상황이 아니라면, 추가적인 점검 또는 확인이 필요할 수 있습니다.
			아래 방법으로 추가 문의해 주세요.
			<br/><br/>
			<b><mark>Apple 지원 전화문의: 080-333-4000</mark></b>
			<br/><br/>
			"발열"에 대한 문제가 남겨드린 내용과는 다르게 비정상적인 열이 발생하는 경우 기기를 점검 받아보실 필요가 있으며, <br/>
			이 경우에는 가까운 Apple Store 혹은 Apple 공인 서비스 센터를 방문해 보실수도 있습니다.
			<br/><br/>
			조금이나마 도움이 되셨길 바랍니다.<br/>
			감사합니다.`,
		createAt: new Date('2022-10-02'),
		updateAt: new Date(),
		certified: false,
		useful: true,
	},
	{
		id: uuidv4(),
		postId: '32',
		author: 'fineapple@email.com',
		content: `아이패드 화면이 켜지지 않고 터치도 되지 않아 문의 주셨군요. <br/>
		문의해 주신 증상을 보면 하드웨어 점검이 필요해 보입니다.<br/>
		<b><i>혹시, 모를 데이터 유실을 방지하기 위해 센터 방문전 꼭 데이터 백업을 해 주시기 바랍니다.</i></b><br/><br/>
		아무쪼록 문제가 잘 해결되시길 바랍니다.
		감사합니다.`,
		createAt: new Date('2022-09-23'),
		updateAt: new Date(),
		certified: true,
		useful: false,
	},
];

const getComments = () => comments;
const getComment = (commentId) => comments.find(({ id }) => id === commentId);

const getPostComments = (postId) =>
	comments.filter((comment) => postId === comment.postId);

const createComment = (commentInfo) => {
	comments = [
		{
			...commentInfo,
			id: uuidv4(),
			certified: false,
			useful: false,
		},
		...comments,
	];
};

const updateUsefulComment = (commentId, useful) => {
	comments = comments.map((comment) =>
		comment.id === commentId ? { ...comment, useful } : comment
	);
};

const updateCertifiedComment = (commentId, certified) => {
	comments = comments.map((comment) =>
		comment.id === commentId ? { ...comment, certified } : comment
	);
};

const updateComment = (commentId, commentInfo) => {
	comments = comments.map((comment) =>
		comment.id === commentId
			? { ...comment, ...commentInfo, updateAt: new Date() }
			: comment
	);
};

const deleteComment = (commentId) => {
	comments = comments.filter((comment) => comment.id !== commentId);
};

module.exports = {
	getComments,
	getComment,
	getPostComments,
	createComment,
	updateComment,
	updateUsefulComment,
	updateCertifiedComment,
	deleteComment,
};
