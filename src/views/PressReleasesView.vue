<template>
  <div class="press_releases_wrapper littlePressRealeasesWrapper">
    <HeaderTitle title="Пресс-релизы"/>
    <div class="container">
      <div class="press_releases_content">
        <div class="press_releases_news_content" v-if="item">
          <div class="press_releases_title">{{ item.title }}</div>
          <div class="press_releases_catalog">
            <!--            <div class="press_releases_catalog_author">Автор</div>-->
            <!--            <div class="press_releases_catalog_category">Категория</div>-->
            <div class="press_releases_catalog_date">{{ $dayjs(item.publish_date).fromNow() }}</div>
          </div>
          <img class="press_releases_img" alt="" :src="item.img_url"/>

          <p class="press_releases_p" v-html="item.description">

          </p>

        </div>
        <div class="press_releases_other_news_content" v-if="otherNews.length>0">
          <div class="press_releases_other_news_title">Другие новости</div>
          <div class="press_releases_other_news_items">
            <div class="press_releases_other_news_item" v-for="news in otherNews" :key="'news_'+news.id">
              <router-link :to="{'name':'pressReleases',params:{id:news.id}}">
                <img
                    :src="news.img_url"
                    class="press_releases_other_news_item_img"
                    alt=""
                />
                <div class="press_releases_other_news_item_title">
                  {{ news.title }}
                </div>
              </router-link>
            </div>

          </div>
        </div>

        <div class="press_releases_comment_content" v-if="false">
          <div class="press_releases_comment_title">Комментарии</div>

          <div class="press_releases_comment_form">
            <input
                type="text"
                class="press_releases_comment_form_name"
                placeholder="Ваше имя"
            />
            <input
                type="text"
                class="press_releases_comment_form_comment"
                placeholder="Ваш комментарий ..."
            />
            <button class="press_releases_comment_form_button" type="submit">
              Comment
            </button>
          </div>

          <div class="press_releases_comment_items">
            <div class="press_releases_comment_content_item">
              <div class="press_releases_comment_content_item_user">
                <img
                    src="../assets/commentAva.svg"
                    class="press_releases_comment_content_item_user_img"
                    alt="User"
                />
                <span class="press_releases_comment_content_item_user_title"
                >user</span
                >
              </div>
              <div class="press_releases_comment_content_item_content">
                <div class="press_releases_comment_content_item_content_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                </div>

                <div class="press_releases_comment_content_item_content_date">
                  20.11.2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "../components/HeaderTitle.vue";
import requests from "@/api/requests";

export default {
  components: {HeaderTitle},
  data() {
    return {
      item: null,
      otherNews: []
    }
  },
  watch: {
    '$route.params.id': {
      handler: function (to, from) {
        if (to != from) {
          this.getItem()
          this.getOtherItems()
        }
      },
      deep: true
    }
  },
  methods: {
    getItem() {
      requests.getNewsItem(this.$route.params.id).then(res => {
        this.item = res
      })
    },
    getOtherItems() {
      requests.getOtherNews({news_id: this.$route.params.id}).then(res => {
        this.otherNews = res
      })
    }
  },
  mounted() {
    this.getItem()
    this.getOtherItems()
  }
};
</script>

<style scoped>
.press_releases_content {
  width: 100%;
  max-width: 1109px;
}

.press_releases_title {
  font-size: 40px;
  font-weight: 500;
  color: #000000;
  font-family: "Oswald", sans-serif;
  margin-bottom: 21px;
}

.press_releases_catalog {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 25px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 24px;
}

.press_releases_catalog_author {
  color: #6de4ea;
}

.press_releases_catalog_category {
  color: #18a0fb;
  padding: 0 14px;
  border-left: 1px solid #00000080;
  border-right: 1px solid #00000080;
}

.press_releases_catalog_date {
  color: #00000080;
}

.press_releases_img {
  width: 100%;
  max-width: 1109px;
  height: 552px;
  margin-bottom: 49px;
}

.press_releases_p {
  font-size: 18px;
  font-weight: 400;
  color: #000000cc;
  font-family: "Inter", sans-serif;
  margin-bottom: 28px;
}

.press_releases_p:last-child {
  margin-bottom: 0;
}

.press_releases_news_content {
  margin-bottom: 120px;
}

.press_releases_other_news_content {
  margin-bottom: 49px;
}

.press_releases_other_news_title {
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: #000000cc;
  margin-bottom: 28px;
}

.press_releases_other_news_items {
  display: flex;
  flex-wrap: wrap;
  gap: 55px;
}

.press_releases_other_news_item {
  width: 100%;
  max-width: 333px;
}

.press_releases_other_news_item_img {
  width: 100%;
  max-width: 333px;
  margin-bottom: 11px;
}

.press_releases_other_news_item_title {
  font-size: 22px;
  font-weight: 700;
  color: #000000cc;
  font-family: "Inter", sans-serif;
}

.press_releases_comment_title {
  font-size: 32px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  margin-bottom: 28px;
}

.press_releases_comment_content {
  width: 100%;
  max-width: 771px;
}

.press_releases_comment_form {
  display: flex;
  align-items: center;
  gap: 22px;
  margin-bottom: 28px;
}

.press_releases_comment_form_name {
  width: 100%;
  max-width: 154px;
  height: 40px;
  border: 1px solid #00000080;
  font-family: "Montserrat", sans-serif;
  padding: 8px 8px;
  border-radius: 5px;
}

.press_releases_comment_form_name::placeholder {
  text-align: center;
}

.press_releases_comment_form_comment {
  width: 100%;
  max-width: 437px;
  height: 40px;
  border: 1px solid #00000080;
  font-family: "Montserrat", sans-serif;
  padding: 8px 8px;
  border-radius: 5px;
}

.press_releases_comment_form_comment::placeholder {
  text-align: center;
}

.press_releases_comment_form_button {
  font-size: 15px;
  font-weight: 500;
  padding: 11px 27px;
  font-family: "Montserrat", sans-serif;
  background-color: #007aff;
  color: #fff;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.press_releases_comment_content_items {
  display: flex;
  flex-direction: column;
}

.press_releases_comment_content_item {
  display: flex;
  align-items: flex-start;
  background-color: #c4c4c44d;
  padding: 22px 19px;
  margin-bottom: 37px;
}

.press_releases_comment_content_item_user {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.press_releases_comment_content_item_user_title {
  font-size: 18px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
}

.press_releases_comment_content_item_content {
  margin-left: 28px;
}

.press_releases_comment_content_item_content_text {
  font-size: 18px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  color: #000000cc;
  margin-bottom: 10px;
}

.press_releases_comment_content_item_content_date {
  font-size: 18px;
  font-weight: 400px;
  font-family: "Inter", sans-serif;
  color: #00000080;
}
</style>
