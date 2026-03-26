// 변수
const best = document.querySelector('.best_swiper');
const season = document.querySelectorAll('.season_wrap .swiper');
const season_title = document.querySelectorAll('.season_wrap .tab_title a');
console.log(best);

// Swiper 연결
const nikeSwiper = new Swiper(season[0], {
    slidesPerView:2,
    spaceBetween:20,
    breakpoints:{
        640:{},
        768:{slidesPerView:3,}, 
        1024:{slidesPerView:4,},
    },
    navigation:{},
})
const converseSwiper = new Swiper(season[1], {
    slidesPerView:2,
    spaceBetween:20,
    breakpoints:{
        640:{},
        768:{slidesPerView:3,}, 
        1024:{slidesPerView:4,},
    },
    navigation:{},
})
const bestSwiper = new Swiper(best, {
    // 반응형 Swiper 제작 시 모바일부터 계산하면서 시작
    slidesPerView:2, // 모바일에서 보이는 개수 // 640 이하일때
    spaceBetween:20,
    // 반응형 옵션 breakpoints (사용자의 디바이스 너비 기준)
    // 반응형 너비 평균 640 / 768 / 1024 (디자인에 따라 수정, 추가 가능) 숫자는 점점 커지게 작성-
    breakpoints:{
        640:{}, // 640 이상일때
        768:{ // 768 이상일때
            slidesPerView:3,
        }, 
        1024:{ // 1024 이상일때
            slidesPerView:4,
        },
    },
    navigation:{
            prevEl:'.contents .next',
            nextEl:'.contents .prev',
    },
})

// Tab제목클릭 시 관련내용 js
// 1. 컨버스 숨기기
season[1].style.display = 'none';
// 2. 컨버스 탭 제목클릭 (active변경) -> 컨버스 보이기, 나이키 숨기기
season_title[1].addEventListener('click',function(){
        season_title[0].classList.add('active');
    season_title[1].classList.remove('active');
    season[1].style.display = 'block';
    season[0].style.display = 'none';
})
// 3. 나이키 탭 제목클릭 (active변경) -> 나이키 보이기, 컨버스 숨기기
season_title[0].addEventListener('click',function(e){
    e.preventDefault();
    season_title[0].classList.add('active');
    season_title[1].classList.remove('active');
    season[1].style.display = 'none';
    season[0].style.display = 'block';
    season[1].style.display = 'none';
})

// a변수를 클릭이벤트 함수로 사용 시 a의 다른 페이지 이동속성(href)때문에 스크롤이 위로 올라가는 문제 해결법
// html해결법) <a href="javascript:void(0)"> = 태그가 많으면 불편할 수 있음
// js해결법) a태그.addEventListener('클릭',function(){}); 명령기준
// 1. 위 명령 function(매개변수) 입력
// 2. 매개변수.preventDefault(); // a의 기본기능 막기를 의미함.
