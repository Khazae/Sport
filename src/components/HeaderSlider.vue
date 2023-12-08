<template>
  <div>
    <swiper
      :slides-per-view="1"
      :space-between="30"
      :loop="false"
      :pagination="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="test" :class="{ test_2: true }">
        <div class="container">
          <div class="mainSection__row">
            <div class="mainSection__title__item">
              <div class="mainSection__title">
                Диас Кенжебек завоевал золотую медаль на Азиатских пара играх в
                Ханчжоу
              </div>
              <div class="mainSection__action">
                <a href="">Смотреть результаты</a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="test" :class="{ test_2: true }">
        <div class="mainSection__row">
          <div class="mainSection__title__item">
            <div class="mainSection__title">
              Диас Кенжебек завоевал золотую медаль на Азиатских пара играх в
              Ханчжоу
            </div>
            <div class="mainSection__action">
              <a href="">Смотреть результаты</a>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="test" :class="{ test_2: true }">
        <div class="mainSection__row">
          <div class="mainSection__title__item">
            <div class="mainSection__title">
              Диас Кенжебек завоевал золотую медаль на Азиатских пара играх в
              Ханчжоу
            </div>
            <div class="mainSection__action">
              <a href="">Смотреть результаты</a>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getImageUrl(imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`;
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
.w-100 {
  width: 100%;
}
.ml-auto,
.mx-auto {
  margin-left: auto;
}
.mr-auto,
.mx-auto {
  margin-right: auto;
}
</style>
