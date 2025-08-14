/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import 'swiper/css';

export function initBlogSlider(root = document) {
  const el = root.querySelector('.js-blog-slider');
  if (!el) return;

  const wrapper = el.querySelector('.swiper-wrapper');

  // Шаблоны (клоны реальных слайдов без дубликатов)
  const templates = Array.from(wrapper.querySelectorAll('.swiper-slide'))
    .filter((n) => !n.classList.contains('swiper-slide-duplicate'))
    .map((n) => n.cloneNode(true));

  const makeSlides = (cat) => {
    const pool =
      cat === 'all'
        ? templates
        : templates.filter((n) => (n.dataset.category || '') === cat);
    // возвращаем НОВЫЕ клоны
    return pool.map((n) => n.cloneNode(true));
  };

  const options = {
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 500,
    loop: true,
    breakpoints: {
      1200: { slidesPerView: 3, spaceBetween: 32 },
      992: { slidesPerView: 2.5, spaceBetween: 24 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      560: { slidesPerView: 1.5, spaceBetween: 20 },
      0: { slidesPerView: 1, spaceBetween: 16 },
    },
  };

  let swiper = new Swiper(el, options);
  let currentCat = 'all';

  const tabs = root.querySelector('.blog-categories__list');
  if (!tabs) return;

  tabs.addEventListener('categorychange', (e) => {
    const cat = (e.detail?.category || 'all').trim();
    if (cat === currentCat) return;
    currentCat = cat;

    const slides = makeSlides(cat);
    const slidesToUse = slides.length ? slides : makeSlides('all');

    // 1) уничтожаем инстанс
    if (swiper && typeof swiper.destroy === 'function') {
      swiper.destroy(true, true); // полностью очистить DOM-артефакты
    }

    // 2) перерисовываем слайды руками
    wrapper.innerHTML = '';
    const frag = document.createDocumentFragment();
    slidesToUse.forEach((n) => frag.appendChild(n));
    wrapper.appendChild(frag);

    // 3) создаём новый Swiper
    swiper = new Swiper(el, options);
  });
}
