# CSS
* html(구조) / css(디자인) / js(동적)
* html 작성 : `<body><tag 속성="값" 속성="값"></body>`
* css 작성 : `<head><style>tag(=디자인대상) {디자인속성:값; 속성:값;}</style></head>`
* 태그 선택자 : `태그 {속성:값;}`
* 아이디 선택자 : `#아이디명 {속성:값;}`
* 클래스 선택자 : `.클래스명 {속성:값;}`
* 부모-자식 선택자 : `부모 > 자식 {속성:값;}`
* 부모-자손 선택자 : `부모 자손 {속성:값;}`
* 형제 선택자 : `기준형제 + 선택형제 {속성:값;}`
* 다중형제 선택자 : `기준형제~선택형제들 {속성:값;}`
* 모든 선택자 : `* {속성:값;}`
* 수열(nth) 선택자 (*li/dt-dd 많이사용)
 * 형제가 2개 이상일때 원하는 형제를 선택하는 선택자
 * `형제선택자:nth-child(n)` : n번째 형제 
 * `형제선택자:nth-child(odd)` : 홀수
 * `형제선택자:nth-child(even)` : 짝수
## CSS 선택자 우선순위
* `<style>` -> `#` -> `.` -> `tag` 
* <tag style=""> 우선순위 높음
* `#id {}`
* `.class {}`
* `tag {}` 우선순위 낮음
## CSS 본인적용과 상속적용 차이
* 자식이 2개 이상일때 부모에 속성을 적용하는 것으로 자식에게 공통값을 적용할 수 있다.
 * `ul-li*5` 관계시 `ul {color:red}` = 부모ul의 color를 li에 상속시킨다.
 * 꾸미려는 css속성이 글자에 관련된 속성 (글꼴, 글자크기, 글자색상 등) 본인에게 직접 적용하는것을 권장 (우선순위가 꼬이기 때문)
## 글꼴 사용시 주의사항
* 모든 컴퓨터 기본글꼴(고딕,궁서,바탕 등)이 아니라면 반드시 웹글꼴을 사용하여 웹접근성을 높여줘야함
* 웹글꼴 연결 순서는 작성한 CSS보다 반드시 위에 작성해야함
* 글꼴명이 한글이거나 공백이 포함된경우 따옴표 붙여서 작성하기 ("or' 상관없음)
## 자주 사용하는 CSS 속성 모음
* `width:0px` : 가로크기 (vw,% 상대크기단위기능)
* `height:0px` : 세로크기 (vh,% 상대크기단위기능)
* `padding:0px` : 안쪽여백 (피그마 오토레이아웃:autolayout 패딩)
* `desplay:;` : 요소의 형태유형 변경속성
 * `block`, `inline`, `inline-block`
 * inline 변경가능요소 : h1, p, address 등 블록
  * `h1 {display:inline}`
  * 내용만큼만 크기인식
  * 옆으로 나열
 * block 변경가능요소 : a, span, em, del 등 블록
  * `a {display:block}`
  * 옆으로 정렬이 아닌 새로운 행으로 나열
 * inline-block 값은 모두 적용 가능
  * `h1 {display:inline-block}`
  * `a {display:inline-block}`
  * 크기와 여백값을 인식
  * 옆으로 나열, 넘치면 자동 줄바꿈 됨
* `margin` : 바깥쪽(형제사이) 여백(피그마기준 **간격**)
 * `margin:10px 20px;` : 상하/좌우
 * `margin:10px;` : 모든 방향 통일
 * `margin:10px 20px 30px;` : 상/좌우/하
 * `margin:10px 20px 30px 40px;` : 상/우/좌/하(시계방향)
 **위 4개의 속성방향은 padding 동일**
 * `margin:0 auto;` : 레이아웃 가운데배치 (너비가 화면보다 작아야함)
 # table HTML+CSS
* `table > tr > th of td`
* `table {width:300px;}` 열이 3개일 경우 100씩 자동 분배
 * `th:nth-child(1) {width:50px;}`
 * 전체너비 300중 첫번째 열만 50을 가지고 나머지값은 나머지 열들에게 자동분배 (열 안 내용의 크기에 따라달라짐)
 * `width, height, padding` 속성은 같은 수평/수직 방향에 해당하는 열에 함께 적용됨
 * 위 특징때문에 공통여백 및 크기는 1행 라인에 작성
## 행 그룹포함 table 작성 순서
 * `table` > `thead` > `tr` > `th`
 * `table` > `tboday` > `tr` > `th`
 * `table` > `tboday` > `tr` > `td`
 * `table` > `tfoot` > `tr` > `th`
 * `table` > `tfoot` > `tr` > `td`
## 수평/수직 열 합치기
 * 합치기 속성은 무조건 `th`또는 `td` 태그에 입력가능
 * 수평 열 합치기
  * `<th colspan="합치는 열 개수">내용</th>`
  * 위 속성은 합치는 열 중 첫번째 시작태그에 작성하기
  * 그 외 나머지 칸은 지우거나 주석걸기
 * 수직 열 합치기
  * `<td rowspan="합치는 열 개수">내용</td>`
## from 요소들의 동적인 편의 HTML + CSS
### input 입력요소
 * `<input autofocus placeholder="">`
 * autofocus : 페이지 접속 시 바로 커서 위치 활성화
 * placeholder : 안내메세지 표시
  * `input::placeholder {}` 안내메세지 디자인
 * `input:focus {}` 입력칸 활성화 표시 디자인
### button
* `<button type="button" 이벤트="자바스크립트명령어작성">
 * 버튼에 이벤트 작성 시 반드시 type는 button(범용기능)
 * `onclick=""` : 클릭 시 "명령어" 실행 이벤트
 * `window.location.href="실행주소"`
  * 위 `a href="실행주소"`와 동일한 js 명령어
 * `button:hover {}` : 버튼에 마우스 올렸을 시 디자인 변경
# 웹글꼴 `<link>`,`<font-face>`
 * `head`태그 안 `reset.css`연결보다 위에 작성
 * `@font-face`에 비해 사용이 간편함
 * 작성한 html에만 사용할 수 있다는 단점
## `@font-face` 사용법, 특징
 * `reset.css` 파일 내 가장 위쪽 라인에 작성
 * `@font-face {`
  * `font-family:'사용할 글꼴 이름 임의작성'`
  * `src:url(글꼴주소):`
  * `font-weight : 글꼴굵기(200~700 글꼴에 따라 다름)`
  * `font-style : 기울기(normal,italic 등)`
  * `font-display:swap`
  * `}`
* reset에 한번 연결해두면 모든 html에서 사용가능
* `@font-face {font-family:'사용할 글꼴명'}` (예:컴퓨터 글꼴설치)
* `선택자 {font-faily:'웹글꼴로 불러온 글꼴명'}` (예:포토샵 글꼴사용)
# HTML
## HTML 구조태그
* HTML은 **웹문서**를 뜻한다
* `태그` 웹문서에 들어가는 내용~제목 모든요소는 `<태그>`로 묶여서 만들어진다
## HTML 주의사항
* 파일명.html
* 모든 **파일명, 폴더명**은 영문 소문자 사용, 특수문자 금지, 공백금지, 한글금지, 숫자 앞 금지
* start.html = O
* start1.html = O
* 1start.html = X (숫자앞)
* basic start.html = X (공백)
* basic_start.html = O (허용 특수문자 _,-)
* basic%start.html = X (허용외 특수문자)
* 시작.html = X (한글)
## VSC 단축키
* 화면 분할 (좌우) : `ctrl + \`
* 화면 분할 (상하) : `ctrl + k` -> `ctrl + \`
* 찾기-바꾸기 : 바꾸고 싶은 글자 선택 -> `ctrl + h`
* 한줄 복사 : `shift + alt + 방향키`
* 라인 이동 (커서위치기준) : `alt + 방향키`
## HTML 단축키
* `html:5` + tab : 구조태그 생성
* 한줄 주석 : `ctrl + /`
* 블럭 주석 : `shift + alt + a`
## title 올바른 작성법
* 제작페이지가 메인일경우 : 사이트명
* 제작페이지가 서브일경우 : 서브명 | 사이트명
* 필요시 서브명-정보 | 경로 | 사이트명
* 채식주의자-한강 | 국내소설 | 교보문고
* 소년이온다-한강 | 국내소설 | 교보문고
* 소년이 온다-한강 | 국내소설 | 교보문고
* 소년이온다-한강 | 국내소설 | 교보문고
* 소년이온다-한강-창비 | 국내소설 | 교보문고
* 주토피아2-현재상영작 | CGV
* 주토피아1-상영예정작 | CGV
## 태그속성 class, id
### class
* `<태그 class="값"></태그>`
* 2번 이상 반복하는 이름인 경우 (중복사용가능)
### id
* `<태그 id="값"></태그>`
* 반복되면 안되는 단독 명칭인 경우 (중복사용불가)
* (ex : header, gnb, footer)
## HTML 기초 문서태그
* 블록태그 : w:100%, 새로운 행, 크기가 큼
* 인라인태그 : 열(옆으로나열), 크기는 내용만큼 인식
### 제목
* `h1~h6` : 블록태그, h1대제목, h6가장작은 소제목, h1에 가까울수록 검색어로 인식될 확률이 높음 (주로h1~h3을 많이사용 / SEO마케팅목적)
### 내용
* `P` : 블록, 한줄~여러줄의 단락형태 내용일때 사용
* `br` : 인라인, 줄바꿈할때 사용
* `em` : 인라인, 단순 문맥강조, 주로 `P` 자식으로 사용
* `storng` : 인라인, 중요+심각성 강조, 주로 `P` 자식으로 사용
* `blockquote` 블록, 긴 인용문
* `q` : 인라인, 짧은 인용문
* `code` : 인라인, 컴퓨터 명령어를 화면에 표시할때
* `address` : 블록, footer안 주소 및 연락처, 해당 서비스 주소만 포함, address안에 블록 사용주의  <address>주소<br>연락처</address>
### 레이아웃
* `div` : 블록, 그룹, 자식이 2개 이상이며 같은방향일때, 블록과 인라인을 모두 가질 수 있음
* `span` : 인라인, 그룹(위 div와 같음), 보조(디자인), 인라인만 자식으로 가질 수 있음 <h1><span>제목글자 디자인</span></h1>
* `hr` : 블록, 경계구분용 (디자인 테두리용도 아님)
* `del`: 취소 텍스트 예) <p>정가: <del>10,000원</del> 7,000원</p>
### 특수문자 태그
* `&copy` : footer 저작권마크 ©
## 링크태그
* 필수구조 : `<a href="이동주소">클릭대상</a>`
* 링크 새창 열기 속성 : `<a href="이동주소" target"_blank">클릭대상</a>`
* : `<a href="이동주소" l>클릭대상</a>`
### 링크태그 href 주소 작성법
* 절대경로 : `"href=http://주소"` 실제 서비스되는 웹주소
* 상대경로 : `"href=./폴더 및 파일"` 같은 위치, 아래위치
* 상대경로 : `"href=../폴더 및 파일"` 상위 위치
### 바로가기 링크 (스크롤 이동하며 특정위치로 가기)
1. `<a></a>` 태그 준비
2. 1번 링크 클릭 시 이동하고 싶은 위치에 해당하는 태그레 `id="위치명"` 입력하기, 예) `body id="top"><body>`
3. 1번 링크에 2번 아이디 연결하기 `<a href="이동아이디명"></a>` **(#필수)**
## 이미지 (img)
* `<img src="이미지경로" ait="대체텍스트">`
* `<img src="./naver_logo.png" ait="로고">` (x)
* `<img src="./naver_logo.png" ait="네이버">` (o)
* `<img src="./newneek_logo.png" ait="뉴닉">` (o)
* `<img src="./cart.png" ait="장바구니메뉴">` (x)
* `<img src="./cart.png" ait="장바구니버튼">` (x)
* `<img src="./user.png" ait="로그인">` (o)
* `<img src="./user.png" ait="로그인버튼">` (x)
* `<img src="./user.png" ait="로그인아이콘">` (x)
### 이미지 필수속성
* `src` : 이미지경로 (**상대**/절대경로)
* `밋` : 대체텍스트 (의미있는경우 : `alt="의미"`)
### 이미지 선택속성
* `class`, `id` (이미지 외 모든 태그 사용가능)
## background-image (css배경이미지)
### `img` 태그가 아닌 background-image 처리하는 경우
* 형제, 자식, 자손 요소와 겹쳐져서 디자인 된 경우
* 쇼핑몰의 상품 썸네일, 히어로 배너, 광고배너 등 사용
* `<태그 style="">`
* `<태그 style="background-image:;">`
* `<태그 style="background-image:url(경로);">`
## 비디오 태그 (block)
### 로컬 환경에 동영상 파일이 있는경우 연결방법
* `<video></video>`
* `<video scr="./상대경로"></video>`
### 동영상 관련 속성
* `<video autoplay muted loop controls>`
## 유튜브 영상
* 원하는 영상 재생 -> 우클릭(소스코드복사)
### 유튜브 영상속성
* `<iframe src="https://www.youtube.com/embed/동영상이름">`
* `<iframe src="https://www.youtube.com/embed/동영상이름?속성=값&속성=값">`
* `autoplay=1` : 재생 / 재생X (autoplay=0)
* `mute=1` : 음소거 / 음소거X (mute=0)
* `loop=1` : 반복재생 / 반복재생X (loop=0)
* `playlist=동영상이름` : loop=1일 경우 함께 사용
* `controls=0` : 컨트롤숨김 / 컨트롤 보임 (controls=1)
## 목록태그 + 레이아웃
### 비순차 ul + li
* `<ul><li><il></ul>`
* ul은 비순차 그룹, li의 부모
* ul의 자식은 li만 올 수 있다, 자손은 모두 가능
### 순차 oi + li
* `<ol><li><il></ol>`
* ol의 자식은 li만 올 수 있다, 자손은 모두 가능
## 비순차 목록
* `d1`그룹, `dt`제목, `dd`내용
* `dt-dd`는 h4~h6정도로 구선된 제목과 내용이 연속적으로 2개 이상 구성되었을 경우 사용한다
*   `d1`의 자식은 `dt,dd`만 올 수 있음
* `dt-dd` 형제는 `dt-dd`만 가능함
## from 태그
### `<form action="#" method="#"></from>`
* action : 사용자가 입력 또는 선택한 정보를 전송하는 주소
* 네이버 로그인중이라면 아이디, 비밀번호를 네이버 서버로 전송해서 유효성 체크
* method : action에 정보를 전송할때 어떤 방식으로 전송할 것인지 결정하는 방식 **get/post**
* get : 주소창에 입력정보 공개, 보안(x)
* post : 입력정보 비공개, 보안(o)
### `<input>` 입력 및 선택양식
* `<input type="" name="" value="" id="" class="">`
* type : 용도에 따른 종류선택 ex.password
* name 
 * 입력양식(text,password) : 서버 전송 시 데이터 구분을 위한 개별이름 (데이터 수신목적)
 * 선택양식(select,checkbox,radio) : 선택 요소 2개 이상을 묶는 그룹명
* value
 * 입력양식 : 처음부터 입력되어있는 초기값 (수량1)
 * 선택양식 : 데이터 구분용 (name 의미동일 / 데이터 그 자체)
* id : css 와 js 데이터 구분명 (name과 동일설정 가능)
* class : 반복 디자인 사용 시 설정하는 반복이름
### button
* `<button type="종류"></button>`
* `name, value` 속성 사용안함, `id, class` 는 필요에 따라 사용
* button
 * submit,reset을 제외한 모든 범용적 기능
 * 사용자의 입력(infut), 선택(select,checkbox,radio)요소가 없는 경우 단순버튼의 기능만 활용할때 from 없이 버튼만 사용가능 (이전•다음 이동/재생 등)
 * 페이지 내에서 이전/다음 이동, 재생, 일시정지, 정지 등 다양한 기능활용
 * 서버 전송이 아닌 조건에 따른 다른 창 띄우기 (우편번호 찾기,본인인증 등)
* submit
 * form action, method 방식 서버에 전송하는 데이터
 * (예) 아이디, 비번 입력 후 서버 전송해서 유효성 검사
 * (예) 상품을 장바구니(서버)에 담기
 * (예) 장바구니에 담은 상품을 구입해서 내 구입목록(서버)에 저장하기
* reset
 * 기존 데이터를 현재 페이지에서 제거, 취소할 경우
## CSS 레이아웃 정렬속성
### displye
* `displye:block` : 인라인을 수직으로 나열
* `displye:inline-block` : 블록을 수평으로 나열
 * 기본여백 3px 발생 -> 해결법 `magin-right:-3px`
### magin
* `magin:상하여백 auto` : 크기가 설정된 블록 또는 인라인을 화면 가운데 배치
### float
 * `float:left` : 형제요소들을 왼쪽으로 순차정렬
 * `float:right` : 형제요소들을 오른쪽으로 정렬
  * 2개 이상 작성시 역순으로 정렬됨
 * `float:none` : float 제거
 * `clear:both` : 이전 형제에 작성된 float 정렬해제
## 게산기 함수 `calc`
* +, -, *, /, % 다양한 사칙연산 사용가능 
**연산자 앞뒤 여백필수** `1+1(x)` -> `1 + 1(o)`
* `width, height, margin, padding` 등 숫자입력 속성 활용가능
### calc() 활용예시
* `li {width:calc(100% / 4);}`
 * 4개의 li를 같은 크기로 나누기
* `li {width:calc(100% - 30px) / 4;}`
 * 4개의 li에 각 10px씩 사이여백을 주기위해 전체부모 100% 너비중 10*3 총 30px를 빼고 나머지 값을 4로 나누기
 * `li {width:}`
* `a {displye:block; height:calc(100% - 50px);}`
 * a의 크기를 인식하게 만들고 50pX를 뺀 나머지 부모크기주기
## 수평/수직 정렬 레이아웃 속성 flex
###  정렬순서
1. 정렬하고자하는 두개 이상의 형제대상 체크
 * `ul > li*5 > a` -> 형제 `li`
 * `dl > dt + dd*4 + dt + dd*2` -> 형제 `dt,dd`
 * `div > a*3 > span` -> 형제 `a`
2. 체크한 1번의 부모 체크
 * `ul > li*5 > a` -> 형제 `ul`
 * `dl > dt + dd*4 + dt + dd*2` -> 형제 `dl`
 * `div > a*3 > span` -> 형제 `div`
3. 부모에 메인축/교차축 확인하며 `display:flex`부터 명력시작하기
### 정렬방향과 줄바꿈 속성
 * 주의사항 : `display:flex` 먼저 시작해야함
 * `flex-flow:row nowrap` : 기본값 (메인축,수평 줄바꿈안함)
 * `flex-flow:row wrap` : 메인축 수평, 가로크기에 따라 줄바꿈함
 * `flex-flow:column nowrap` : 메인축 수직, 줄바꿈안함
 * `flex-flow:column wrap` : 메인축ㄱ 수직, 세로크기에 따라 줄바꿈함
**메인축이란?** 부모안 2개 이상의 형제 정렬방향
**교차축이란?** 부모안 2개 이상의 형제 교차방향 (메인반대축)
### 메인축 정렬속성
* `justify-content:`
 * `flex-start` : 메인축이 수직이면 위쪽, 수평이면 왼쪽
 * `flex-end` : 메인축이 수직이면 아래, 수평이면 오른쪽
 * `space-between` : 메인축이 수직이면 위-아래 양쪽끝, 수평이면 왼쪽-오른쪽 양쪽 끝
 * `space-around` : 메인축이 수직이면 위-아래 양쪽 여백주고 균등배치, 수평이면 왼쪽-오른쪽 양쪽 여백주고 균등배치
 * `center` : 메인축이 수직이면 수직중앙, 수평이면 수평중앙
### 교차축 정렬속성
*  `align-items:` 교차축이 1줄일때
 * `flex-start, flex-end, center` 위 메인축과 동일한 뜻
* `align-content:` 교차축이 2줄 이상일때
 * `flex-start, flex-end, center, space-between : 메인축이 수직이라면 ~~~ 다못씀
## 스크롤 디자인
`Firefox`
html {scrollbar-width: 10px; scrollbar-color: #222 #e73b3b;}
`Opera`
html::-o-scrollbar {width: 10px;}
html::-o-scrollbar-thumb {background-color: #222;border-radius: 5px;}
`Chrome, Safari, Edge` 등 웹킷 기반 브라우저
::-webkit-scrollbar {width: 10px;}
::-webkit-scrollbar-track {box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);}
::-webkit-scrollbar-thumb {background-color: #222;border-radius: 5px;}
### transition : 애니메이션 효과
### nav a::after : 가상요소는 여백없이
* 가상 마지막 자식요소 설계
 * `content:'';` -> 내용인식
 * `display:block;` -> 요소특징
 * `width:0%; height:1px;` -> 크기인식
 * `background:#e73b3b;` -> 색상인식
 * `position:absolute;` -> 디자인목적 위치설정
 * `bottom:1px; left:0;` -> 위치값 
 * `display:none;` -> 너비를 0으로 할땐 안보이니까 없어도 됨
 * `transition:width 1s 0.5s;` ->
## transition
* `hover` 선택자로 인해 기존속성에서 다른속성으로 변경되는 css에 애니메이션을 주고 싶을때
 * `선택자 {color:#000; font-size:1rem;}`
 * `선택자:hover {color:#FFF'}`
 * 위 선택자 예시 -> color만 hover시 변경됨.
 * 아래 연결동작 -> 변경된 color만 transition작용
 * `선택자 {transition:color 1s; color:#000; font-size:1rem;}`
* 문법 : `transition:변경속성 지속시간 속도 지연시간`
* `transition:color 1s linear 2s`
* 2초 기다리고 1초동안 일정속도로 color속성에 애니적용
<!-- * `transition` : 중심축으로 확장되며 사용할때는 :hover(x) 기존확장자(o)
* `transition:ro` : 회전 -->
## animation + @keyframes
### 적용순서
1. `@keyframes 애니메이션이름 {적용분기}`
2. `선택자 {animation:키프레임애니메이션이름 추가속성;}`
### 개념 및 주의사항
* `hover + transition`은 사용자의 키보드, 마우스 동작에 따라 나타나는 애니메이션
* `keyframes + animation`은 페이지로딩시 등장 애니메이션, 스크롤 내릴시 나타나는 컨텐츠의 등장 애니메이션 등에 사용함 (사용자 hover 동작과는 대부분 관계없음)
### 명령해석
* `@keyframes a {0% {opacity:0;} 100% {opacity:1;}}`
 * 애니메이션이름 a 생성후 안보이다가 보이는 애니메이션
* `선택자 {animation:a 1s ease 0.5s alternate 3;}`
 * `alternate` 특정 선택자에 0.5초 기다리고 1초동안 a 애니메이션을 ease 가속도로 정방향 -> 역방향 순서로 3번 재생하기 (무한재생 : `infinite`)
## transform
 * transform, animation 속성과 함께 특이한 애니메이션에 자주 활용하는 변형속성
 * `transform:scale(1)` 비율기준 1=100%
 * `transform:rotate(20deg)` 반시계방향회전 = `-20deg`
 * `transform:skew(-20deg)`
 * `transform:translate(10px, 20px)` x, y 이동순서로 작성
 * 다른 모든 속성은 중심이 왼쪽상단, **transform만 유일하게 가운데 기준**
 * 기준점 변경방법 : `transform-origin:x y`
## webkit
* 글자안에서 그라데이션 효과 및 배경이미지를 마스크씌어서 보여주고 싶을때 사용하는 속성값 모음
 * -webkit-background-clip: text;
 * -webkit-text-fill-color: transparent;
 * background-clip: text;
 * color: transparent;