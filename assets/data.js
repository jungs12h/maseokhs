/** 이북 데이터 자료 정의
**/
var eBookData = {

	password			: "",
	useDebug			: false,
	pageExt				: 'svg',
	totalPageNum	: 6,
	useLogo				: false,
	logoUrl				: "http://",
	homeUrl				: "http://",
	useBooklist		: false,
	
	pageView : { /** 페이지 넘김 속성 */
		type			: "flip",
		side			: "auto",
		duration	: 300,
		cover			: true,
	},
	
pageshadow:false,
pagearea:true,

MOKCHA:"true",
BOOKMARK:"true",
AUTOSKIP:"true",
PRINT:"true",
SUMNAIL:"true",
TWITTER:"true",
FACEBOOK:"true",
SEARCH:"true",
PDFDOWN:"true",
MEMO:"true",
SKETCH:"true",
RANDOM:11228,


	bookList : [ /** 이전호 목록 */
	],
	
	tableList : [ /** 목차 */
	],
	
	pageContents : [ /** 페이지 컨텐츠 */
	],
	
	textList : [ /** 본문 검색 */
		/*1*/
		"eBook의 새로운 패러다임,  이앤아이월드 Html5 이북 솔루션    Nexbook cc  Nexbook Convergence Creative, fatal 5. since 2005    ISO    14001:2004    ISO    특허청  전자책  서비스 시스템  특허    행안부 선정  행정업무용  S/W    GS인증  9001:2018  국내 최대·최초 특허 이북 솔루션/제작 업체로 자리 매김하고    전자신문  Star상  수상    1천여 개의 이북 솔루션과 100만 건의 이북 결과물을 제공해드리기까지,  품질 높은 eBook을 손쉽게 제작할 수 있수있도록    지난 13년간 지속적으로 발전 시켜온 노하우와 독창적 기술로 집약한 솔루션을 소개합니다.    한국생산성본부  대한민국    대표 eBook 제작  프로그램    ",

		/*2*/
		"why Nexbook CC?    통합, 그리고 혁신  Standard부터 Academy 까지    세상에서 단 하나뿐인 All Vecter 본문 뷰어 |    새로운 기능의 추가로    모든 전자책 포맷(Html5/ePub/Pdf)에 대응 |    기존 모든 버전을 통합하고,  더욱 강화 된 솔루션입니다.    FTP 자동 업로드 |    간결하고 전문적인 옵션 설정 |  자동 판형 맞춤 |    150여개의 다채로운 이북 스킨 |  웹표준과 크로스 브라우징 |    국내 유일 전자책 서비스 특허 기술 내장 |    INNOVATION    무한 인증, 무한 업데이트  웹 환경과 트렌드는 지금 이순간에도 변화하고 있습니다.  PC와 하드 교체/포맷, OS 와 브라우저 환경 변화로 인한    솔루션 단종 등의 영향으로 재구매를 고민하시던 분들을을 위한 대안.  기간제 라이선스로써 새로운 환경 변화에 빠르게 반응하며,  업데이트 하는 솔루션을 매순간 만나보세요.    재설치 서비스도 라이선스 활성화 기간 동안 무한 신청이 가능합니다.    기존 솔루션을  Nexbook CC로 새롭게  지금 가지고 있는 솔루션의 라이선스를    반납하고, 새 솔루션 구매시 최대 80%의 할인과    BE NEW    6개월 무료 사용의 혜택을 받을 수 있습니다.    Nexbook CC 솔루션으로  새로운 세대의 이북을 직접 디자인해보세요.    ",

		/*3*/
		"1    2  Nexbook cc  선명한 가독성 보장    eBook제작만을 위한  손쉬운 전문 소프트웨어    전자책서비스의 고퀄리티 핵심인    누구나 전자책만을 전문적으로 만들 수 있는    가독성을 벡터로 구현한 특허 기술로    직관적이고도 쉬운 eBook솔루션    전문적 웹북 서비스의 결정체    3    무상 유지보수 보장    고객님이 직접 사용기간을 설정해 구매하여,    4    웹표준 준수와  크로스 브라우징 제공    변화하는 OS 및 웹 환경 변화를 반영하는    html5 로 웹표준을 지향하는 솔루션으로  개발해 멀티 디바이스(PC/Mobile) 지원    업데이트 솔루션을 제공    5    모든 전자책 포맷에 대응  Html5 eBook과 더불어    ePub/PDF Book 포맷을 생성할 수 있는  확장 기능 제공    ",

		/*4*/
		"Specifications table  “ 기존 버전별 (Standard 부터 Academy까지) 솔루션을 최고사양의 단 하나의 솔루션으로 대통합하여 제공합니다. ”    Nexbook 3.5 Standard + Special + Enterprise + Academy Version = Nexbook CC    상세기능    본문 확대시 글자가 깨지지 않는 Vector 지원 기능(SVG Zoom)    HTML5 로 PC · 모바일 모든 디바이스 지원 (아이폰/아이패드/갤럭시/갤럭시탭 등)  크로스브라우징 지원(Internet Explorer, Chorme, Firefox, Safari 등)  다양한 페이지 이동(이전, 이후, 처음, 마지막)    화면자동회전 (가로형 2페이지형과 세로형 1페이지형 자동회전)    출판물  (HTML5  결과물)    텍스트 검색(색인) 기능    목차 / 책갈피 / 페이지 자동넘김(슬라이드 쇼) / 썸네일 보기 기능  SNS(페이스북, 트위터, 카카오톡) 공유 기능  보안기능 ( eBook 출판물 암호 입력 기능)    오프라인(로컬)에서 eBook보기 기능(CD, USB, DVD 저장 형태)  eBook 지난호 보기 기능    멀티미디어( MP3/ 동영상) 실행  PDF 다운로드 기능  메모/판서 기능    기본 스킨 254set 제공(국문 127set, 영문 127set)    스킨    eBook 페이지 인쇄(구간인쇄, 고퀄리티 vector인쇄) 기능  자신만의 개인/기업로고 삽입기능  페이지 그림자 음영 기능  FTP관리자 기능    ePub/PDF 전자책포맷 내보내기 기능(이미지형/Html형)  각종 파일 자동변환 기능(PDF, JPG, BMP 등)    빌더    페이지 추가, 교체, 빈페이지 삽입 기능    PDF 텍스트 자동인식-검색 기능 자동인식(별도 텍스트 삽입관리도 가능)  다양한 페이지 넘김 효과 기능(Flip, Slide, Click) 선택  링크 기능(페이지 이동 및 URL 링크)    파비콘 (즐겨찾기 아이콘) 이미지 설정 기능    출판 및 교재 제작에 필요한 다양한 토글 및 액션 기능 제공    ",

		/*5*/
		"이앤아이월드 FBook Studio 이북 솔루션 릴리즈 / EOL (End of life) 정보    FBook Studio  NexBook 1.0    FBook Studio  NexBook 2.0    flash-Book 출판  솔루션    html-Book 출판  솔루션    FBook Studio  NexBook 3.5    FBook Studio  NexBook CC    2013    2008    html5-Book /  epub출판 솔루션    html5-Book 출판  솔루션    2018~    2016    릴리즈    FBook Studio Builder    FBook Studio Designer  Nexbook 1.0 Builder  Nexbook 3.0 Builder  Nexbook 3.5 Builder    Nexbook CC Builder    라이선스 유형  - 영구 라이선스  - 패키지 라이선스  -   1인 1PC 라이선스  *1회 인증 이외    재설치 수수료 발생    - 기간 라이선스  - 볼륨 라이선스  - 1인 1PC 라이선스  * 재설치 시 수수료 없음    출판 유형  Flash북    릴리즈 일자    판매 및 유지보수 중단    2007-10-31    2016-05-30    2007-10-31    2016-05-30    HTML이미지형    2011-12-10    2017-09-01    HTML5북    2016-03-01    판매중단 | 유지보수 ing    ALL벡터 HTML5/  버전 통합형    2018-03-01    현 판매중    Flash/ HTML이미지 통합형    2012-05-01    2017-09-01    ",

		/*6*/
		"이북 솔루션, 이북 디자인/제작, 편집디자인/인쇄, 웹진/뉴스레터  토털 홍보 마케팅 솔루션 전문 기업    ",

	],
};