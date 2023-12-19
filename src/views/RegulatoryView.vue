<template>
  <div class="development_plan_wrapper">
    <HeaderTitle title="Нормативные документы "/>
    <div class="container">
      <div class="development_plan_content">
        <div class="development_plan_items">
          <div class="development_plan_item" v-for="file in list " :key="'file_'+file.id" >
            <BudgetFile :title="file.title" :file="file.file" :date="file.date_time"/>
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
      list: [],
      loading: false
    }
  },
  methods: {
    getList() {
      this.loading = true
      requests.getFiles({type: 1}).then(res => {
        this.list = res
      })
    }
  },
  mounted() {
    this.getList()
  }
};
</script>

<style scoped>
.development_plan_wrapper {
  padding-bottom: 120px;
  margin-top: 97px;
}

.development_plan_content {
  width: 100%;
  max-width: 970px;
}

.development_plan_item {
  margin-bottom: 32px;
}
</style>
