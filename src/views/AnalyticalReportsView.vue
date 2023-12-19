<template>
  <div class="budget_wrapper littleInformationAboutWrapper">
    <HeaderTitle
        title="Аналитические отчеты и доклады
о проделанной работе"
    />
    <div class="container">
      <div class="budget_content">
        <div class="budget_items" v-for="(item,index) in list" :key="'year_list_'+index">
          <h3 class="budget_title">{{ index }} год</h3>
          <div class="budget_item" v-for="date in item" :key="'date_item_'+date.id">
            <BudgetFile :file="date.file" :title="date.title" :date="date.date_time"/>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import BudgetFile from "@/components/BudgetFile.vue";
import HeaderTitle from "../components/HeaderTitle.vue";
import requests from "@/api/requests";

export default {
  components: {BudgetFile, HeaderTitle},
  data() {
    return {
      list: []
    }
  },
  methods: {
    getList() {

      requests.getFiles({type: 2}).then(res => {
        this.list = res
      })
    },
  },
  mounted() {
    this.getList()
  }
};
</script>

<style scoped>
.budget_content {
  width: 100%;
  max-width: 970px;
}

.budget_title {
  font-size: 32px;
  font-weight: 500;
  text-transform: uppercase;
  color: #262626;
  font-family: "Inter", sans-serif;
  margin-bottom: 40px;
}

.budget_items {
  margin-bottom: 80px;
}

.budget_item:last-child {
  margin-bottom: 0;
}

.budget_item {
  margin-bottom: 32px;
}

.budget_item:last-child {
  margin-bottom: 0;
}
</style>
