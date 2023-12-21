<template>
  <div class="wrapperPersonal littleAreaWrapper">
    <div class="personalContent">
      <div class="personal_left_block">
        <div class="personal_aside">
          <div class="personal_avatar_content">
            <img
              src="../assets/avatar.png"
              class="personal_avatar_content_avatar"
              alt="Avatar"
            />
            <div
              class="personal_avatar_content_text"
              v-if="$store.state.user.user"
            >
              <div class="personal_avatar_content_text_title">
                {{ $store.state.user.user.name }}
              </div>
              <div class="personal_avatar_content_text_status">
                {{ $store.state.user.user.role_name }}
              </div>
            </div>
            <img src="../assets/arrowDown.svg" alt="Arrow" />
          </div>

          <div class="personal_aside_navigation" v-if="$store.state.user.user">
            <ul class="personal_aside_navigation_list">
              <li class="personal_aside_navigation_li" v-if="$store.state.user.user.role_name != 'Судья'">
                <a
                  @click.prevent="selected_tab = 1"
                  class="personal_aside_navigation_link"
                  ><img
                    src="../assets/dashboard.svg"
                    class="personal_aside_navigation_link_img"
                    alt=""
                  />
                  Данные спортсменов</a
                >
              </li>
              <li class="personal_aside_navigation_li">
                <a
                  @click.prevent="selected_tab = 2"
                  class="personal_aside_navigation_link"
                  ><img
                    src="../assets/dashboard.svg"
                    class="personal_aside_navigation_link_img"
                    alt=""
                  />
                  Предстоящие события</a
                >
              </li>
              <li
                class="personal_aside_navigation_li"
                v-if="$store.state.user.user.role_id == 4"
              >
                <a
                  @click.prevent="selected_tab = 3"
                  class="personal_aside_navigation_link"
                  ><img
                    src="../assets/dashboard.svg"
                    class="personal_aside_navigation_link_img"
                    alt=""
                  />
                  Все заявки</a
                >
              </li>
              <li
                class="personal_aside_navigation_li"
                v-if="$store.state.user.user.role_id == 4"
              >
                <a
                  @click.prevent="selected_tab = 4"
                  class="personal_aside_navigation_link"
                  ><img
                    src="../assets/dashboard.svg"
                    class="personal_aside_navigation_link_img"
                    alt=""
                  />
                  Принятые заявки</a
                >
              </li>
            </ul>
          </div>
          <button v-if="$store.state.user.user.role_name != 'Судья'"
            class="personal_aside_button"
            @click="addSportsmenToggle = !addSportsmenToggle"
          >
            <img src="../assets/plus.svg" alt="Plus" /> Добавить спортсменов
          </button>
        </div>
      </div>
      <template v-if="addSportsmenToggle">
        <athlete-list v-if="selected_tab == 1" />
        <calendar-results-list v-if="selected_tab == 2" />
        <applications-list v-if="selected_tab == 3" key="not_accepted" />
        <applications-list
          v-if="selected_tab == 4"
          :_accepted="true"
          key="accepted"
        />
      </template>
      <template v-else>
        <div class="table_wrapper" style="width: 100%">
          <div class="form_content personal_form">
            <h2 class="form_content_title">Добавление спортсмена</h2>
            <div class="form_group">
              <input type="text" class="form_input" placeholder="ФИО" />
            </div>
            <div class="form_group">
              <input
                type="text"
                class="form_input"
                placeholder="Область, регион, город"
              />
            </div>
            <div class="form_group">
              <input
                type="text"
                class="form_input"
                placeholder="Весовая категория"
              />
            </div>
            <div class="form_group">
              <v-select
                :options="vid"
                class="form_input"
                placeholder="Вид соревнований"
              ></v-select>
            </div>
            <div class="form_group">
              <input type="text" class="form_input" placeholder="Класс" />
            </div>
            <div class="form_group input_file_group">
              <input type="file" class="form_file" />
              <div class="input_file_content">
                <img src="../assets/formFile.svg" alt="" />
                Добавить файл
              </div>
            </div>
            <Button class="button">Сохранить</Button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import PaginationComponent from "@/components/Pagination";
import AthleteList from "@/views/Lists/AthleteList";
import CalendarResultsList from "@/views/Lists/CalendarResultsList";
import ApplicationsList from "@/views/Lists/ApplicationsList";
import vSelect from "vue-select";
import Button from "../components/Button.vue";
import "vue-select/dist/vue-select.css";

export default {
  components: {
    ApplicationsList,
    CalendarResultsList,
    AthleteList,
    PaginationComponent,
    vSelect,
    Button,
  },
  data() {
    return {
      selected_tab: 1,
      addSportsmenToggle: true,
      vid: ["Республиканский", "Международный"],
    };
  },
  watch: {
    selected_tab: {
      handler: function () {},
      deep: true,
    },
  },
  methods: {},
};
</script>

<style scoped>
.wrapperPersonal {
  height: 100%;
  padding-top: 109px;
  padding-bottom: 120px;
  background-color: #ebeef3;
}

.littleAreaWrapper {
  position: relative;
  z-index: 100;
  overflow: hidden;
}

.littleAreaWrapper::after {
  content: "";
  width: 100%;
  max-width: 1372px;
  height: 480px;
  background-image: url("../assets/oiBg2.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 50px;
  left: 0;
  z-index: -1;
}

.table_wrapper {
  background-color: #f8f8f8;
  padding: 43px 20px 55px 15px;
  border-radius: 8px;
  margin-right: 28px;
}

.tableRow {
  min-height: 54px;
  display: grid;
  align-items: center;
  padding: 0 24px;
  column-gap: 16px;
}

.tableRow:last-child {
  border-bottom: none;
}
.tableCell {
  display: flex;
  align-items: center;
  font-size: 13px;
  text-overflow: ellipsis;
  line-height: 28px;
  font-weight: 400;
}
.row {
  grid-template-columns: 30px 150px 210px repeat(4, 1fr) 100px;
}

.body {
  background-color: #f5f5f5;
  padding: 11px 15px;
  margin-bottom: 2px;
}

.personalContent {
  display: flex;
  gap: 30px;
}

.personal_left_block {
  width: 100%;
  max-width: 310px;
}

.personal_right_block {
  width: 100%;
}

.personal_aside {
  padding: 0 28px;
}

.personal_aside_list li {
  margin-bottom: 28px;
}

.personal_aside_list li:last-child {
  margin-bottom: 16px;
}
.personal_aside_list li a {
  font-size: 18px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  color: var(--color-black);
}

.tableStatus {
  display: flex;
}

.tableStatus img {
  width: 24px;
  margin-right: 8px;
}

.tableLive {
  padding: 12px 14px;
  border: 1px solid #e50d41;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: #e50d41;
  font-family: "Roboto", sans-serif;
}

.tableLive img {
  width: 12px;
  margin-right: 8px;
}

.tableLink a {
  color: #007aff;
  text-decoration: underline;
}

.tableHeader {
  padding: 31px 15px;
  background-color: #2f80ed1a;
  border-radius: 15px;
}

.tableHeader .tableCell {
  font-size: 15px;
  font-weight: 400;
  line-height: 22.5px;
  font-family: "Poppins", sans-serif;
  color: #000000;
}

.body .tableCell {
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  color: var(--color-black);
}

.tableLock .tableCell {
  color: #9a9ea5;
}

.tablePagination {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  margin-top: 47px;
}

.tablePaginationPages {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 16px;
}

.tablePaginationPage {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-black);
  padding: 7px 15.5px;
  cursor: pointer;
}

.tablePaginationCount {
  font-size: 14px;
  font-weight: 400;
  color: #9a9ea5;
  padding: 7px 24px 7px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.tablePaginationCount img {
  width: 24px;
  height: 24px;
  margin-left: 11px;
}

.tablePaginationCount span {
  font-weight: 500;
  color: var(--color-black);
  margin-left: 16px;
}

.tablePaginationNextPage {
  font-size: 14px;
  font-weight: 400;
  color: #9a9ea5;
  margin-left: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.tablePaginationNextPage img {
  width: 24px;
  height: 24px;
  margin-left: 14px;
}

.tablePaginationPageSpace {
  max-width: 47px;
  max-height: 32px;
}

.personal_avatar_content {
  display: flex;
  gap: 23px;
  align-items: center;
  cursor: pointer;
  margin-bottom: 66px;
}

.personal_avatar_content_avatar {
  width: 56px;
  height: 57px;
  border-radius: 50%;
}

.personal_avatar_content_text {
  font-family: "Inter", sans-serif;
  color: #333333;
}

.personal_avatar_content_text_title {
  font-size: 18px;
  font-weight: 500;
}

.personal_avatar_content_text_title_status {
  font-size: 14px;
  font-weight: 400;
}

.personal_aside_navigation {
  padding-left: 20px;
  margin-bottom: 30px;
}

.personal_aside_navigation_list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.personal_aside_navigation_link {
  font-size: 15px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: var(--color-black);
  display: flex;
  align-items: center;
  cursor: pointer;
}

.personal_aside_navigation_link_img {
  width: 24px;
  height: 24px;
  margin-right: 18px;
}

.personal_aside_button {
  width: 100%;
  max-width: 288px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  font-family: "Inter", sans-serifs;
  color: #3d97fc;
  background-color: #d8e3f2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.personal_aside_button img {
  width: 24px;
  height: 24px;
  margin-right: 18px;
}

.table_filter_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: #2f80ed0d;
  padding: 15px 10px;
  border-radius: 4px;
}

.table_aside_input_content {
  width: 100%;
  max-width: 346px;
  height: 39.5px;
  border: 1px solid #caced4;
  padding: 4px;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
  box-shadow: 0px 1px 7px 0px #00000017;
}

.table_aside_input_content img {
  width: 17.5px;
  height: 17.5px;
  z-index: 100;
  margin-left: 10px;
}

.table_aside_input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  padding-left: 35px;
  padding-right: 8px;
  border-radius: 4px;
}

.table_filter_content_button {
  width: 100%;
  max-width: 109px;
  height: 29px;
  display: flex;
  align-items: center;
  padding: 5px 7px;
  border: 1px solid #00000033;
  border-radius: 60px;
  cursor: pointer;
  overflow: hidden;
}

.table_filter_content_button img {
  max-width: 32px;
  max-height: 23px;
}

input[type="checkbox"] {
  border: 2px solid #333333;
  width: 16px;
  height: 16px;
}

.form_input {
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  padding: 5px 0;
  background-color: transparent;
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

.input_file_group {
  width: 100%;
  max-width: 220px;
  height: 52px;
  background-color: rgb(47 128 237 / 29%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 4px;
}

.input_file_content {
  display: flex;
  align-items: center;
  color: rgba(0, 122, 255, 1);
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
}

.input_file_content img {
  width: 24px;
  height: 24px;
  margin-right: 18px;
}

.form_file {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.form_content {
  width: 100%;
  max-width: 417px;
  margin: 0 auto;
}

.form_content_title {
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  font-size: 20px;
  padding-top: 40px;
  padding-bottom: 36px;
}

.button {
  width: 100%;
}
</style>
