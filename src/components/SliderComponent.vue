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
              <img src="../assets/gallery/main.png" alt="" />
            </div>
            <div class="sectionGallery__item2">
              <img
                src="../assets/gallery/1.png"
                style="margin-bottom: 20px"
                alt=""
              />
              <img
                src="../assets/gallery/2.png"
                style="margin-bottom: 20px"
                alt=""
              />
              <img src="../assets/gallery/3.png" alt="" />
              <img src="../assets/gallery/4.png" alt="" />
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="test" :class="{ test_2: true }">
        <div class="container">
          <div class="sectionGallery__row">
            <div class="sectionGallery__item">
              <img src="../assets/gallery/main.png" alt="" />
            </div>
            <div class="sectionGallery__item2">
              <img
                src="../assets/gallery/1.png"
                style="margin-bottom: 20px"
                alt=""
              />
              <img
                src="../assets/gallery/2.png"
                style="margin-bottom: 20px"
                alt=""
              />
              <img src="../assets/gallery/3.png" alt="" />
              <img src="../assets/gallery/4.png" alt="" />
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="test" :class="{ test_2: true }">
        <div class="container">
          <div class="sectionGallery__row">
            <div class="sectionGallery__item">
              <img src="../assets/gallery/main.png" alt="" />
            </div>
            <div class="sectionGallery__item2">
              <img
                src="../assets/gallery/1.png"
                style="margin-bottom: 20px"
                alt=""
              />
              <img
                src="../assets/gallery/2.png"
                style="margin-bottom: 20px"
                alt=""
              />
              <img src="../assets/gallery/3.png" alt="" />
              <img src="../assets/gallery/4.png" alt="" />
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
