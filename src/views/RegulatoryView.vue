<template>
  <div class="development_plan_wrapper">
    <HeaderTitle title="Нормативные документы " />
    <div class="container">
      <div class="development_plan_content">
        <div class="development_plan_items">
          <div class="development_plan_item">
            <BudgetFile />
          </div>
          <div class="development_plan_item">
            <BudgetFile />
          </div>
          <div class="development_plan_item">
            <BudgetFile />
          </div>
          <div class="development_plan_item">
            <BudgetFile />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BudgetFile from "@/components/BudgetFile.vue";
import HeaderTitle from "../components/HeaderTitle.vue";

export default { components: { BudgetFile, HeaderTitle } };
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
