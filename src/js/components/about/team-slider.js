/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import 'swiper/css';

export const useTeamSlider = () => {
  const el = document.querySelector('.js-team-slider');
  if (!el) return;
  if (el.dataset.inited) return; // защита от повторной инициализации
  el.dataset.inited = '1';

  new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    centeredSlides: false,
    breakpoints: {
      576: { slidesPerView: 1.5, spaceBetween: 24 },
      768: { slidesPerView: 2, spaceBetween: 24 },
      1200: { slidesPerView: 3, spaceBetween: 32 },
    },
  });
};
