<template>
  <div class="vacancies_wrapper littleVacanciesWrapper">
    <HeaderTitle title="Вакансии" />
    <div class="container">
      <div class="vacancies_content">
        <div class="vacancies_items">
          <div class="vacancies_item">
            <div class="vacancies_item_text_content">
              <div class="vacancies_item_text">
                <h3 class="vacancies_item_text_title">Должность</h3>
                <span class="vacancies_item_text_employment"
                  >Полная занятость</span
                >
              </div>
              <div class="vacancies_item_price">
                675 000 - 800 000 ₸ на руки
              </div>
              <p class="vacancies_item_desc">
                Руководит производственной, административно-хозяйственной и
                финансово-экономической деятельностью организации, обеспечивает
                исполнение принимаемых решений, сохранность и эффективное
                использование имущества организации, содержащегося на его
                балансе, а также финансово-хозяйственные результаты ее
                деятельности, определяет политику
              </p>
              <div class="vacanciesButton">
                <a href="#" class="link"
                  ><div class="link__text">
                    Подробнее
                    <svg
                      width="32"
                      height="8"
                      viewBox="0 0 32 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64644L28.1716 0.464464C27.9763 0.269202 27.6597 0.269202 27.4645 0.464464C27.2692 0.659726 27.2692 0.976308 27.4645 1.17157L30.2929 4L27.4645 6.82842C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.73079 27.9763 7.73079 28.1716 7.53553L31.3536 4.35355ZM1 4.5L31 4.5L31 3.5L1 3.5L1 4.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="vacancies_item">
            <div class="vacancies_item_text_content">
              <div class="vacancies_item_text">
                <h3 class="vacancies_item_text_title">Должность</h3>
                <span class="vacancies_item_text_employment"
                  >Частичная занятость</span
                >
              </div>
              <div class="vacancies_item_price">
                675 000 - 800 000 ₸ на руки
              </div>
              <p class="vacancies_item_desc">
                Руководит производственной, административно-хозяйственной и
                финансово-экономической деятельностью организации, обеспечивает
                исполнение принимаемых решений, сохранность и эффективное
                использование имущества организации, содержащегося на его
                балансе, а также финансово-хозяйственные результаты ее
                деятельности, определяет политику
              </p>
              <div class="vacanciesButton">
                <a href="#" class="link"
                  ><div class="link__text">
                    Подробнее
                    <svg
                      width="32"
                      height="8"
                      viewBox="0 0 32 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64644L28.1716 0.464464C27.9763 0.269202 27.6597 0.269202 27.4645 0.464464C27.2692 0.659726 27.2692 0.976308 27.4645 1.17157L30.2929 4L27.4645 6.82842C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.73079 27.9763 7.73079 28.1716 7.53553L31.3536 4.35355ZM1 4.5L31 4.5L31 3.5L1 3.5L1 4.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="vacancies_about">
          <div class="vacancies_about_title">
            Для получения подробной информации о вакантных должностях:
          </div>
          <div class="vacancies_about_desc">
            <div class="vacancies_about_desc_name">
              Ермагамбетова Айна Бакитовна
            </div>
            <div class="vacancies_about_desc_status">
              руководитель отдела кадровой работы и документации
            </div>
            <div class="vacancies_about_desc_contacts">
              <p>e-mail: <a href="#">sabrinas_09@mail.ru</a></p>
              <p>Телефон: <a href="#">8702 350 18 27</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "../components/HeaderTitle.vue";
export default {
  components: { HeaderTitle },
};
</script>

<style scoped>
.vacancies_items {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  margin-bottom: 80px;
}

.vacancies_item {
  width: 100%;
  max-width: 571px;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 4px;
}

.vacancies_item_text_employment {
  color: #007aff;
  background-color: #007aff33;
  padding: 8px 12px;
  border-radius: 50px;
}

.vacancies_item_text_title {
  color: var(--color-black);
  font-size: 32px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
}

.vacancies_item_text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.vacancies_item_price {
  font-size: 18px;
  font-weight: 500;
  color: var(--color-black);
  font-family: "Inter", sans-serif;
  margin-bottom: 16px;
}

.vacancies_item_desc {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #26262699;
  font-family: "Inter", sans-serif;
}

.vacanciesButton {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}

.vacancies_about {
  width: 100%;
  max-width: 570px;
}

.vacancies_about_title {
  font-size: 22px;
  line-height: 32px;
  font-weight: 500;
  color: var(--color-black);
  font-family: "Inter", sans-serif;
  margin-bottom: 24px;
}

.vacancies_about_desc_name {
  font-size: 18px;
  font-weight: 400;
  color: var(--color-black);
  font-family: "Inter", sans-serif;
  margin-bottom: 12px;
}

.vacancies_about_desc_status {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-family: "Inter", sans-serif;
  color: #7d7d7d;
}

.vacancies_about_desc_status {
  margin-bottom: 12px;
}

.vacancies_about_desc_contacts {
  font-size: 18px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
}
.vacancies_about_desc_contacts p {
  color: var(--color-black);
  margin-bottom: 5px;
}

.vacancies_about_desc_contacts a {
  color: #007aff;
}
</style>
