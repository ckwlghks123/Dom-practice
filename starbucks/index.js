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

promo.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const banner = document.querySelector(".banners");
  const btn = document.querySelector("span img[role='button']");

  if (banner.style.display === "block") {
    banner.style.display = "none";
    btn.src = "img/btn_prom_down.png";
  } else {
    banner.style.display = "block";
    btn.src = "img/btn_prom_up.png";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide("#thumbnail-slider", {
    type: "loop",
    start: 0,
    fixedWidth: 840,
    fixedHeight: 541,
    autoplay: true,
    gap: 10,
    cover: true,
    focus: "center",
    isNavigation: true,
    interval: 2070,
    resetProgress: true,
  });
  splide.mount();
  console.log(splide);
});

AOS.init();
