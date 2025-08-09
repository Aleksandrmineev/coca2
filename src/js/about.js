/* eslint-disable prettier/prettier */
import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useBeliefSlider } from './components/about/belief-slider.js';
import { useTeamSlider } from './components/about/team-slider.js';

useTheme();
useBurger();
useBeliefSlider();
useTeamSlider();
