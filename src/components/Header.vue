<template>
  <header class="header">
    <div class="headerContent">
      <div class="logoContent">
        <router-link to="/" class="logoLink">
          <img src="../assets/logo.svg" class="logo" alt="Logo" />
          <h3 class="logoText">
            Центр спортивной подготовки для лиц с ограниченными физическими
            возможностями
          </h3>
        </router-link>
      </div>
      <div class="rightContent">
        <nav class="nav">
          <ul class="list">
            <li
              class="listItem"
              @mouseover="showDropdown"
              @mouseleave="hideDropdown"
            >
              <router-link to="/about" class="listLink">О нас</router-link>
            </li>
            <li class="listItem">
              <router-link to="" class="listLink">Виды спорта</router-link>
            </li>
            <li class="listItem">
              <router-link to="/calendar" class="listLink"
                >Календарь</router-link
              >
            </li>
            <li class="listItem">
              <router-link to="/calendar" class="listLink"
                >Результаты</router-link
              >
            </li>
            <li class="listItem">
              <router-link to="/budget" class="listLink">Бюджет</router-link>
            </li>
            <li class="listItem">
              <router-link to="/faq" class="listLink">FAQ</router-link>
            </li>
            <li class="listItem">
              <router-link to="/contacts" class="listLink"
                >Контакты</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="loginContent">
          <div
            v-if="$store.state.auth.authorized"
            class="loginLink"
            style="cursor: pointer"
            @click="$router.push({ name: 'personalArea' })"
          >
            <img src="../assets/user.svg" class="loginImage" alt="User" />
            <span class="loginText" v-if="$store.state.user.user">{{
              $store.state.user.user.name
            }}</span>
          </div>
          <router-link v-else to="/login" class="loginLink">
            <img src="../assets/user.svg" class="loginImage" alt="User" />
            <span class="loginText">Войти</span>
          </router-link>
        </div>

        <div class="langContent">
          <span class="currentLang" @click="toggleSelect">{{
            selectedLanguage.value
          }}</span>
          <ul v-show="selectVisible" @blur="hideSelect">
            <li
              v-for="(language, key) in languages"
              :key="key"
              @click="selectLanguage(language)"
            >
              {{ language.value }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="headerDropdownMenu"
      v-show="isDropdownVisible"
      @mouseover="showDropdown"
      @mouseleave="hideDropdown"
    >
      <div class="headerDropdownMenuContent">
        <div class="headerDropdownMenuItems">
          <div class="headerDropdownMenuItem">
            <ul class="headerDropdownMenuList">
              <li class="headerDropdownMenuLi">
                <router-link to="/about" class="headerDropdownMenuLink"
                  >Наша история</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link to="/structure" class="headerDropdownMenuLink"
                  >Организационная структура</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link to="/survey" class="headerDropdownMenuLink"
                  >Опросы</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link to="/about-manual" class="headerDropdownMenuLink"
                  >Сведения о руководстве</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link to="/general-info" class="headerDropdownMenuLink"
                  >Общая информация о деятельности</router-link
                >
              </li>
            </ul>
          </div>

          <div class="headerDropdownMenuItem">
            <ul class="headerDropdownMenuList">
              <li class="headerDropdownMenuLi">
                <router-link
                  to="/development-plan"
                  class="headerDropdownMenuLink"
                  >План развития</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link to="/vacancies" class="headerDropdownMenuLink"
                  >Вакансии</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link to="/press-releases" class="headerDropdownMenuLink"
                  >Пресс-релизы</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link
                  to="/financial-statements"
                  class="headerDropdownMenuLink"
                  >Финансовая</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link
                  to="/contacts-view"
                  class="headerDropdownMenuLink"
                  >Контактные данные "Адалдық алаңы"</router-link
                >
              </li>
            </ul>
          </div>

          <div class="headerDropdownMenuItem">
            <ul class="headerDropdownMenuList">
              <li class="headerDropdownMenuLi">
                <router-link to="/regulatory" class="headerDropdownMenuLink"
                  >Нормативные документы регламентирующие
                  деятельность</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link
                  to="/information-about"
                  class="headerDropdownMenuLink"
                  >Информация о закупках товаров</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link
                  to="/statistical-indicators"
                  class="headerDropdownMenuLink"
                  >Статистические показатели и результаты
                  деятельности</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link
                  to="/analytical-reports"
                  class="headerDropdownMenuLink"
                  >Аналитические отчеты и доклады о проделанной
                  работе</router-link
                >
              </li>
            </ul>
          </div>

          <div class="headerDropdownMenuItem">
            <ul class="headerDropdownMenuList">
              <li class="headerDropdownMenuLi">
                <router-link
                  to="/schedule-personal"
                  class="headerDropdownMenuLink"
                  >График личного приема граждан</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link to="/state-symbols" class="headerDropdownMenuLink"
                  >Государственные символы Республики Казахстан</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link
                  to="/anti-corruption"
                  class="headerDropdownMenuLink"
                  >Противодействие коррупции</router-link
                >
              </li>
              <li class="headerDropdownMenuLi">
                <router-link
                  to="/international-relationship"
                  class="headerDropdownMenuLink"
                  >Международные отношения</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: ["isVisible"],
  data() {
    return {
      isDropdownVisible: false,
      delayTimeout: null,
      selectedLanguage: { value: "kz" },
      selectVisible: false,
      languages: [{ value: "kz" }, { value: "ru" }],
    };
  },
  mounted() {},
  watch: {
    isVisible(newVal) {
      console.log(newVal);
      this.isDropdownVisible = false;
    },
  },
  methods: {
    toggleSelect() {
      this.selectVisible = !this.selectVisible;
    },
    hideSelect() {
      this.selectVisible = false;
    },
    selectLanguage(language) {
      this.selectedLanguage = language;
      this.selectVisible = false;
    },
    showDropdown() {
      clearTimeout(this.delayTimeout);
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.delayTimeout = setTimeout(() => {
        this.isDropdownVisible = false;
      }, 300);
    },
    cancelHideDropdown() {
      clearTimeout(this.delayTimeout);
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  background: linear-gradient(1deg, #1d458b 6.15%, #2385c3 700.3%),
    linear-gradient(195deg, #ffffff, #ffffff);

  /* position: absolute;
  top: 0;
  z-index: 100; */
  position: relative;
}

.headerContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 48px;
}

.logoContent {
  width: 100%;
  max-width: 265px;
}

.logoLink {
  display: flex;
  align-items: center;
}

.logo {
  width: 53px;
  height: 53px;
  border-radius: 50%;
}

.logoText {
  font-family: "Oswald", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20.75px;
  text-transform: uppercase;
  margin-left: 13px;
  color: var(--color-white);
}

.list {
  display: flex;
  gap: 32px;
}

.listLink {
  font-size: 16px;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  line-height: 42px;
  text-transform: uppercase;
  color: var(--link-color);
  transition: color 0.3s;
  position: relative;
}

.listLink:hover {
  color: var(--color-secondary);
}

.listLink:hover::after {
  content: "";
  width: 100%;
  height: 3px;
  background-color: var(--color-secondary);
  position: absolute;
  bottom: -15px;
  left: 0;
}

.listLink:hover::before {
  content: "";
  width: 0;
  height: 0;
  border-left: 3.665px solid transparent;
  border-right: 3.665px solid transparent;
  border-bottom: 6.33px solid var(--color-secondary);
  position: absolute;
  bottom: -81%;
  left: 50%;
  transform: translate(-50%, 0) rotate(303deg);
}

.listItem {
  display: inline-block;
  position: relative;
}

.listItem:hover .headerDropdownMenu {
  display: block;
}

.rightContent {
  display: flex;
  align-items: center;
}

.loginContent {
  margin-left: 40px;
}

.loginLink {
  display: flex;
  align-items: center;
}

.loginImage {
  width: 40px;
  height: 40px;
}

.loginText {
  font-size: 16px;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color: var(--color-white);
  text-transform: uppercase;
  margin-left: 8px;
}

.langContent {
  margin-left: 40px;
}

.currentLang {
  color: var(--color-white);
  font-size: 16px;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1%;
  position: relative;
  cursor: pointer;
}

.currentLang::after {
  content: "";
  width: 7.33px;
  height: 6.33px;
  background-image: url("../assets/arrowUp.svg");
  position: absolute;
  top: 9px;
  margin-left: 8px;
}

.headerDropdownMenu {
  position: absolute;
  padding-top: 24px;
  z-index: 1000000;
  width: 100%;
  min-height: 320px;
}

.headerDropdownMenuContent {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(172.01deg, #1d458b 6.15%, #2385c3 700.3%),
    linear-gradient(0deg, #ffffff, #ffffff);

  padding: 40px 42px;
}

.headerDropdownMenuLi {
  margin-bottom: 24px;
}

.headerDropdownMenuList {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.headerDropdownMenuLink {
  font-size: 16px;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: var(--link-color);
  transition: color 0.3s;
  line-height: 24px;
  position: relative;
}

.headerDropdownMenuLink:hover {
  color: var(--color-secondary);
}

.headerDropdownMenuItems {
  display: flex;
  justify-content: space-between;
}

.headerDropdownMenuItem {
  width: 100%;
  max-width: 270px;
}

.langContent {
  position: relative;
  display: inline-block;
}

.langContent ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 4px;
  display: none;
  z-index: 99;
}

.langContent ul li {
  padding: 8px;
  cursor: pointer;
}

.langContent ul li:hover {
  background-color: #f2f2f2;
}

.langContent:hover ul {
  display: block;
}
</style>
