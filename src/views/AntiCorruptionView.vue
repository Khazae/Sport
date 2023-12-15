<template>
  <div class="budget_wrapper littleWrapper">
    <HeaderTitle title="Противодействие коррупции" />
    <div class="container">
      <div class="budget_content">
        <p class="budget_content_text">
          Противодействие коррупции является неотъемлемой частью развития
          общества. Правительства мира внедряют строгие антикоррупционные
          политики и законы, направленные на искоренение данного явления.
          Эффективная борьба с коррупцией требует укрепления институтов
          правосудия и налаживания системы надзора. Важным компонентом также
          является образование и просвещение общества по вопросам этики и
          принципов честности. Все участники общества, начиная от граждан и
          предпринимателей до государственных служащих, должны активно
          участвовать в устранении коррупционных проявлений.
        </p>
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

.budget_content_text {
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: var(--color-black);
  font-family: "Inter", sans-serif;
  margin-bottom: 80px;
}
</style>
