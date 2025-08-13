import '/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();

// Приводим все внутренние ссылки вида "/..." к BASE_URL + "..."
// src/main.js (или общий входной файл)
const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // "/coca2"
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href]').forEach((a) => {
    const href = a.getAttribute('href');
    // внешние/якорные/почта/телефоны не трогаем
    if (!href || /^(https?:|#|mailto:|tel:)/i.test(href)) return;

    // нормализуем внутренние пути
    let path = href
      .replace(/^https?:\/\/[^/]+/i, '') // на случай абсолютных своих URL
      .replace(/^\/?(coca2|coca)\//i, '') // СРЕЗАТЬ "coca2/" ИЛИ "coca/"
      .replace(/^\//, ''); // и ведущий слэш

    a.setAttribute('href', `${base}/${path}`); // "/coca2/about.html"
  });
});
