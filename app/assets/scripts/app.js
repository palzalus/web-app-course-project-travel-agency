import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/Stickyheader';
import Modal from './modules/Modal';
import $ from 'jquery';

let mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), "70%");
new RevealOnScroll($('.testimonial'), "85%");
let stickyHeader = new StickyHeader();
let modal = new Modal();