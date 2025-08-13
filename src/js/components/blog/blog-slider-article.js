/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export function initBlogArticleSlider(root = document) {
  const el = root.querySelector('.js-blog-article-swiper');
  if (!el) return;

  new Swiper(el, {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 32,
    speed: 600,
    loop: true,
    navigation: {
      nextEl: '.blog-article__arrow--next',
      prevEl: '.blog-article__arrow--prev',
    },
    breakpoints: {
      1440: { slidesPerView: 2.5, spaceBetween: 32 },
      992: { slidesPerView: 2.5, spaceBetween: 24 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      560: { slidesPerView: 1.5, spaceBetween: 20 },
      0: { slidesPerView: 1, spaceBetween: 16 },
    },
  });
}
