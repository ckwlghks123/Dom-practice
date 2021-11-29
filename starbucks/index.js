/**
 * @Filename index.js
 * @Author ckwlghks123
 * @Description 스타벅스 페이지 Dom 기능 작성
 */

AOS.init();
// 공지사항
const news = document.querySelector(".news");
setInterval(() => {
  const tmp1 = news.firstElementChild;
  tmp1.removeAttribute("style");
  tmp1.classList.remove("animate__slideInUp");
  news.appendChild(tmp1);
  const tmp3 = news.firstElementChild;
  tmp3.style.display = "block";
  tmp3.classList.add("animate__slideInUp");
}, 3000);

// 슬라이드
const promo = document.querySelector(".down");

const splide = new Splide("#thumbnail-slider", {
  type: "loop",
  start: 2,
  fixedWidth: 840,
  fixedHeight: 541,
  autoplay: false,
  gap: 10,
  cover: true,
  focus: "center",
  isNavigation: true,
  interval: 2070,
  resetProgress: true,
});
splide.mount();

promo.addEventListener("click", (e) => {
  e.preventDefault();
  const banner = document.querySelector(".banners");
  const btn = document.querySelector("span img[role='button']");
  const flag = 99;
  const Autoplay = splide.Components.Autoplay;
  const slide = document.querySelector(".slider");

  if (banner.style.display === "block") {
    banner.style.display = "none";
    banner.style.height = "0px";

    btn.src = "img/btn_prom_down.png";
    Autoplay.pause(flag);
  } else {
    banner.style.display = "block";
    banner.style.height = "658px";

    btn.src = "img/btn_prom_up.png";
    Autoplay.play(flag);
  }
});

// 검색창
const search = document.querySelector(".search_btn");
const searchInput = document.querySelector("#search");
const topNav = document.querySelector(".top_nav");
search.addEventListener("click", (e) => {
  e.preventDefault();
  topNav.style.right = "232px";
  topNav.style.transition = "all 1s";
  search.style.transition = "all 1s";
  search.style.width = "184px";
  searchInput.style.width = "134px";
  searchInput.style.display = "inline-block";
  searchInput.style.transition = "all 1s";
});
