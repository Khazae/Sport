<template>
  <div class="personal_right_block">
    <div class="table_wrapper">
      <div class="table_filter_content">
        <div class="table_aside_input_content">
          <img src="../../assets/lcIcon.svg" alt="Search"/>
          <input
              type="text"
              class="table_aside_input"
              @keyup.enter="keyEnter"
              v-model="filters.search"
          />
        </div>

        <div class="table_filter_content_btn">
          <button class="table_filter_content_button">
            <img src="../../assets/filter.svg" alt=""/> Фильтры
          </button>
        </div>
      </div>
      <div class="table">
        <div
            class="tableRow tableHeader"
            :class="!_accepted ? 'row' : 'rowTwo'"
        >
          <span class="tableCell"
          ><input type="checkbox" class="tableCheckbox"
          /></span>
          <span class="tableCell">ФИО</span>
          <span class="tableCell">Локация</span>
          <span class="tableCell">ID</span>
          <span class="tableCell">Весовая категория</span>
          <span class="tableCell">Вид соревнований</span>
          <span class="tableCell">Класс</span>
          <span class="tableCell" v-if="_accepted">Занял место</span>
          <span class="tableCell" v-if="_accepted == false"
          >Принять/отклонить</span
          >
        </div>

        <div
            class="tableRow body"
            v-for="item in list"
            :key="'athlete_' + item.id"
            :class="!_accepted ? 'row' : 'rowTwo'"
        >
          <span class="tableCell"
          ><input type="checkbox" class="tableCheckbox"
          /></span>

          <span class="tableCell">{{ item.athlete.fio }}</span>
          <span class="tableCell">{{ item.athlete.location }}</span>
          <span class="tableCell">{{ item.athlete.personal_id }}</span>
          <span class="tableCell">{{ item.athlete.category }}</span>

          <span class="tableCell"> {{ item.athlete.type }}</span>
          <span class="tableCell"> {{ item.athlete.class }} </span>

          <span class="tableCell" v-if="_accepted == false"
          ><div class="accept_decline_content">
              <button
                  class="accept_button"
                  @click="applicationAction(1, item.id)"
              >
                Принять
                <img src="../../assets/accept.svg" alt=""/>
              </button>
              <button
                  class="decline_button"
                  @click="applicationAction(0, item.id)"
              >
                Отклонить

                <img src="../../assets/decline.svg" alt=""/>
              </button>
            </div>
          </span>
          <span class="tableCell" v-if="_accepted">{{item.place}}</span>
          <span class="tableCell" v-if="_accepted">
            <div>
              <div class="popover">
                <img
                    src="../../assets/options.svg"
                    class="table_options"
                    alt=""
                />
                <div class="menu">
                  <ul class="menu_ul">
                    <li class="menu_li menu_form">Сформировать протокол</li>
                    <li class="menu_li menu_pencil" @click="showModal(item)">
                      <img src="../../assets/pencil.svg" alt=""/> Редактировать
                    </li>
                    <li class="menu_li menu_delete">
                      <img src="../../assets/delete.svg" alt=""/> Удалить
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
    <div class="tablePagination">
      <div class="tablePaginationCount">
        Показать строк: <span>10</span>
        <img src="../../assets/arrowDown2.svg" alt=""/>
      </div>

      <pagination-component
          :current="page"
          :last="last_page"
          v-if="last_page > 1"
          @handleLoad="handleLoad"
      />
      <div
          class="tablePaginationNextPage"
          @click="nextPage()"
          v-if="last_page > 1"
      >
        Следующая страница <img src="../../assets/arrowRight.svg" alt=""/>
      </div>
    </div>
    <modal-component ref="modal" @close="closeModal">
      <div class="form_content personal_form" v-if="selectedItem">

        <div class="form_group">
          <input type="text" class="form_input" placeholder="ФИО" v-model="selectedItem.athlete.fio" disabled/>
        </div>
        <div class="form_group">
          <input type="number" class="form_input" placeholder="ID портсмена" v-model="selectedItem.athlete.personal_id"
                 disabled/>
        </div>

        <div class="form_group">
          <input
              type="text"
              class="form_input"
              placeholder="Область, регион, город"
              v-model="selectedItem.athlete.location"
              disabled
          />
        </div>
        <div class="form_group">
          <input
              type="text"
              class="form_input"
              placeholder="Весовая категория"
              v-model="selectedItem.athlete.category"
              disabled
          />
        </div>
        <div class="form_group">
          <v-select
              :options="vid"
              class="form_input"
              placeholder="Вид соревнований"
              v-model="selectedItem.athlete.type"
              disabled
              :reduce="itm => itm.value"
          ></v-select>

        </div>
        <div class="form_group">
          <input type="text" class="form_input" placeholder="Класс" v-model="selectedItem.athlete.class" disabled
          />
        </div>
        <div class="form_group">
          <input type="text" class="form_input" placeholder="Класс" v-model="selectedItem.calendar_results.title"
                 disabled
          />
        </div>
        <div class="form_group">
          <input type="number" class="form_input" placeholder="Место" v-model="form.place"
                 :class="{'error_form':errors.place}"
          />
        </div>
        <div style="display: flex;justify-items: center;justify-content: center">
          <Button class="button" @click="savePlace()">Сохранить</Button>
        </div>
      </div>
    </modal-component>
  </div>
</template>

<script>
import PaginationComponent from "@/components/Pagination";
import requests from "@/api/requests";
import ModalComponent from "@/components/ModalComponent";
import vSelect from "vue-select";
import Button from "@/components/Button";

export default {
  name: "ApplicationsList",
  props: {
    _accepted: {
      default: false,
    },
  },
  components: {ModalComponent, PaginationComponent, vSelect, Button},
  data() {
    return {
      page: 1,
      last_page: null,
      loading: false,
      filters: {
        search: null,
        paginate: 10,
        accepted: this._accepted ? 1 : 0,
      },
      list: [],
      form: {},
      selectedItem: null,
      vid: [
        {
          label: 'Международный',
          value: '1'
        },
        {
          label: 'Республиканский',
          value: '2'
        },
      ],
      errors: []
    };
  },
  methods: {
    showModal(item) {
      this.selectedItem = item;
      this.form.id = item.id
      this.$refs.modal.showModal()
    },
    closeModal() {
      this.newForm()
      this.selectedItem = null
      this.$refs.modal.hideModal()
    },
    newForm() {
      this.form = {
        place: null,
        id: null
      }
    },
    savePlace() {
      this.loading = true
      this.errors = []
      requests.setPlace(this.form).then(() => {
        this.getList()
        this.closeModal()
        this.$toast('Успешно')
      }).catch(err => {
        this.errors = err.response.data.errors
        this.loading = false
      })
    },
    applicationAction(type, id) {
      this.loading = true;
      requests.applicationAction({accepted: type}, id).then(() => {
        this.loading = false;
        this.getList();
      });
    },
    getList() {
      this.loading = true;
      let form = {
        page: this.page,
        ...this.filters,
      };
      requests.applicationList(form).then((res) => {
        this.list = res.data;
        this.last_page = res.last_page;
        this.loading = false;
      });
    },
    downloadFile(file) {
      window.open(process.env.VUE_APP_BACKEND_URL + file, "_blank");
    },
    handleLoad(page) {
      if (!this.loading && this.page !== page) {
        this.page = page;
        this.$nextTick(() => {
          this.getList();
        });
      }
    },
    nextPage() {
      if (!this.loading && this.page !== this.last_page) {
        this.page += 1;
        this.$nextTick(() => {
          this.getList();
        });
      }
    },
    keyEnter() {
      this.dropList();
      this.getList();
    },
    dropList() {
      this.page = 1;
      this.list = [];
      this.last_page = null;
    },
  },
  mounted() {
    this.newForm()
    this.getList();
  },
};
</script>

<style scoped>
.error_form {
  border-bottom: 1px solid red !important;
}

.wrapperPersonal {
  height: 100%;
  padding-top: 109px;
  padding-bottom: 120px;
  background-color: var(--color-grey);
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
  background-image: url("../../assets/oiBg2.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 50px;
  left: 0;
  z-index: -1;
}

.table_wrapper {
  background-color: #f8f8f8;
  padding: 43px 0 55px 15px;
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
  grid-template-columns: 30px repeat(7, 1fr) 60px 20px;
}

.rowTwo {
  grid-template-columns: 30px repeat(7, 1fr) 60px 20px;
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
  margin-right: 20px;
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
  margin-right: 15px;
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

.accept_decline_content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.accept_button {
  display: flex;
  align-items: center;
  color: #007aff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.accept_button img {
  width: 12px;
  height: 12px;
  margin-left: 4px;
}

.decline_button {
  display: flex;
  align-items: center;
  color: #ff3b30;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.decline_button img {
  width: 12px;
  height: 12px;
  margin-left: 4px;
}

.table_options {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.popover {
  position: relative;
  display: inline-block;
}

.popover .menu {
  width: 215px;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--color-bg-white);
  box-shadow: 0px 5px 10px 0px #00000026;
  padding: 16px;
  min-width: 120px;
  border-radius: 4px;
  z-index: 1;
}

.popover:hover .menu {
  display: block;
}

.menu_ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu_li {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 22.5px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.menu_li img {
  width: 18px;
  height: 18px;
  margin-right: 3.5px;
}

.menu_form {
  color: #007aff;
}

.menu_pencil {
  color: var(--color-black);
}

.menu_delete {
  color: #ff3b30;
}

.form_group {
  margin-bottom: 36px;
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
</style>
