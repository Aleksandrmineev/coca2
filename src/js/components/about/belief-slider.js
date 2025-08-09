/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import 'swiper/css';

export const useBeliefSlider = () => {
  const el = document.querySelector('.js-belief-slider');
  if (!el) return;
  if (el.dataset.inited) return; // защита от повторной инициализации
  el.dataset.inited = '1';

  new Swiper(el, {
    slidesPerView: 1.15,
    spaceBetween: 24,
    loop: true,
    centeredSlides: false,
    breakpoints: {
      380: { slidesPerView: 1.2, spaceBetween: 24 },
      576: { slidesPerView: 1.5, spaceBetween: 24 },
      768: { slidesPerView: 2, spaceBetween: 24 },
      1200: { slidesPerView: 2.5, spaceBetween: 32 },
    },
  });
};
