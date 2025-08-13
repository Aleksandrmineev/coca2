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
const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // "/coca2"
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="/"]').forEach((a) => {
    const path = a.getAttribute('href').replace(/^\//, ''); // "about.html"
    a.setAttribute('href', `${base}/${path}`); // "/coca2/about.html"
  });
});
