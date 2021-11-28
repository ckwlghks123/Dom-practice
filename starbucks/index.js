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
  start: 0,
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
  e.stopPropagation();
  const banner = document.querySelector(".banners");
  const btn = document.querySelector("span img[role='button']");
  const flag = 99;
  const Autoplay = splide.Components.Autoplay;

  if (banner.style.display === "block") {
    banner.style.display = "none";
    btn.src = "img/btn_prom_down.png";
    Autoplay.pause(flag);
  } else {
    banner.style.display = "block";
    btn.src = "img/btn_prom_up.png";
    Autoplay.play(flag);
  }
});

AOS.init();
