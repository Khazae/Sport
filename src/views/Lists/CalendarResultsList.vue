<template>
  <div class="personal_right_block">
    <div class="table_wrapper">
      <div class="table_filter_content">
        <div class="table_aside_input_content">
          <img src="../../assets/lcIcon.svg" alt="Search" />
          <input
            type="text"
            class="table_aside_input"
            @keyup.enter="keyEnter"
            v-model="filters.search"
          />
        </div>

        <div class="table_filter_content_btn">
          <button class="table_filter_content_button">
            <img src="../../assets/filter.svg" alt="" /> Фильтры
          </button>
        </div>
      </div>
      <div class="table">
        <div class="tableRow tableHeader row">
          <span class="tableCell"
            ><input type="checkbox" class="tableCheckbox"
          /></span>
          <span class="tableCell">Дата</span>
          <span class="tableCell">Соревнования</span>
          <span class="tableCell">Положения</span>
          <span class="tableCell">Протоколы</span>
          <span class="tableCell">Статус</span>
          <span class="tableCell">Трансляция</span>
        </div>

        <div
          class="tableRow row body"
          v-for="item in list"
          :key="'athlete_' + item.id"
        >
          <span class="tableCell"
            ><input type="checkbox" class="tableCheckbox"
          /></span>
          <span class="tableCell">{{
            $dayjs(item.date_time).format("DD.M.YYYY")
          }}</span>
          <span class="tableCell"> {{ item.title }}</span>

          <span class="tableCell tableLink"
            ><a
              style="cursor: pointer"
              @click.prevent="downloadFile(item.state)"
              >PDF</a
            ></span
          >
          <span class="tableCell tableLink"
            ><a
              style="cursor: pointer"
              @click.prevent="downloadFile(item.protocol)"
              >PDF</a
            ></span
          >

          <span class="tableCell"> {{ getStatus(item.status) }}</span>
          <span class="tableCell">
            <div
              class="tableLive"
              v-if="item.link"
              style="cursor: pointer"
              @click="openLink(item.link)"
            >
              <img src="../../assets/live.svg" alt="Live" />Live
            </div></span
          >
        </div>
      </div>
    </div>
    <div class="tablePagination">
      <div class="tablePaginationCount">
        Показать строк: <span>10</span>
        <img src="../../assets/arrowDown2.svg" alt="" />
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
        Следующая страница <img src="../../assets/arrowRight.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import PaginationComponent from "@/components/Pagination";
import requests from "@/api/requests";

export default {
  name: "CalendarResultsList",
  components: { PaginationComponent },
  data() {
    return {
      page: 1,
      last_page: null,
      filters: {
        search: null,
        paginate: 10,
      },
      loading: false,
      list: [],
    };
  },
  methods: {
    keyEnter() {
      this.dropList();
      this.getList();
    },
    dropList() {
      this.page = 1;
      this.list = [];
      this.last_page = null;
    },
    getList() {
      this.loading = true;
      let form = {
        page: this.page,
        ...this.filters,
      };
      requests.getCalendarResults(form).then((res) => {
        this.list = res.data;
        this.last_page = res.last_page;
        this.loading = false;
      });
    },
    openLink(link) {
      window.open(link, "_blank");
    },
    downloadFile(file) {
      window.open(process.env.VUE_APP_BACKEND_URL + file, "_blank");
    },
    getStatus(status) {
      let res = "";
      switch (status) {
        case 1:
          res = "Ожидается";
          break;
        case 2:
          res = "Проходит";
          break;
        case 3:
          res = "Отменен";
          break;
        case 4:
          res = "Завершен";
          break;

        default:
          break;
      }
      return res;
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
  },
  mounted() {
    this.getList();
  },
};
</script>

<style scoped>
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
</style>
