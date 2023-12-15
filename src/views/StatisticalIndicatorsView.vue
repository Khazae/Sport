<template>
  <div class="budget_wrapper">
    <HeaderTitle
      title="Статистические показатели 
и результаты деятельности"
    />
    <div class="container">
      <div class="budget_content">
        <div class="budget_items">
          <h3 class="budget_title">2023 год</h3>
          <div class="budget_item">
            <BudgetFile />
          </div>
          <div class="budget_item">
            <BudgetFile />
          </div>
          <div class="budget_item">
            <BudgetFile />
          </div>
          <div class="budget_item">
            <BudgetFile />
          </div>
        </div>

        <div class="budget_items">
          <h3 class="budget_title">2022 год</h3>
          <div class="budget_item">
            <BudgetFile />
          </div>
          <div class="budget_item">
            <BudgetFile />
          </div>
          <div class="budget_item">
            <BudgetFile />
          </div>
          <div class="budget_item">
            <BudgetFile />
          </div>
        </div>

        <div class="budget_items">
          <h3 class="budget_title">2021 год</h3>
          <div class="budget_item">
            <BudgetFile />
          </div>
          <div class="budget_item">
            <BudgetFile />
          </div>
          <div class="budget_item">
            <BudgetFile />
          </div>
          <div class="budget_item">
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
