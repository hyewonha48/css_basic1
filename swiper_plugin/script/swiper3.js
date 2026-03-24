const ssf = document.querySelector('.ssf_hero');
// const brand = document.querySelector('.brand_slide');
const right = document.querySelector('.right_wrap');
console.log(ssf)

const rightWrap = new Swiper(right, {
    slidesPerView:3,
    spaceBetween:10,
    navigation:{
        nextEl:'right_wrap .next',
        prevEl:'right_wrap .prev',
    },
})

// const brandSlide = new Swiper(변수, {
//     slidesPerView:3,
//     spaceBetween:10,
//     navigation:{
//         nextEl:'.brand_slide .next',
//         prevEl:'.brand_slide .prev',
//     },
// })

const ssfSwiper = new Swiper (ssf, {
    slidesPerView:3, // 한번에 보이는 슬라이드 개수
    spaceBetween:0, 
    // pagenation:{el:'',},
    navigation:{
        nextEl:'.ssf_hero .next',
        prevEl:'.ssf_hero .prev',
    }
});