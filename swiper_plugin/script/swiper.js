
const wrap = document.querySelector('#wrap'); // 공통 (부모) 슬라이드
const web = document.querySelector('.web'); // 개별 슬라이드 - 부모슬라이드 안, project1 / 웹 프로젝트
const graphic = document.querySelector('.graphic'); // 개별 슬라이드 - 부모슬라이드 안, project2 / 그래픽 디자인 프로젝트

const wrapSwiper = new Swiper(wrap, {
    direction:'vertical',
    mousewheel:true,
    speed:500,
});
// ================== 개별 슬라이드 - project1 / 웹 프로젝트
const webSwiper = new Swiper(web, {
    loop:true,
    mousewheel:true,
    autoplay:{delay:1000},
    pagination:{
        // 페이지대상 html 연결,모양,동적옵션
        el:'.group .web + .web_page', // 부모선택자 1~2개는 작성해서 구분해주기
        type:'fraction', // bullets(기본값) fraction(페이지번호까지 나옴)
        //dynamicBullets:true // type이 bullets(기본값)일때만 가능
    },
});
// ================== 개별 슬라이드 - project2 / 그래픽 디자인 프로젝트
const graphicSwiper = new Swiper(graphic, {
    loop:true,
    mousewheel:true,
    autoplay:{delay:1000},
    pagination:{
        el:'.group .graphic .graphic_page',
        type:'bullets',
    },
});