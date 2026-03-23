const heroBnr = document.querySelector('.hero_bnr');
const barBg = document.querySelector('.bar_bg');
const bestItem = document.querySelector('.best_swiper');
const testNike = document.querySelector('.nike');
console.log(heroBnr,);

const nike = new Swiper(testNike, {
    // 한화면 기준 보이는 슬라이드 개수 (총 슬라이드 개수보다 작아야 함)
    slidesPerView:3.5,
    // 슬라이드 사이여백
    spaceBetween:20,
    // 슬라이드 한번에 전환되는 개수(기본1)
    sliesPerGroup:2,
    loop:true,
    autoplay:{delay:1500,},
    // centeredSlides:true,
});

const best_swiper = new Swiper(bestItem, {
    // 한화면 기준 보이는 슬라이드 개수 (총 슬라이드 개수보다 작아야 함)
    slidesPerView:3.5,
    // 슬라이드 사이여백
    spaceBetween:30,
    // 슬라이드 한번에 전환되는 개수(기본1)
    sliesPerGroup:2,
    loop:true,
    autoplay:{delay:2500,},
    centeredSlides:true,
});

const heroSwiper = new Swiper(heroBnr, {
    autoplay:{delay:3000,},
    loop: true,
    // 슬라이드 변경 실행 함수
    on:{
        // 처음 시작할때 실행 함수
        init:function(){
            // 부모요소에 active 클래스 적용하는법
            barBg.classList.add('active');
        },
        slideChangeTransitionStart:function(){
            //슬라이드 전환시 시작함수
            barBg.classList.remove('active');
        },
        slideChangeTransitionEnd:function(){
            //슬라이드 전환 종료후 시작함수
            barBg.classList.remove('active');
        }
    },
    // 페이지번호 사용자 함수
    pagination: {
        el: '.hero_bnr .pg',
        type: 'fraction',
        renderFraction: function(current, total) {
        // class 값은 문자열로 따옴표 처리 필수
        // swiper-pagination-current
        // swiper-pagination-total
        // 위 고유 클래스명 활용 cuatom javascript - renderFraction
        // swiper고유옵션:function(매개변수){return}
            let customPg = `<span class="${current}"></span>`;
            customPg += `<span class="${total}"></span>`;
            return customPg;
        }
    } 
});