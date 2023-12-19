<template>
  <div class="login_wrapper">
    <div class="login_content">
      <div class="login_left_content">
        <div class="logoContent">
          <router-link to="/" class="logoLink">
            <img src="@/assets/logo.svg" class="logo" alt="Logo"/>
            <h3 class="logoText">
              Центр спортивной подготовки для лиц с ограниченными физическими
              возможностями
            </h3>
          </router-link>
        </div>
      </div>
      <div class="login_right_content">
        <div class="form_content">
          <div class="form_content_title">{{ page_type == 1 ? 'Создать аккаунт' : 'Войти' }}</div>
          <div class="login_form" v-if="page_type==1">
            <div class="form_group" :class="{'error_form':errors.name}">
              <input type="text" class="form_input" placeholder="ФИО" v-model="form.name" :disabled="loading"/>
            </div>

            <div class="form_group" :class="{'error_form':errors.email}">
              <input type="text" class="form_input" placeholder="Почта" :disabled="loading" v-model="form.email"/>
            </div>

            <div class="form_group password_group" :class="{'error_form':errors.password}">
              <input id="password_field" :disabled="loading" type="password" class="form_input" placeholder="Пароль"
                     v-model="form.password"/>
              <img
                  src="../../assets/password.svg"
                  class="password_img"
                  alt=""
                  @mouseover="showPassword()"
                  @mouseout="hidePassword()"
              />
            </div>

            <div class="form_group" :class="{'error_form':errors.region}">
              <input
                  type="text"
                  class="form_input"
                  placeholder="Область, регион, город"
                  v-model="form.region"
                  :disabled="loading"

              />
            </div>

            <div class="form_group" v-if="false">
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
            <!-- <button
              type="click"
              @click.prevent="goRouteLk"
              class="link local_link button"
            > -->
            <button @click="register" :disabled="loading" class="link local_link button">
              <div class="link__text button_text">Создать аккаунт</div>
            </button>
          </div>
          <div class="login_form" v-else-if="page_type==2">

            <div class="form_group" :class="{'error_form':errors.email}">
              <input type="text" class="form_input" placeholder="Почта" :disabled="loading" v-model="form.email"/>
            </div>

            <div class="form_group password_group" :class="{'error_form':errors.password}">
              <input id="password_field" :disabled="loading" type="password" class="form_input" placeholder="Пароль"
                     v-model="form.password"/>
              <img
                  src="../../assets/password.svg"
                  class="password_img"
                  alt=""
                  @mouseover="showPassword()"
                  @mouseout="hidePassword()"
              />
            </div>


            <button @click="login" :disabled="loading" class="link local_link button">
              <div class="link__text button_text">Войти</div>
            </button>
          </div>

          <div class="login_desc" v-if="page_type==1">
            Уже есть аккаунт?
            <div class="login_desc_link" @click="page_type=2">Войти</div>
          </div>
          <div class="login_desc" v-else-if="page_type==2">
            <div class="login_desc_link" @click="page_type=1">Зарегистрироваться</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import requests from "@/api/requests";

export default {
  components: {vSelect},
  data() {
    return {
      options: ["Тренер", "Начальник"],
      form: {
        name: null,
        role_id: 2,
        password: null,
        region: null,
        email: null
      },
      errors: [],
      loading: false,
      page_type: 1
    };
  },
  methods: {
    goRouteLk() {
      this.$router.push("/personal-area");
    },
    register() {
      this.loading = true;
      this.errors = [];
      requests.register(this.form).then(res => {
        this.loading = false;
        requests.setAuthorization(this.form.email, this.form.password, res.token);
        this.$router.push({name: 'home'})

      }).catch(err => {
        this.loading = false;

        this.errors = err.response.data.errors;
      });
    },
    login() {
      this.loading = true;
      requests.login(this.form).then(() => {
        this.loading = false;
        this.$router.push({name: 'home'});
      }).catch(err => {
        console.log(err)
        this.loading = false;
        this.errors = err.response.data.data.errors;
      })
    },
    showPassword() {
      if (!this.loading) {
        let obj = document.getElementById('password_field');
        obj.type = 'text';
      }
    },
    hidePassword() {
      let obj = document.getElementById('password_field');
      obj.type = 'password';
    }
  },
  mounted() {
    console.log('mounted')
    console.log(this.$store.state.auth)
    if (this.$store.state.auth.authorized)
      this.$router.push({name: 'home'})
  }
  }
</script>

<style scoped>
.error_form {
  border-bottom: 1px solid red !important;
}

.error_form input::placeholder {
  color: red !important;
  opacity: 0.5;
}

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
  cursor: pointer;
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
