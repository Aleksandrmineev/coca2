/* eslint-disable prettier/prettier */
import '/scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { initBlogCategories } from './components/blog/categories.js';
import { initBlogSlider } from './components/blog/blog-slider.js';
import { initBlogArticleSlider } from './components/blog/blog-slider-article.js';

useTheme();
useBurger();
initBlogCategories();
initBlogSlider();
initBlogArticleSlider();
