import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const categoryConfig = {
  modules: [Navigation],
  slidesPerView: 8,
  spaceBetween: 30,
  speed: 500,
  navigation: {
    nextEl: '.category-carousel-next',
    prevEl: '.category-carousel-prev',
  },
  breakpoints: {
    0: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    991: { slidesPerView: 5 },
    1500: { slidesPerView: 8 },
  },
};

const productBreakpoints = {
  0: { slidesPerView: 1 },
  768: { slidesPerView: 3 },
  991: { slidesPerView: 4 },
  1500: { slidesPerView: 5 },
};

const destroySwiper = (el) => {
  if (el?.swiper && !el.swiper.destroyed) {
    el.swiper.destroy(true, true);
  }
};

const useThemeSwipers = () => {
  useEffect(() => {
    const instances = [];

    document.querySelectorAll('.category-carousel.swiper').forEach((el) => {
      destroySwiper(el);
      instances.push(new Swiper(el, categoryConfig));
    });

    document.querySelectorAll('.products-carousel').forEach((section) => {
      const el = section.querySelector('.swiper');
      if (!el) return;
      destroySwiper(el);
      instances.push(
        new Swiper(el, {
          modules: [Navigation],
          slidesPerView: 5,
          spaceBetween: 30,
          speed: 500,
          navigation: {
            nextEl: section.querySelector('.products-carousel-next'),
            prevEl: section.querySelector('.products-carousel-prev'),
          },
          breakpoints: productBreakpoints,
        })
      );
    });

    return () => {
      instances.forEach((swiper) => {
        if (swiper && !swiper.destroyed) {
          swiper.destroy(true, true);
        }
      });
    };
  }, []);
};

export default useThemeSwipers;
