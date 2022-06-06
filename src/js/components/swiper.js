  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';

  Swiper.use([Navigation, Pagination]);

  const mySwiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
