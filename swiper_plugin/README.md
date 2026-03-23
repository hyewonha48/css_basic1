# defer
 * 인덱스 html에서 `script src` 뒤에 `defer` 작성 -> js파일내에서 HTML인식을 위해서 (로딩순서처리)
# Swiper Javascript Plugin
* 플러그인을 통해 쉽게 만드는 슬라이드 자바스크립트 동작
## Swiper 작성준비
0. `head`안 `title`아래 swiper사용을 위한 CDN 연결
 `</title> **CDN연결파일들** reset, css, 개별js 등 연결마무리`
    <!--swiper 필수 css cdn 연결-->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <!--swiper 필수 JS cdn 연결-->
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
1. `html`파일내에서 슬라이드 삽입위치에 다음과 같이 태그작성
 `div.swiper>div.swiper-wrapper>div.swiper-slide`
 `div.swiper` : swiper 플러그인 시작 위치 (js 연결지점)
 `div.swiper-wrapper` : 슬라이드들 부모역할 (flex 내장)
 `div.swiper-slide` : 개별슬라이드들 `*숫자` 개수생성
2. 1번에서 생성한 태그에 대상구분용의 별도 클래스 따로 생성
 `div.swiper.개별클래스명`
 `<div class="swiper 개별클래스명">`
 `div.swiper-slide.slide번호` >> `<div class="swiper-slide slide1">`
3. 프로젝트에 디자인에 따라 필요한 추가 태그들 작성
 `div.swiper-slide` 안에 `a,p,table,from,div 등...`
4. CSS 선택자준비 (개별/공통용 모두)
 **주의사항**
 * `div.swiper, swiper-slide`
  * `display, width, height, position` 적용하지 않기 (부모를 따라가기에 X)
 * `swiper` 제일 바깥쪽 swiper 시작태그한테만 크기 적용
 * `swiper-slide` 안 3번 목적으로 만든 태그들은 속성 자유 (`swiper-slide,swiper-wrapper` 밖에는 자유)
5. DOM 변수준비 -> swiper 연결
 * `const 변수명 = document.querySelector('대상');`
 * `const 변수명 = new Swiper(스와이프적용 변수명, {옵션:값, 옵션:값});`
## Swiper {option:value,} 종류와 뜻
* **loop:,** : 슬라이드 끝에서 시작까지 반복 : true(실행O) false(실행X)
## Swiper 선택요소 (페이지번호, 이전/다음버튼, 스크롤바) 주의사항
* 기본작성 위치는 `swiper-wrapper`의 다음 형제위치
 * `swiper`의 첫번째 자식(swiper-wrapper) 두번째자식(선택요소들)
 * **절대 `swiper-wrapper`와 형제,자식,자손위치에 배치하지 않기**
* 기본순서 : `html -> js swiper options 세팅 -> (선택)css`
* **아래 선택요소들 태그는 자식, 자손으로 다른 태그 삽입금지**
 * `div.swiper-pagination`
 * `div.swiper-button-prev`
 * `div.swiper-button-naxt`
 * `div.swiper-scrollbar`
 * `<div class="swiper-pagination">내용금지</div>`
 * `loop:true,` / `loop:false,`
 * 슬라이드 방향 // direction:'vertical', // 슬라이드 방향 : horizontal 수평(기본값) / vertical (수직)
* **effect:'',** : 제자리에 나타날때 효과 : fade(기본|깜빡깜빡) cube(큐브형태) flip(뒤집어지는)
 * `effect:'fade',` / `effect:'cube',` / `effect:'flip'`
* **mousewheel:,** : 마우스 휠기능 옵션 : true(실행O) false(실행X)
 * `mousewheel:true,` / `mousewheel:false,`
* **autoplay:{}** :
 * `delay:,` : 자동재생 (1000 = 1초)
 * `pauseOnMouseEnter:,` : 마우스가 올라오면 일시정지
 * `disableOnInteraction:,` : 마우스 상호작용 후 멈출건지, 움직일건지 : true(실행O) false(실행X)
  * autoplay:{
        `delay:1000,`
        `pauseOnMouseEnter:true,` / `pauseOnMouseEnter:false,`
        `disableOnInteraction:true,` / `disableOnInteraction:false,`
  },
 * `speed:1000,` : 슬라이드 속도조절 (1000 = 1초)
 * `direction:'vertical',`
## slide 내장속성 값
* swiper-wrapper, swiper-slide는 개별크기 입력하지 않기 */
* swiper-flugin 대표 CSS 내장속성 : 값 */
1. swiper : position, transform */
2. swiper-wrapper : flex */
3. swiper-slide : position, transform */
## Swiper 선택요소 (pagination, prev, next, scrollbar) 디자인 규칙&주의사항
 * 태그 위치 `div.swiper` 두번째 자식위치로 생성
### 기존 Swiper-slide 외부 바깥쪽으로 안겹치는 디자인을 하고 싶을때
 * 태그위치 ``div.swiper`` 다음 형제위치로 생성
 * `div.swiper`와 생성된 선택태그를 묶어주는 추가 태그 생성 (디자인에 따라 다름)
### 교차여부에 따라 태그 위치를 다르게 해야하는 이유
* `div.swiper`에 기본CSS로 `overflow:hidden`있으므로 그 값을 `visble`로 바꾸면 선택요소 뿐 아닌 `swiper-slide`들도 모두 보이기때문에 원하는 레이아웃을 만들 수 없음
## Swiper 안에 추가 Swiper 생성 시 안쪽 Swiper 마우스 드래그 안될때 해결방법
 * 안쪽 Swiper js 옵션 : 값으로 아래와 같이 작성
  * `nasted:true,`
  * 부모 swiper와 겹쳐있을때 드래그 충돌방지 옵션:값

## Swiper Custom function
* renderFraction:{} 안에 작성해야함
* type : 'function'일때 사용가능
* `const 변수명 = new Swiper(적용대상, {`
 `pagination:{`
  `el:'적용대상',`
  `type:traction',`
  `renderFraction:function(current,total) {`
    `let 변수 = <태그 class=${매개변수} `
   `}`
`})`
## 슬라이드 변경시 실행되는 함수
 * `new Swiper(대상,{옵션})` 옵션위치에 바로 작성되는 함수
1. `init:function(){}`
 * 슬라이드가 처음 시작할 때 실행되는 함수
 * `on:{init:function(){},}`
2. `slideChangeTransitionStart:function(){}`
 * 슬라이드 전환이 시작될때 실행되는 함수
3. `slideChangeTransitionEnd:function(){}`
 * 슬라이드 전환이 종료되고 실행되는 함수
 * 초기화(reaet) 용도로 가끔 사용
## 클래스 적용/해제 함수
1. `요소.calssList.add('적용클래스명');`
2. `요소.calssList.remove('삭제클래스명');`