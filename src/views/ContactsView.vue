<template>
  <div class="schedule_personal_wrapper littleScheduleWrapper">
    <HeaderTitle title="Контакты" />
    <div class="container">
      <div class="schedule_personal_content">
        <div class="schedule_personal_content_contact">
          <div class="schedule_personal_content_contact_title">
            «Министерство культуры и спорта — Адалдық алаңы» Телефон доверия 8
            707 974 03 23
          </div>
          <div class="schedule_personal_content_contact_desc">
            «Центр спортивной подготовки для лиц с ограниченными физическими
            возможностями» Комитета по делам спорта и физической культуры
            Министерства культуры и спорта Республики Казахстанв рамках проекта
            «Адалдық алаңы»
          </div>

          <div class="schedule_personal_content_contact_schedule_user">
            <div class="schedule_personal_content_contact_schedule_user_title">
              Махамбетов Мейрамбек Жанбулатович
            </div>
            <div class="schedule_personal_content_contact_schedule_user_status">
              Директор
            </div>
            <div class="schedule_personal_content_contact_schedule_user_number">
              Телефон: <a href="#">8 7172 620-639</a>
            </div>
            <div
              class="schedule_personal_content_contact_schedule_user_address"
            >
              010000 г. Астана,пр-т Кабанбай батыра 11/5, БЦ «Нұрлы Орда», 3
              этаж, каб. 315а
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "../components/HeaderTitle.vue";

export default { components: { HeaderTitle } };
</script>

<style scoped>
.schedule_personal_wrapper {
  padding-bottom: 202px !important;
}
.schedule_personal_content_contact_title {
  width: 100%;
  max-width: 602px;
  font-size: 22px;
  font-weight: 500;
  line-height: 30px;
  color: #000000;
  margin-bottom: 24px;
  font-family: "Inter", sans-serif;
}

.schedule_personal_content_contact_desc {
  width: 100%;
  max-width: 868px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: var(--color-black);
  font-family: "Inter", sans-serif;
  margin-bottom: 40px;
}

.schedule_personal_content_contact_schedule {
  display: flex;
}

.schedule_personal_content_contact_schedule_user div {
  font-family: "Inter", sans-serif;
  margin-bottom: 12px;
}

.schedule_personal_content_contact_schedule_user_title {
  color: var(--color-black);
  font-size: 22px;
  font-weight: 500;
}

.schedule_personal_content_contact_schedule_user_status {
  font-weight: 400;
  color: #7d7d7d;
  font-size: 14px;
}

.schedule_personal_content_contact_schedule_user_address {
  width: 100%;
  max-width: 352px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: var(--color-black);
}

.schedule_personal_content_contact_schedule_user_number {
  font-size: 18px;
  font-weight: 400;
  color: var(--color-black);
}

.schedule_personal_content_contact_schedule_user_number a {
  color: #007aff;
}
</style>
