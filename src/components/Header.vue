<template>
  <header class="header">
    <div class="headerContent">
      <div class="logoContent">
        <a href="#" class="logoLink">
          <img src="../assets/logo.svg" class="logo" alt="Logo" />
          <h3 class="logoText">
            Центр спортивной подготовки для лиц с ограниченными физическими
            возможностями
          </h3>
        </a>
      </div>
      <div class="rightContent">
        <nav class="nav">
          <ul class="list">
            <li class="listItem"><a class="listLink" href="#">О нас</a></li>
            <li class="listItem">
              <a class="listLink" href="#">Виды спорта</a>
            </li>
            <li class="listItem"><a class="listLink" href="#">Календарь</a></li>
            <li class="listItem">
              <a class="listLink" href="#">Результаты</a>
            </li>
            <li class="listItem"><a class="listLink" href="#">Бюджет</a></li>
            <li class="listItem"><a class="listLink" href="#">FAQ</a></li>
            <li class="listItem"><a class="listLink" href="#">Контакты</a></li>
          </ul>
        </nav>
        <div class="loginContent">
          <a href="#" class="loginLink">
            <img src="../assets/user.svg" class="loginImage" alt="User" />
            <span class="loginText">Войти</span>
          </a>
        </div>

        <div class="langContent">
          <span class="currentLang">Каз</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {};
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
</style>
