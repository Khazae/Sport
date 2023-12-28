<template>
  <div class="wrapperCalendar">
    <HeaderTitle title="Календарь и результаты"/>
    <div class="container">
      <div class="container">
        <div class="calendarContent">
          <div class="calendar_left_block">
            <div class="calendar_aside">
              <div class="calendar_aside_input_content">
                <img src="../assets/search.svg" alt="Search"/>
                <input
                    type="text"
                    class="calendar_aside_input"
                    placeholder="Введите ID"
                    v-model="filters.id"
                    v-on:keyup.enter="dateOrder()"
                />
              </div>
              <ul class="calendar_aside_list">
                <li><a href="#">Вид спорта</a></li>
                <li><a href="#">ID спорстмена</a></li>
                <li><a href="#">Категория</a></li>
                <li><a href="#">Класс</a></li>
                <li><a href="#">Уровень</a></li>
              </ul>
              <div class="chips_button_content">
                <button class="chip_button " :class="{'chip_button_active':filters.type==1}"
                        :disabled="loading"
                        type="click" @click="setType(1)">
                  Международный
                </button>
                <button class="chip_button" :class="{'chip_button_active':filters.type==2}" type="click"
                        :disabled="loading"
                        @click="setType(2)">
                  Республиканский
                </button>
              </div>
            </div>
          </div>
          <div class="calendar_right_block">
            <div class="table">
              <div class="tableRow tableHeader row" style="column-gap: 24px; padding-left: 0">
                                <span class="tableCell tableDate"
                                ><img src="../assets/dateIcon.svg" alt="" @click="dateOrder()" style="cursor: pointer"/> По дате</span
                                >
                <span class="tableCell">Соревнования</span>
                <span class="tableCell">Положения</span>
                <span class="tableCell">Протоколы</span>
                <span class="tableCell" @click="dateOrder()"
                >Статус
                  <img src="../assets/arrowDown2.svg" alt=""
                  />
                </span>
                <span class="tableCell">Трансляция</span>
              </div>

              <div class="tableRow row body" v-for="item in list" :key="'result_id_'+item.id">
                <span class="tableCell">{{ $dayjs(item.date_time).format('DD.M.YYYY') }}</span>
                <span class="tableCell">{{ item.title }}</span>
                <span class="tableCell tableLink"><div style="cursor: pointer;color: blue;text-decoration: underline"
                                                       @click="downloadFile(item.state)">PDF</div></span>
                <span class="tableCell tableLink"><div style="cursor: pointer;color: blue;text-decoration: underline"
                                                       @click="downloadFile(item.protocol)">PDF</div></span>
                <template v-if="item.status==1">
                                    <span class="tableCell tableStatus">
                                      <img src="../assets/statusPanding.svg"/>
                                      Ожидается
                                    </span>
                </template>
                <template v-else-if="item.status==2">
                                    <span class="tableCell tableStatus">
                                      <img src="../assets/statusSuccess.svg"/>Проходит
                                    </span>
                </template>
                <template v-else-if="item.status==3">
                                    <span class="tableCell tableStatus">
                                      <img src="../assets/statusError.svg"/>Отменен
                                    </span>
                </template>
                <template v-else-if="item.status==4">
                                    <span class="tableCell tableStatus">
                                      <img src="../assets/statusLock.svg"/>Завершен
                                    </span>
                </template>

                <span class="tableCell">
                                  <div class="tableLive" v-if="item.link" style="cursor: pointer;"
                                       @click="openLink(item.link)">
                                    <img src="../assets/live.svg" alt="Live"/>Live
                                  </div>
                            </span>
              </div>
            </div>
            <div class="tablePagination">
              <!-- <div class="tablePaginationCount">
                Показать строк: <span>10</span>
                <img src="../assets/arrowDown2.svg" alt=""/>
              </div> -->

              <pagination-component :current="page" :last="last_page" v-if="last_page>1"
                                    @handleLoad="handleLoad"/>
              <div class="tablePaginationNextPage" @click="nextPage()">
                <!-- Следующая страница <img src="../assets/arrowRight.svg" alt=""/> -->
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
import PaginationComponent from "@/components/Pagination";
import requests from "@/api/requests";

export default {
  components: {PaginationComponent, HeaderTitle},
  data() {
    return {
      list: [],
      page: 1,
      last_page: null,
      loading: false,
      filters: {
        type: null,
        status: null,
        paginate: 10,
        id: null
      },
      order: {
        date_time: 'DESC'
      },
      statusFilter: [
        {
          value: 1,
          label: 'Ожидается'
        },
        {
          value: 2,
          label: 'Проходит'
        },
        {
          value: 3,
          label: 'Отменен'
        },
        {
          value: 4,
          label: 'Завершен'
        },

      ]
    };

  },
  methods: {
    downloadFile(file) {
      window.open(process.env.VUE_APP_BACKEND_URL + file, '_blank')
    },
    dateOrder() {
      this.list = [];
      this.date_time = this.date_time == 'ASC' ? 'DESC' : 'ASC';
      this.getList();

    },
    setType(type) {
      if (this.filters.type == type)
        this.filters.type = null;
      else
        this.filters.type = type;
      this.$nextTick(() => {
        this.getList();
      });
    },
    getList() {
      this.loading = true;
      requests.getCalendarResults({page: this.page, ...this.filters}).then(res => {
        this.loading = false;
        this.list = res.data;
        this.last_page = res.last_page;
      });
    },
    handleLoad(page) {
      this.page = page;
      this.$nextTick(() => {
        this.getList();
      });
    },
    nextPage() {
      this.page += 1;
      this.$nextTick(() => {
        this.getList();
      });
    },
    openLink(link) {
      window.open(link, '_blank');
    }
  },
  mounted() {
    this.getList();
  }

};
</script>

<style scoped>
.wrapperCalendar {
  margin-top: 97px;
  margin-bottom: 120px;
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
}

.row {
  grid-template-columns: 110px 225px 83px 83px 1fr 100px;
}

.body {
  background-color: #fff;
  padding: 11px 24px;
  margin-bottom: 10px;
}

.calendarContent {
  display: flex;
  gap: 30px;
}

.calendar_left_block {
  width: 100%;
  max-width: 270px;
}

.calendar_right_block {
  width: 100%;
  max-width: 870px;
}

.calendar_aside {
  background-color: #fff;
  padding: 24px 16px 24px 24px;
}

.calendar_aside_list li {
  margin-bottom: 28px;
}

.calendar_aside_list li:last-child {
  margin-bottom: 16px;
}

.calendar_aside_list li a {
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

.tableHeader .tableCell {
  font-size: 14px;
  font-family: "Inter", sans-serif;
  color: #575f6e;
}

.body .tableCell {
  font-size: 18px;
  font-family: "Inter", sans-serif;
  color: var(--color-black);
}

.tableLock .tableCell {
  color: #9a9ea5;
}

.calendar_aside_input_content {
  border: 1px solid #caced4;
  padding: 4px;
  display: flex;
  position: relative;
  margin-bottom: 28px;
}

.calendar_aside_input_content img {
  width: 24px;
  height: 24px;
  z-index: 100;
}

.calendar_aside_input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  padding-left: 30px;
  padding-right: 8px;
}

.calendar_aside_input::placeholder {
  font-family: "Inter", sans-serif;
}

.chips_button_content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 175px;
}

.chip_button {
  font-size: 18px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  border: 1px solid #caced4;
  border-radius: 20px;
  color: var(--color-black);
  padding: 8px 12px;
  cursor: pointer;
  background-color: #fff;
}

.chip_button_active {
  background-color: #007aff;
  color: #ffffff;
  border: none;
}

.tablePagination {
  display: flex;
  align-items: center;
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
</style>
