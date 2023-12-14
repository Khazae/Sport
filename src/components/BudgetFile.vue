<template>
  <div class="budget_file">
    <div class="budget_text">
      <img src="../assets/pdfIcon.svg" alt="Pdf" />
      <div class="budget_text_content">
        <div class="budget_title_content">
          <div class="budget_text_content_title">Наименование документа</div>
          <div class="budget_text_content_desc">(Примечания)</div>
        </div>
        <span class="budget_text_content_data">5.11.2023</span>
      </div>
    </div>
    <a href="#" class="budget_link"
      >Скачать <img src="../assets/downloadIcon.svg" alt="Download"
    /></a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.budget_text {
  display: flex;
  align-items: flex-start;
}

.budget_text_content {
  margin-left: 12px;
}
.budget_title_content {
  display: flex;
}

.budget_text_content_title {
  font-size: 18px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  color: #262626;
}

.budget_text_content_desc {
  font-size: 18px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  color: #262626;
  margin-left: 12px;
}

.budget_text_content_data {
  font-size: 14px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  color: #26262699;
}

.budget_file {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.budget_link {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  color: #262626;
}
</style>
