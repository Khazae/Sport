<template>
  <div class="budget_file">
    <div class="budget_text">
      <img src="../assets/pdfIcon.svg" alt="Pdf" />
      <div class="budget_text_content">
        <div class="budget_title_content">
          <div class="budget_text_content_title">{{ title }}</div>
          <div class="budget_text_content_desc">(Примечания)</div>
        </div>
        <span class="budget_text_content_data">{{
          $dayjs(date).format("DD.MM.YYYY")
        }}</span>
      </div>
    </div>
    <a
      @click.prevent="downloadFile"
      style="cursor: pointer"
      target="_blank"
      class="budget_link"
      >Скачать <img src="../assets/downloadIcon.svg" alt="Download"
    /></a>
  </div>
</template>

<script>
export default {
  props: ["title", "date", "file"],
  methods: {
    downloadFile() {
      window.open(process.env.VUE_APP_BACKEND_URL + this.file, "_blank");
    },
  },
};
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
  color: var(--color-black);
}

.budget_text_content_desc {
  font-size: 18px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  color: var(--color-black);
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
  color: var(--color-black);
}
</style>
