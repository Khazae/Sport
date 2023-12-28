<template>
  <section class="videosSection">
    <div class="container">
      <div class="videosSection__row">
        <div class="videosSection__item">
          <div class="videosSection__item__title">Топ видео</div>
          <div class="videosSection__item__block" v-for="item in list" :key="'video_'+item.id">
            <a @click.prevent="toNewTab(item.link)" style="cursor: pointer" class="videosSection__item__block_link">
              <div class="videosSection__item__block__img">
                <img
                    :src="item.img_url"
                    alt=""
                    class="videosSection__item__block__img_image"
                />
                <img
                    src="../assets/video/play.svg"
                    alt=""
                    class="videosSection__item__block__img__icon"
                />
              </div>

              <div class="videosSection__item__block__content">
                <div class="videosSection__item__block__content__date">
                  {{ $dayjs(item.date).format('D MMMM YYYY') }}
                </div>
                <div class="videosSection__item__block__content__title">
                  {{ item.title }}
                </div>
                <div
                    class="videosSection__item__block__content__description"
                >
                  {{ item.description }}
                </div>
              </div>
            </a>
          </div>

        </div>
        <div class="videosSection__item" v-if="last_elem" :style="{backgroundImage:'url('+last_elem.img_url+')'}"  style="cursor: pointer" @click="toNewTab(last_elem.link)">
          <div class="videosSection__item__action">Чемпионат</div>
          <div class="videosSection__item__content">
            <div class="videosSection__item__content__date">
              {{ $dayjs(last_elem.date).format('D MMMM YYYY') }}
            </div>
            <div class="videosSection__item__content__title">
              {{ last_elem.title }}
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import requests from "@/api/requests";

export default {
  name: "VideoBlock",
  data() {
    return {
      list: [],
      last_elem: null
    }
  },
  methods: {
    getList() {
      requests.getVideoGallery().then(res => {
        this.list = res.slice(0, 3)
        if (res.length == 4)
          this.last_elem = res[3]
      })
    },
    toNewTab(link) {
      window.open(link, '_blank');
    }
  },
  mounted() {
    this.getList()
  }
}
</script>

<style scoped>
.videosSection__item:last-child {
  background-image: unset;
}
</style>