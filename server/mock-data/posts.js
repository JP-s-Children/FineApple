const { v4: uuidv4 } = require('uuid');
const comments = require('./comments');

/**
 * 	{
		id: uuidv,
		title: string,
		content: string,
		author: string,
		createAt: date,
		updateAt: date,
		category: string,
		productType: string,
		completed: boolean,
		certified: boolean,
		comments?: array[],
	},
 */

/** Comment Data
 * 
 * const comment = {
	id: uuidv4(),
	author: 'cooljp95@naver.com',
	content: '',
	createAt: new Date(),
	updateAt: new Date(),
	certified: false,
};
 */

let posts = [
	{
		id: '1',
		title: 'IOS 16.4 업데이트 후 앱 실행 시마다 셀룰러 네트워크가 자주 끊어짐',
		content: `워낙 휴대폰을 애지중지 사용하고있느라, 애플케어 및 통신사 보험을 사용하지 않고 있습니다. 물에 빠트리거나, 간단한
		충격조차 없었고요, 작년 여름 정식수리업체에서 메인보드 결함 판정 후 무상수리, 메인보드 교체받았습니다. 물론
		데이터는 1도 복구 못하였구요.. 당시 교체시 카메라와 액정? 빼고 전체 새 제품으로 교체가 되었다고
		말씀하더군요. <i>(작년 여름 사무실에서 가만히 멜론 어플 사용중 전원OFF 후 켜지지 않았음)</i> 
		<br/>
		<br/>
		이 같은 증상이 지난 4월20일, 수리한 지 1년도 되지 않아 발생하였습니다. 또 방문을 했지요. 메인보드 교체 후 90일 이내 무상이라고
		하네요. 결국, <b>58만7천원</b>을 수리비로 내야한다고 합니다. 너무 어이가 없고 억울하네요. 사운드 결함은 있다고 들었는데 어떻게하면 새 제품이 1년도 안 되서 똑같이 발생할 수가 있을까요. 교체 한 메인보드 조차 결함이 있던건 아닐까요.
		60만원이라는 거금을 투자해서 다시 수리를 해도 또 같은 증상이 발생하면 또 60만원이라는 큰 돈이 나가겠지요. 수리
		못하고 있습니다. 6년된 안드로이드 폰에 유심침만 꼽아놓고 있습니다. 어떤 사람은 6년.. 5년.. 같은 제품을 써도 이런
		증상이 없다고 하는데, 이런 일이 있을 수 있나요? `,
		author: 'cooljp95@naver.com',
		createAt: new Date('2023-03-27'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-14',
		completed: true,
		certified: true,
	},

	{
		id: '2',
		title:
			'아이폰 13 프로 스피커폰으로 통화를 할 시 상대방이 제 목소리 계속 끊겨서 통화가 힘들다고 하는데 해결 방법이 있을까요?',
		content: `아이폰 13 프로 사용 중인 유저입니다.<br/>
		스피커폰으로 통화를 할 시 상대방이 제 목소리 계속 끊겨서 통화가 힘들다고 합니다.<br/>
		해결 방법이 있을까요?<br/>
		`,
		author: 'kylekwon.dev@gmail.com',
		createAt: new Date('2023-03-21'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-13-pro',
		completed: true,
		certified: true,
	},
	{
		id: '3',
		title: 'm1 맥북에어 최대 충전속도가 어떻게 되나요?',
		content: `m1 맥북에어 최대 충전속도가 어떻게 되나요..?<br/>
		급속 충전기를 사용하고 싶은데, 최대용량이 맞는 지 궁금하여 문의드립니다.`,
		author: 'email21@email.com',
		createAt: new Date('2023-03-13'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-air-m1',
		completed: false,
		certified: true,
	},
	{
		id: '4',
		title: `특정 어플을 들어갈 때마다 'java.lang.String' 관련 오류가 뜨는데 해결책이 있을까요`,
		content: `특정 어플을 들어갈 때마다<br/><br/>
		<code>Failed to convert value of type java.lang.String to required type 
		'int'; nested exception is java.lang.NumberFormatException: For input string: 'NaN'</code><br/><br/>
		위와 같은 오류가 뜹니다. 해결책이 있을까요? `,
		author: 'cooljp95@naver.com',
		createAt: new Date('2023-03-09'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-se',
		completed: false,
		certified: false,
	},
	{
		id: '5',
		title:
			'아이패드 동영상 시청 중 화면 클릭시 동영상 배속되는 기능이 작동을 하지 않습니다. 해결 방법이 있을까요?',
		content: `
		아이패드로 유튜브 동영상 시청할 때
		화면을 누르고 있을 경우 동영상이 배속이 되는 기능이 있었는데 
		어느 순간 기능이 작동하지 않습니다.
		혹시 해결방법이 있을까요?`,
		author: 'cooljp95@naver.com',
		createAt: new Date('2023-01-02'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-basic',
		completed: true,
		certified: false,
	},
	{
		id: '6',
		title: '애플 뮤직 & 앱스토어 어플 튕김',
		content:
			'<b>애플 뮤직</b>과 <b>앱스토어 어플</b>만 안들어가지고 계속 튕깁니다. 아예 어플이 안켜집니다. 재부팅도 해봤는데 똑같네요. 어떻게 해결할 수 있을까요? ',
		author: 'cooljp95@naver.com',
		createAt: new Date('2023-03-14'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-14-pro',
		completed: false,
		certified: false,
	},
	{
		id: '7',
		title: '맥북 이미지 캡처로 외장하드에 사진 옮기기',
		content: '',
		author: 'kylekwon.dev@gmail.com',
		createAt: new Date('2023-02-14'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-pro-16',
		completed: false,
		certified: false,
	},
	{
		id: '8',
		title: '맥북의 경우 trade in 어떻게 가능한가요?',
		content: '',
		author: 'email12@email.com',
		createAt: new Date('2023-02-05'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-pro-13',
		completed: true,
		certified: false,
	},
	{
		id: '9',
		title: '맥북 잠자기 프리징현상',
		content: '',
		author: 'cooljp95@naver.com',
		createAt: new Date('2023-02-01'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-pro-14',
		completed: false,
		certified: false,
	},
	{
		id: '10',
		title: '맥북 프로 화면 닦을 때 권장사항 또는 주의해야할 점 궁금합니다',
		content: '',
		author: 'qwer@qwer.ee',
		createAt: new Date('2023-01-19'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-pro-16',
		completed: false,
		certified: false,
	},
	{
		id: '11',
		title:
			'아이패드 ios 16 이후 버전에서 키보드 마우스 동시 사용시 동작이 이상합니다. 저와 같은 현상을 겪으시는분은 없으신가요?',
		content: '',
		author: 'email6@email.com',
		createAt: new Date('2023-01-12'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-pro',
		completed: false,
		certified: false,
	},
	{
		id: '12',
		title: '쿠팡에서 산 패드 교환을 공식스토어에서도 해주나요?',
		content: '',
		author: 'email7@email.com',
		createAt: new Date('2023-01-08'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-air',
		completed: false,
		certified: false,
	},
	{
		id: '13',
		title:
			'아이패드 프로6세대 12.9인치 디스플레이에 습기 찬거 같은 뿌옅고 흰색번짐 현상이 계속 나타나는데 불량인가요?',
		content: '',
		author: 'email8@email.com',
		createAt: new Date('2023-01-02'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-pro',
		completed: false,
		certified: false,
	},

	{
		id: '14',
		title:
			'맥북에서 아이패드로 에어드롭 실패 문제가 자주 발생하는데 어떤 근본적인 해결책은 없나요?',
		content: '',
		author: 'email9@email.com',
		createAt: new Date('2022-12-24'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-basic',
		completed: false,
		certified: false,
	},
	{
		id: '15',
		title: '애플 정품 20w 충전기로 아이패드 미니 6세대 충전해도 괜찮나요?',
		content: '',
		author: 'email10@email.com',
		createAt: new Date('2022-12-12'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-mini',
		completed: false,
		certified: false,
	},
	{
		id: '16',
		title: '애플 정품 15w 충전기로 아이패드 미니 5세대 충전해도 괜찮나요?',
		content: '',
		author: 'email11@email.com',
		createAt: new Date('2022-12-09'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-mini',
		completed: false,
		certified: false,
	},
	{
		id: '17',
		title:
			'로그아웃을 했다가 다시 로그인을 하고 메모를 봤더니 내용 일부분이 없어져 있었습니다',
		content: '로그아웃 후 메모 내용 사라짐.. 어떻게 해야할까요..',
		author: 'email12@email.com',
		createAt: new Date('2022-12-01'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-se',
		completed: false,
		certified: false,
	},
	{
		id: '18',
		title:
			'알림센터를 내리면 밝기가 어두워졌다가 다시 정상으로 돌아오는 화면 깜빡임 현상이 종종 나타납니다. 기기 문제일까요?',
		content: '',
		author: 'email13@email.com',
		createAt: new Date('2022-11-24'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-13',
		completed: false,
		certified: false,
	},
	{
		id: '19',
		title:
			'시스템 종료 후 맥북의 상판 덮개를 닫으면 자동으로 부팅이 됩니다. 어떻게 해결해야 하는지 알려주세요.',
		content: `시스템 종료 후 맥북의 상판 덮개를 닫으면 자동으로 부팅이 됩니다. 상판 덮개를 덮지 않고 그대뤄 둬야지만 종료 후 자동 부팅이 되지 않습니다. <br/>
		켜져 있는 상태에서도 상판 덮개를 덮어두면 엄청난 발열과 함께 배터리 소모가 빠릅니다. 또, 부팅 후 <mark><b>백그라운드 항목이 추가되었습니다</b></mark> 라는 알림이 계속 뜨는 문제도 있습니다.`,
		author: 'email14@email.com',
		createAt: new Date('2022-11-20'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-pro-14',
		completed: true,
		certified: false,
	},
	{
		id: '20',
		title: '아이패드 화면에 빨간색 작은점이 보이는데 왜그런건가요?',
		content: `아이패드 화면에 빨간색 작은점 5개 정도가 보이는데 왜그런건가요ㅜㅜ? `,
		author: 'email14@email.com',
		createAt: new Date('2022-11-15'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-pro',
		completed: false,
		certified: false,
	},
	{
		id: '21',
		title: 'Apple 정품 매직 키보드 폴리오 iPad 10세대용 찍힘 무상수리 가능여부',
		content: '옆에 사이드 찍힘 무상수리 되나요??',
		author: 'email13@email.com',
		createAt: new Date('2022-11-12'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-basic',
		completed: false,
		certified: false,
	},
	{
		id: '22',
		title:
			'아이패드 에어 4를 사용 중입니다. 사파리 웹사이트 로그인 비밀번호 자동완성시에 Touch ID 말고 기기 암호로 자동완성 시키는 방법은 없나요?',
		content: `아이패드 에어4를 사용 중입니다. 사파리 웹사이트 로그인 비밀번호 자동 완성시에 Touch ID 말고 기기 암호로 자동완성 시키는 방법은 없나요? 
			<br/>키보드 사용시에 Touch ID를 쓰는게 너무 불편하네요.`,
		author: 'email12@email.com',
		createAt: new Date('2022-11-10'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-air',
		completed: false,
		certified: false,
	},
	{
		id: '23',
		title:
			'iPadOS 16.5 로 업그레이드한 후 사파리 및 크롬의 동영상 플레이어가 이상합니다.',
		content: `
		1. iPadOS 16부터 아이패드의 사파리에서 동영상을 전체화면으로 전환 시 native 동영상 플레이어 
		(동영상 더블클릭 시 전체화면이 되면서 화면 가운데에 재생/일시정지 버튼과 양옆에 10초 뒤로/앞으로 버튼이 있고 화면 하단의 스크롤바로 미세 조정이 가능한 동영상 플레이어) 가 아닌, 
		각 사이트마다 다른 ui의 플레이어로 재생되는 “매우매우 불편“한 상황이 연출되었습니다.<br/>
		2. 이에 따라 기존에는 크롬 앱에서 동영상을 재생함으로써 위 문제를 해결하였는데요. <br/>
		3. 이번에 새로 나온 iPadOS 16.5 로 업그레이드하면서 크롬 앱에서도 더 이상 native 동영상 플레이어가 나타나지 않네요. 
		상세하게는, 사파리나 크롬이나 둘 다 동영상을 재생한 후 전체화면으로 전환하면 화면 가운데에 ”(사이트 주소)이(가) 전체 화면 모드입니다. 
		나가려면 아래로 쓸어내리십시오.“ 라는 문구만 뜨고 거의 랜덤 수준으로 사이트의 기존 플레이어 ui가 떴다가 안 떴다가 하네요.<br/><br/>
		<b>우선 애플 경영진 및 개발자 분들께 여쭐게요. </b><br/><br/>
		위와 같이 꽤 오랜 기간에 걸쳐 굳이 유저 입장에서 편리한 native 동영상 플레이어 ui를 못 쓰게 만들고 자꾸만 유저에게 불편하기 짝이 없는 사이트별 플레이어 ui를 강제로 쓰게 하시는 이유가 
		<mark>도대체 뭔지 도무지 이해가 잘 안 돼서요. 진지하게 이유를 여쭙니다.</mark><br/>
		그리고 혹시나 아이패드 유저분들 중에 저와 비슷한 어려움을 겪고 계신 분들은 애플 커뮤니티 게시판에 적극적으로 질문을 올려주시길 간곡히 부탁드립니다. <br/><br/>
		가뜩이나 유저 피드백이 좋지 않은 애플 특성상 어떤 문제 에 대해 왠만큼 공론화가 되지 않고는 해결을 해주지도 않거니와, 한국은 사실상 호구로 보고 마케팅하고 있기 때문에 더더욱 지속적인 의견 개진이 필요하다는 것이 개인적인 의견입니다. 공감하신다면 비슷한 내용이라 하더라도 여기 애플 커뮤니티를 통해 질문 혹은 문제점 공유를 해주시면 감사하겠습니다.
		마지막으로 혹시나 해결하신 분이 계신다면, 해결방법을 정중히 여쭙니다.
		`,
		author: 'email11@email.com',
		createAt: new Date('2022-11-04'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-pro',
		completed: false,
		certified: false,
	},
	{
		id: '24',
		title:
			'맥북 프로 ventura 블루투스 마우스 사용시 트랙패드 비활성화 되지 않는 현상.',
		content: `맥북 프로 m1 13인치 사용중인 유저입니다.
		얼마전까지 로지텍 g502 마우스를 동글이를 이용해 무선으로 이용하다
		<i>로지텍 g604 마우스</i>로 바꾸었습니다. g502를 usb c로 사용 할땐 트랙패드가 자동으로 비활성화 잘 되었는데
		이번에 g604마우스를 블루투스로 연결 하니깐 사용은 잘 되는데 트랙패드 비활성가 되지를 않습니다.<br/><br/>
		손쉬운 사용에서 트랙패드 비활성화도 체크 되어있는 상태입니다. 포토샵이나 파이널컷 작업을 하다 가끔 오류가 나서 불편한데,
  	이 현상을 수정 할 방법은 없나요? 아시는 분 답변 좀 부탁드립니다. ventura의 오류인건지, 아니면 로지텍 마우스를 맥북이 마우스로 인식을 못하는건지 너무 답답하네요.`,
		author: 'email10@email.com',
		createAt: new Date('2022-11-01'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-pro-16',
		completed: false,
		certified: false,
	},
	{
		id: '25',
		title:
			'애플 맥북 구매 시 unidays 인증을 통한 학생할인을 받을 수 있는지 여부와 방법이 궁금합니다.',
		content: `제목 그대로 국가평생교육진흥원 학점은행 제도를 통해 학사학위수여예정 (23년 2월) 인 상황입니다.
		애플 맥북 구매 시 unidays 인증을 통한 학생할인을 받을 수 있는지 여부와 방법이 궁금합니다. <br/>
		unidays 인증 시 학교 메일을 통해 인증하도록 되어 있는데, <br/>
		학점은행 제도 이용자의 경우 애초에 학교메일이란 것이 따로 없기도 하고, 학기마다 교육기관이 달라지기에<br/>
		이럴 경우 보편적으로 많이 이용하는 naver나 google 같은 포털 이메일을 인증 이메일로 사용해도 되는건지요? <br/>
		unidays 인증 과정을 구체적으로 설명해주시면 감사드리겠습니다 :)`,
		author: 'email9@email.com',
		createAt: new Date('2022-10-28'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-air-m2',
		completed: false,
		certified: false,
	},
	{
		id: '26',
		title: '아이폰 13 pro 전면 노치부분 센서 종류',
		content: `안녕하세요. 아이폰 13 PRO를 사용하고 있는데 전면 노치부분에 젤 왼쪽 카메라 제외, 그 옆에 총 3개의 센서가 있잖아요. <br/>
		그 종류를 알 수 있을까요?<br/><br/>
		혹시나 해킹을 당할까 걱정이 되어서 가려놓을까 하는데 카메라만 가려놓아도 해킹문제는 괜찮을까요?`,
		author: 'email4@email.com',
		createAt: new Date('2022-10-25'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-13-pro',
		completed: false,
		certified: false,
	},
	{
		id: '27',
		title:
			'계속해서 서버 신원을 확인할 수 없음 문구가 뜨고 휴대폰 속도도 느려진 것 같습니다. 어떻게 해결해야 하나요?',
		content: `계속해서 서버 신원을 확인할 수 없음 문구가 뜨고 휴대폰 속도도 느려진 것 같습니다. 어떻게 해결해야 하나요?`,
		author: 'email1@email.com',
		createAt: new Date('2022-10-22'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-13',
		completed: false,
		certified: false,
	},
	{
		id: '28',
		title:
			'The iPhone screen is locked for security reasons… How can I open it?',
		content: `<b>My Device is <u>'Apple iPhone 14</u> - 128 GB' </b><br/>
		The screen password was pressed incorrectly several times, so it became locked for security reasons…<br/>
		How can I open it? Please help me. Thank you'`,
		author: 'email24@email.com',
		createAt: new Date('2022-10-14'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-14',
		completed: false,
		certified: false,
	},
	{
		id: '29',
		title: `친구 휴대폰으로 애플 스토어 예약을 진행했는데요. 친구 휴대폰으로 예약한 상태에서 제가 가지고 가도 돼나요?`,
		content: `현재 휴대폰 전원이 들어오지 않고, 박스도 없는 상태라서 일련번호 확인도 불가하고, <br/>
		직접 예약 진행할 수가 없어서 친구 휴대폰으로 예약을 진행했는데요.<br/><br/>
		<b>친구 휴대폰은 아이폰 11</b>이고, <b>저는 아이폰 14 프로</b>인데 친구 걸로 예약한 상태에서 제 기기 가지고 가도 수리가 가능한가요?`,
		author: 'email23@email.com',
		createAt: new Date('2022-10-03'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-14-pro',
		completed: true,
		certified: false,
	},
	{
		id: '30',
		title:
			'아이폰 14 프로 카메라 수리는 전체 리퍼 말고 부분 수리로 할 수 있나요?',
		content: `아이폰 14 프로 카메라 수리는 전체 리퍼 말고 부분 수리로 할 수 있나요?<br/>
		어떤 분은 카메라 유리 파손, 카메라 렌즈 파손에 따라 <mark>부분 수리와 전체 수리가 달라질 수 있다는데</mark> 뭐가 다른건 지 설명좀 해주세요`,
		author: 'email30@email.com',
		createAt: new Date('2022-09-30'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-14-pro',
		completed: false,
		certified: false,
	},
	{
		id: '31',
		title:
			'아이폰 13 Pro 자주는 아닌데 발열이 신경이 쓰입니다. 불량이 아니라면 원인이 뭔가요?',
		content: `자주는 아닌데 신경쓰이는 일이라서요. <br/>
		<b>무리하게 사용을 한 것도 아닌데 발열이 갑자기 심해십니다.</b> <br/>
		쓰게 된 지 2달 좀 넘은 것 같은데 <mark><b>두꺼운 실리콘 케이쓰</b></mark>를 꼈는데도 느껴질 만큼의 발열입니다.<br/><br/>
		한 번은 충전기 연결되지 않을 때 홀드를 걸어놓고 사용하지 않았는데, 혼자 발열되서 폰 잡다 깜짝놀라서 전원 끄고 좀 식었을때 다시 켰구요.
		다른 한 번은 충전기 연결 중 유튜브 영상을 보다 그 때처럼 이상하다 싶을 정도로 발열되서 또 껐다 켰습니다.<br/><br/>
		이 두 번으로 발열이 사라지면 다행이지만 그럴 것 같지 않기도 하고 불량인가 싶은 생각이 들어 문의드려요.<br/>
		<b><i>불량이 아니라면 원인을 좀 알 수 있는 방법이 있을지도 알려주세요.</i></b>
		이 현상이 폰 바꾸기 전까지 지속되면 너무 거슬릴 것 같아서요`,
		author: 'email20@email.com',
		createAt: new Date('2022-09-25'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-13-pro',
		completed: true,
		certified: false,
	},
	{
		id: '32',
		title:
			'아침에 패드를 키기 위해 전원 버튼을 눌렀는데 화면이 켜지지 않고, 음량 버튼도 조작이 안 되며, 애플펜슬 인식으로 화면이 켜질 때 화면을 터치해 보았으나 터치를 인식하지 않습니다.',
		content: `아이패드 프로 5세대 12.9인치 사용중 입니다. <br/>
		아침에 아이패드를 켜기 위해 전원 버튼을 눌렀는데 화면이 켜지지 않고,<br/>
		음량 버튼도 조작이 안 되며 애플펜슬 인식으로 화면이 켜질 때 화면을 터치해 보았으나 터치를 인식하지 않습니다.<br/>
		해봤는데 버튼이 안 눌리니 강제 재부팅도 안되구요.<br/><br/>
		<b>산 지는 1년정도 됐고 작년에 스크린에 줄이 생겨 수리를 받은 적 있습니다.</b><br/>
		이번에는 떨어트리거나 충격이 간것도 아닌데 갑자기 이러네요. <br/><br/>
		어떻게 해결하죠?`,
		author: 'email14@email.com',
		createAt: new Date('2022-09-20'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-pro',
		completed: false,
		certified: true,
	},
];

const getPosts = () => posts;

const getFilteredPosts = (category = '') => {
	return category === ''
		? posts
		: posts.filter((post) => post.category.toLowerCase() === category);
};

const getMyPosts = (author) => {
	return posts.filter((posts) => posts.author === author);
};

const getPost = (postId) => posts.find((post) => post.id === postId);

// TODO : 작성자 point 추가하기
const createPost = (postInfo) => {
	const id = uuidv4();

	posts = [
		{
			...postInfo,
			id,
			createAt: new Date(),
			comments: [],
			completed: false,
			certified: false,
		},
		...posts,
	];

	return id;
};

const updatePost = (postId, updateInfo) => {
	posts = posts.map((post) =>
		post.id === postId ? { ...post, ...updateInfo, updateAt: new Date() } : post
	);
};

const updateCompletedPost = (postId, completed) => {
	posts = posts.map((post) =>
		post.id === postId ? { ...post, completed } : post
	);
};

const updateCertifiedPost = (postId, certified) => {
	posts = posts.map((post) =>
		post.id === postId ? { ...post, certified } : post
	);
};

// TODO : 작성자 point 차감하기
const deletePost = (postId) =>
	(posts = posts.filter(({ id }) => id !== postId));

// Autocomplete Search Posts -> Max Count :5
const searchPost = (posts, keyword = '') => {
	return posts.filter(({ title }) => new RegExp(keyword, 'i').test(title));
};

module.exports = {
	getPosts,
	getFilteredPosts,
	getMyPosts,
	getPost,
	searchPost,
	createPost,
	updatePost,
	updateCompletedPost,
	updateCertifiedPost,
	deletePost,
};
