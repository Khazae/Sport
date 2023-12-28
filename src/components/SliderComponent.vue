<template>
  <div class="sectionGallery">
    <div class="sectionGallery__title">Фотогалерея</div>
    <swiper
      :slides-per-view="1"
      :space-between="30"
      :loop="false"
      :pagination="true"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="test" :class="{ test_2: true }">
        <div class="container">
          <div class="sectionGallery__row">
            <div class="sectionGallery__item">
              <img src="../assets/footerSlider/1.jpeg" alt="" />
            </div>
            <div class="sectionGallery__item2">
              <img
                src="../assets/footerSlider/2.jpeg"
                style="margin-bottom: 20px"
                alt=""
              />
              <img
                src="../assets/footerSlider/3.jpeg"
                style="margin-bottom: 20px"
                alt=""
              />
              <img src="../assets/footerSlider/4.jpg" alt="" />
              <img src="../assets/footerSlider/5.jpeg" alt="" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="test" :class="{ test_2: true }">
        <div class="container">
          <div class="sectionGallery__row">
            <div class="sectionGallery__item">
              <img src="../assets/footerSlider/6.jpeg" alt="" />
            </div>
            <div class="sectionGallery__item2">
              <img
                src="../assets/footerSlider/17.jpg"
                style="margin-bottom: 20px"
                alt=""
              />
              <img
                src="../assets/footerSlider/8.jpg"
                style="margin-bottom: 20px"
                alt=""
              />
              <img src="../assets/footerSlider/9.jpeg" alt="" />
              <img src="../assets/footerSlider/10.jpeg" alt="" />
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="test" :class="{ test_2: true }">
        <div class="container">
          <div class="sectionGallery__row">
            <div class="sectionGallery__item">
              <img src="../assets/footerSlider/18.jpg" alt="" />
            </div>
            <div class="sectionGallery__item2">
              <img
                src="../assets/footerSlider/12.jpeg"
                style="margin-bottom: 20px"
                alt=""
              />
              <img
                src="../assets/footerSlider/13.jpeg"
                style="margin-bottom: 20px"
                alt=""
              />
              <img src="../assets/footerSlider/14.jpeg" alt="" />
              <img src="../assets/footerSlider/11.jpeg" alt="" />
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

import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
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

.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0px !important;
}
</style>
