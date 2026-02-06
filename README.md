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