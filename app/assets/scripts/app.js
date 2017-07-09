import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

let mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), "70%");
new RevealOnScroll($('.testimonial'), "60%");