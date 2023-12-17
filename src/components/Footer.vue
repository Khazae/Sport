<template>
  <footer class="sectionFooter">
    <div class="container">
      <div class="sectionFooter__row">
        <div class="sectionFooter__item">
          <div class="sectionFooter__item__title">
            Центр спортивной подготовки для лиц с ограниченными физическими
            возможностями
          </div>
          <div class="sectionFooter__item__number">8 (717) 2455896</div>
          <div class="sectionFooter__item__subtitle">
            Қабанбай Батыр көшесі 11/5
          </div>
          <div class="sectionFooter__item__subtitle">rchinsport@mail.ru</div>
        </div>

        <div class="sectionFooter__item" style="display: flex">
          <div class="sectionFooter__item__block">
            <router-link to="/" class="sectionFooter__item__block__link"
              >Главная</router-link
            >
            <router-link to="/about" class="sectionFooter__item__block__link"
              >О нас</router-link
            >
            <router-link to="/about" class="sectionFooter__item__block__link"
              >Виды спорта</router-link
            >
            <router-link
              to="/vacancies"
              class="sectionFooter__item__block__link"
              >Вакансии</router-link
            >
          </div>

          <div class="sectionFooter__item__block">
            <router-link to="/about" class="sectionFooter__item__block__link">
              Результаты соревнований
            </router-link>
            <router-link
              to="/press-releases"
              class="sectionFooter__item__block__link"
              >Прес-центр</router-link
            >
            <router-link to="/faq" class="sectionFooter__item__block__link"
              >Частые вопросы</router-link
            >
          </div>
        </div>

        <div class="sectionFooter__item">
          <div class="sectionFooter__item__social">
            <img src="../assets/social/instagram.svg" alt="" />
            <img src="../assets/social/facebook.svg" alt="" />
            <img src="../assets/social/youtube.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped></style>
