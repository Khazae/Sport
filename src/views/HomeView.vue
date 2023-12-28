<template>
  <main class="main">
    <section class="mainSection">
      <div class="container" style="position: relative">
        <HeaderSlider />

        <div class="mainSection__social">
          <div class="mainSection__social__border"></div>
          <a href="#"
            ><img
              src="../assets/header/inst.svg"
              alt=""
              class="mainSection__social__img"
          /></a>
          <a href="#"
            ><img
              src="../assets/header/fb.svg"
              alt=""
              class="mainSection__social__img"
          /></a>
          <a href="#"
            ><img
              src="../assets/header/youtube.svg"
              alt=""
              class="mainSection__social__img"
          /></a>
          <div class="mainSection__social__border"></div>
        </div>
      </div>
    </section>

    <div class="wrapper">
      <section class="newsSection">
        <div class="container">
          <div class="newsContent">
            <h3 class="newsTitle">Новости комитета</h3>

            <div class="newsItems">
              <!-- <div class="newsItem">
                <router-link to="/press-releases" class="newsLink">
                  <img src="../assets/news1.svg" class="newsImage" alt="News" />
                  <div class="newsTextContent">
                    <h3 class="newsText">
                      Чемпионский титул и миллионы долларов: сборная Казахстана
                      поборется за звание сильнейшей в мире
                    </h3>
                    <span class="newsDate">1 час назад</span>
                  </div>
                </router-link>
              </div> -->

              <div v-for="n in news" :key="n.id" class="newsItem">
                <router-link
                  :to="{ name: 'pressReleases', params: { id: n.id } }"
                  class="newsLink"
                >
                  <img :src="n.img_url" class="newsImage" alt="News" />
                  <div class="newsTextContent">
                    <h3 class="newsText">
                      {{ n.title }}
                    </h3>
                    <span class="newsDate">{{
                      dayjs(n.publish_date).format("DD.MM.YYYY")
                    }}</span>
                  </div>
                </router-link>
              </div>

              <!-- <div class="newsItem">
                <router-link to="/press-releases" class="newsLink">
                  <img src="../assets/news1.svg" class="newsImage" alt="News" />
                  <div class="newsTextContent">
                    <h3 class="newsText">
                      Чемпионский титул и миллионы долларов: сборная Казахстана
                      поборется за звание сильнейшей в мире
                    </h3>
                    <span class="newsDate">1 час назад</span>
                  </div>
                </router-link>
              </div> -->
            </div>
            <a href="#" class="link"
              ><div class="link__text">
                Смотреть все
                <svg
                  width="32"
                  height="8"
                  viewBox="0 0 32 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64644L28.1716 0.464464C27.9763 0.269202 27.6597 0.269202 27.4645 0.464464C27.2692 0.659726 27.2692 0.976308 27.4645 1.17157L30.2929 4L27.4645 6.82842C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.73079 27.9763 7.73079 28.1716 7.53553L31.3536 4.35355ZM1 4.5L31 4.5L31 3.5L1 3.5L1 4.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section class="competitionsSection">
        <div class="container">
          <div class="competitionsContent">
            <h3 class="competitionsTitle">Результаты соревнований</h3>

            <div class="competitionsContent__row">
              <div class="competitionsContent__row__item">
                <router-link
                  to="/calendar"
                  class="competitionsContent__row__item_link"
                >
                  <div class="competitionsContent__row__item__data">
                    5.11.2023
                  </div>
                  <div class="competitionsContent__row__item__text">
                    IV Азиатские пара пара игры Ханчжоу
                  </div>
                </router-link>
              </div>

              <div class="competitionsContent__row__item">
                <router-link
                  to="/calendar"
                  class="competitionsContent__row__item_link"
                >
                  <div class="competitionsContent__row__item__data">
                    5.11.2023
                  </div>
                  <div class="competitionsContent__row__item__text">
                    Открытый турнир по пара настольному теннису
                  </div>
                </router-link>
              </div>

              <div class="competitionsContent__row__item">
                <router-link
                  to="/calendar"
                  class="competitionsContent__row__item_link"
                >
                  <div class="competitionsContent__row__item__data">
                    5.11.2023
                  </div>
                  <div class="competitionsContent__row__item__text">
                    Чемпионат мира по пара дзюдо
                  </div>
                </router-link>
              </div>

              <div class="competitionsContent__row__item">
                <router-link
                  to="/calendar"
                  class="competitionsContent__row__item_link"
                >
                  <div class="competitionsContent__row__item__data">
                    5.11.2023
                  </div>
                  <div class="competitionsContent__row__item__text">
                    Чемпионат мира по пара хоккею
                  </div>
                </router-link>
              </div>
            </div>

            <router-link to="/calendar" class="link"
              ><div class="link__text">
                Смотреть все
                <svg
                  width="32"
                  height="8"
                  viewBox="0 0 32 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64644L28.1716 0.464464C27.9763 0.269202 27.6597 0.269202 27.4645 0.464464C27.2692 0.659726 27.2692 0.976308 27.4645 1.17157L30.2929 4L27.4645 6.82842C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.73079 27.9763 7.73079 28.1716 7.53553L31.3536 4.35355ZM1 4.5L31 4.5L31 3.5L1 3.5L1 4.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <section class="eventsSection">
        <div class="container">
          <div class="eventsSection__title newsTitle">Предстоящие события</div>

          <div class="eventsSection__row">
            <div class="eventsSection__item">
              <router-link to="/calendar" class="eventsSection__item_link">
                <img
                  src="../assets/events/1.png"
                  alt=""
                  class="eventsSection__item__img"
                />
                <div class="eventsSection__item__bottom">
                  <div class="eventsSection__item__bottom__data">
                    2-7 января 2024 г.
                  </div>
                  <div class="eventsSection__item__bottom__text">
                    Чемпионат мира 2023 по пара таеквондо
                  </div>
                </div>
              </router-link>
            </div>

            <div class="eventsSection__item">
              <router-link to="/calendar" class="eventsSection__item_link">
                <img
                  src="../assets/events/2.png"
                  alt=""
                  class="eventsSection__item__img"
                />
                <div class="eventsSection__item__bottom">
                  <div class="eventsSection__item__bottom__data">
                    2-7 января 2024 г.
                  </div>
                  <div class="eventsSection__item__bottom__text">
                    Чемпионат мира 2023 по пара таеквондо
                  </div>
                </div>
              </router-link>
            </div>

            <div class="eventsSection__item">
              <router-link to="/calendar" class="eventsSection__item_link">
                <img
                  src="../assets/events/3.png"
                  alt=""
                  class="eventsSection__item__img"
                />
                <div class="eventsSection__item__bottom">
                  <div class="eventsSection__item__bottom__data">
                    2-7 января 2024 г.
                  </div>
                  <div class="eventsSection__item__bottom__text">
                    Чемпионат мира 2023 по пара таеквондо
                  </div>
                </div>
              </router-link>
            </div>

            <div class="eventsSection__item">
              <div class="eventsSection__item__block">
                <router-link
                  to="/calendar"
                  class="eventsSection__item__block_link"
                >
                  <img src="../assets/events/4.png" alt="" />
                  <div class="eventsSection__item__block__content">
                    <div class="eventsSection__item__block__prequotes">
                      #Pollar. 87 - 12 July 2023
                    </div>
                    <div class="eventsSection__item__block__title">
                      Baku 2023 Taekwondo Championships
                    </div>
                  </div>
                </router-link>
              </div>

              <div class="eventsSection__item__block">
                <router-link
                  to="/calendar"
                  class="eventsSection__item__block_link"
                >
                  <img src="../assets/events/5.png" alt="" />
                  <div class="eventsSection__item__block__content">
                    <div class="eventsSection__item__block__prequotes">
                      #Pollar. 87 - 12 July 2023
                    </div>
                    <div class="eventsSection__item__block__title">
                      Open Championship Royal Liverpool Golf
                    </div>
                  </div>
                </router-link>
              </div>

              <div class="eventsSection__item__block">
                <router-link
                  to="/calendar"
                  class="eventsSection__item__block_link"
                >
                  <img src="../assets/events/6.png" alt="" />
                  <div class="eventsSection__item__block__content">
                    <div class="eventsSection__item__block__prequotes">
                      #Pollar. 87 - 12 July 2023
                    </div>
                    <div class="eventsSection__item__block__title">
                      Ireland Tour of England Test 2023
                    </div>
                  </div>
                </router-link>
              </div>

              <div class="eventsSection__item__link">
                <router-link to="/calendar" class="">
                  <div class="eventsSection__item__link__text">
                    Смотреть все
                    <svg
                      width="32"
                      height="8"
                      viewBox="0 0 32 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64644L28.1716 0.464464C27.9763 0.269202 27.6597 0.269202 27.4645 0.464464C27.2692 0.659726 27.2692 0.976308 27.4645 1.17157L30.2929 4L27.4645 6.82842C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.73079 27.9763 7.73079 28.1716 7.53553L31.3536 4.35355ZM1 4.5L31 4.5L31 3.5L1 3.5L1 4.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="videosSection">
        <div class="container">
          <div class="videosSection__row">
            <div class="videosSection__item">
              <div class="videosSection__item__title">Топ видео</div>
              <div class="videosSection__item__block">
                <a
                  href="https://youtu.be/XE_SmXgslaE?si=I37I0ec8rmydqnwC"
                  target="_blank"
                >
                  <div class="videosSection__item__block__img">
                    <img
                      src="../assets/video/newVideo1.jpg"
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
                      21 окт. 2023
                    </div>
                    <div class="videosSection__item__block__content__title">
                      Дневник Азиатских Пара игр Ханчжоу-2022 21.10.2023
                    </div>
                    <div
                      class="videosSection__item__block__content__description"
                    >
                      Торжественная церемония поднятия флага Республики
                      Казахстан и первые соревнования первенства континента
                    </div>
                  </div>
                </a>
              </div>

              <div class="videosSection__item__block">
                <a
                  href="https://youtu.be/ybixXsnujh0?si=2FIloWnghmAYJ8Ow"
                  target="_blank"
                >
                  <div class="videosSection__item__block__img">
                    <img
                      src="../assets/video/newVideo2.jpg"
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
                      20 окт. 2023
                    </div>
                    <div class="videosSection__item__block__content__title">
                      Дневник Азиатских Пара игр 20.10.2023
                    </div>
                    <div
                      class="videosSection__item__block__content__description"
                    ></div>
                  </div>
                </a>
              </div>

              <div class="videosSection__item__block">
                <a
                  href="https://youtu.be/FRv3MXoOkNU?si=hR9BvLUJS5rLVMz8"
                  target="_blank"
                >
                  <div class="videosSection__item__block__img">
                    <img
                      src="../assets/video/newVideo3.jpg"
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
                      18 окт. 2023
                    </div>
                    <div class="videosSection__item__block__content__title">
                      Дневник Азиатских Пара игр
                    </div>
                    <div
                      class="videosSection__item__block__content__description"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <a
              class="videosSection__item"
              href="https://youtu.be/D2G4d4XMdBg?si=ZznOvfshSbLKcdrV"
              target="_blank"
            >
              <div class="videosSection__item__action">Чемпионат</div>
              <div class="videosSection__item__content">
                <div class="videosSection__item__content__date">
                  19 окт. 2023
                </div>
                <div class="videosSection__item__content__title">
                  Дневник Азиатских Пара игр Ханчжоу-2022 19.10.2023
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
    <section class="promoSection">
      <div class="container">
        <div class="promoSection__title">
          Смотрите нас <br />
          в социальных сетях
        </div>
        <div class="promoSection__social">
          <a href="#"><img src="../assets/social/instagram.svg" alt="" /></a>
          <a href="#"><img src="../assets/social/facebook.svg" alt="" /></a>
          <a href="#"><img src="../assets/social/youtube.svg" alt="" /></a>
        </div>
      </div>
    </section>

    <SliderComponent />

    <section class="promoPartners">
      <div class="container">
        <div class="promoPartners__title">Наши партнеры</div>

        <div class="promoPartners__row">
          <a href="#" target="_blank"
            ><img src="../assets/partners/1.png" alt=""
          /></a>
          <a href="#" target="_blank"
            ><img src="../assets/partners/2.png" alt=""
          /></a>
          <a href="#" target="_blank"
            ><img src="../assets/partners/3.png" alt=""
          /></a>
          <a href="#" target="_blank"
            ><img src="../assets/partners/4.png" alt=""
          /></a>
          <a href="#" target="_blank"
            ><img src="../assets/partners/5.png" alt=""
          /></a>
          <a href="#" target="_blank"
            ><img src="../assets/partners/6.png" alt=""
          /></a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HeaderSlider from "@/components/HeaderSlider.vue";
import SliderComponent from "@/components/SliderComponent.vue";
import dayjs from "dayjs";

import requests from "../api/requests";

export default {
  data() {
    return {
      news: [],
      // img_url: ""
    };
  },
  components: {
    SliderComponent,
    HeaderSlider,
  },
  mounted() {
    this.getList();
    // this.img_url = process.env.VUE_APP_BACKEND_URL;
  },
  methods: {
    dayjs,
    getList() {
      requests.getList().then((res) => {
        this.news = res;
      });
    },
  },
};
</script>
