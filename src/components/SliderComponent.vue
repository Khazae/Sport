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
        v-if="data_ready"
    >
      <swiper-slide class="test" :class="{ test_2: true }" v-for="items in list" :key="'items_'+items">
        <div class="container">
          <div class="sectionGallery__row">
            <div class="sectionGallery__item" v-if="items[0]">
              <img alt="" :src="items[0].img_url"/>
            </div>
            <div class="sectionGallery__item2">
              <img
                  v-if="items[1]"
                  :src="items[1].img_url"
                  style="margin-bottom: 20px"
                  alt=""
              />
              <img
                  v-if="items[2]"
                  :src="items[2].img_url"
                  style="margin-bottom: 20px"
                  alt=""
              />
              <img v-if="items[3]" :src="items[3].img_url" alt=""/>
              <img v-if="items[4]" :src="items[4].img_url" alt=""/>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {Navigation, Pagination} from "swiper";

import {SwiperCore, Swiper, SwiperSlide} from "swiper-vue2";

import "swiper/swiper-bundle.css";
import requests from "@/api/requests";

SwiperCore.use([Navigation, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      loading: false,
      list: [],
      data_ready: false
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
    getItems() {
      this.page += 1
      this.loading = true
      requests.getGallery().then(res => {
        this.list = res
        this.data_ready = true
        this.loading = false
      })
    }
  },
  mounted() {
    this.getItems()
  }
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
