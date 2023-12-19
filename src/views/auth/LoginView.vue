<template>
  <div class="login_wrapper">
    <div class="login_content">
      <div class="login_left_content">
        <div class="logoContent">
          <router-link to="/" class="logoLink">
            <img src="@/assets/logo.svg" class="logo" alt="Logo" />
            <h3 class="logoText">
              Центр спортивной подготовки для лиц с ограниченными физическими
              возможностями
            </h3>
          </router-link>
        </div>
      </div>
      <div class="login_right_content">
        <div class="form_content">
          <div class="form_content_title">Создать аккаунт</div>
          <form class="login_form">
            <div class="form_group">
              <input type="text" class="form_input" placeholder="ФИО" />
            </div>

            <div class="form_group">
              <input type="text" class="form_input" placeholder="Почта" />
            </div>

            <div class="form_group password_group">
              <input type="password" class="form_input" placeholder="Пароль" />
              <img
                src="../../assets/password.svg"
                class="password_img"
                alt=""
              />
            </div>

            <div class="form_group">
              <input
                type="text"
                class="form_input"
                placeholder="Область, регион, город"
              />
            </div>

            <div class="form_group">
              <!-- <input
                type="text"
                class="form_input"
                placeholder="Выберите вашу должность"
              /> -->

              <v-select
                :options="options"
                class="form_input"
                placeholder="Выберите вашу должность"
              ></v-select>
            </div>
            <button
              type="click"
              @click.prevent="goRouteLk"
              class="link local_link button"
            >
              <div class="link__text button_text">Создать аккаунт</div>
            </button>
          </form>

          <p class="login_desc">
            Уже есть аккаунт?
            <router-link to="/login" class="login_desc_link">Войти</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  components: { vSelect },
  data() {
    return {
      options: ["Тренер", "Начальник"],
    };
  },
  methods: {
    goRouteLk() {
      this.$router.push("/personal-area");
    },
  },
};
</script>

<style scoped>
.login_wrapper {
  background-color: #1f5296;
  height: 100vh;
}
.login_content {
  display: flex;
}

.login_left_content {
  width: 29%;
  padding: 24px 40px;
  position: relative;
  z-index: 100;
}

.login_left_content::after {
  content: "";
  width: 1372px;
  height: 418px;
  background-image: url("../../assets/loginOranament.png");
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 30%;
  z-index: -1;
}

.login_right_content {
  width: 71%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  z-index: 100;
}

.form_content {
  width: 100%;
  max-width: 413px;
}

.form_content_title {
  font-size: 24px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  color: #060326;
  margin-bottom: 24px;
}

.form_input {
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  padding: 11px 0;
  border: none;
  border-bottom: 1px solid rgba(201, 201, 201, 1);
  outline: none;
}

.form_input::placeholder {
  color: #9d9d9d;
}

.form_group {
  margin-bottom: 36px;
}

.button {
  width: 100%;
  padding: 17px 45px;
  border: none;
  cursor: pointer;
}

.button_text {
  font-size: 18px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
}

.local_link {
  background: linear-gradient(90deg, #da345c 0%, #e1a912 69.54%);
}

.login_form {
  margin-bottom: 24px;
}

.login_desc {
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #9d9d9d;
}

.login_desc_link {
  font-weight: 700;
  color: #9d9d9d;
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

.password_group {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(201, 201, 201, 1);
}

.password_group input {
  border: none;
}

.password_img {
  width: 18px;
  height: 18px;
  cursor: pointer;
}
</style>
