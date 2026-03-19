// index.js

const heroBnr = document.querySelector('.hero_bnr');
console.log(heroBnr);
const heroSlide = new Swiper(heroBnr,{
    // 옵션:값, 
    // 옵션:{옵션:값, 옵션:값,}, // css에서 세미콜론; 붙이는것처럼 js는 콤마, 붙이기
    loop:true, // 슬라이드 끝 -> 시작반복 true(o),false(x)
    // direction:'vertical', // 슬라이드 방향 : horizontal 수평(기본값) / vertical (수직)
    effect:'fade', // 'fade','cube','flip' 제자리 나타나기 / 사라지기 할때는 direction 적용해제
    // mousewheel:true, // 마우스휠 가능 옵션
    autoplay:{ //자동재생
        delay:1000, // 1000 = 1초
        pauseOnMouseEnter:true, // 마우스가 올라오면 일시정지
        disableOnInteraction:true, // 마우스상호작용 후 멈출건지, 움직일건지 (false) 옵션
    }
});
// ============================= 마켓배너
const marketBnr = document.querySelector('.market_bnr');
const marketSlide = new Swiper(marketBnr,{
    loop:true,
    effect:'flip',
    autoplay:{
        delay:2000,
        pauseOnMouseEnter:true,
    }
});

console.log(marketBnr);