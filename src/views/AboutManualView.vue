<template>
  <div class="about_manual_wrapper littleManualWrapper">
    <HeaderTitle title="Сведения о руководстве" />
    <div class="container">
      <div class="about_manual_content">
        <div class="about_manual_items">
          <div class="about_manual_item">
            <img
              src="../assets/aboutManual.png"
              class="about_manual_item_image"
              alt=""
            />
            <div class="about_manual_text">
              <div class="about_manual_text_title">Фамилия И.О.</div>
              <div class="about_manual_text_desc">Титул</div>
            </div>
          </div>

          <div class="about_manual_item">
            <img
              src="../assets/aboutManual.png"
              class="about_manual_item_image"
              alt=""
            />
            <div class="about_manual_text">
              <div class="about_manual_text_title">Фамилия И.О.</div>
              <div class="about_manual_text_desc">Титул</div>
            </div>
          </div>

          <div class="about_manual_item">
            <img
              src="../assets/aboutManual.png"
              class="about_manual_item_image"
              alt=""
            />
            <div class="about_manual_text">
              <div class="about_manual_text_title">Фамилия И.О.</div>
              <div class="about_manual_text_desc">Титул</div>
            </div>
          </div>

          <div class="about_manual_item">
            <img
              src="../assets/aboutManual.png"
              class="about_manual_item_image"
              alt=""
            />
            <div class="about_manual_text">
              <div class="about_manual_text_title">Фамилия И.О.</div>
              <div class="about_manual_text_desc">Титул</div>
            </div>
          </div>

          <div class="about_manual_item">
            <img
              src="../assets/aboutManual.png"
              class="about_manual_item_image"
              alt=""
            />
            <div class="about_manual_text">
              <div class="about_manual_text_title">Фамилия И.О.</div>
              <div class="about_manual_text_desc">Титул</div>
            </div>
          </div>

          <div class="about_manual_item">
            <img
              src="../assets/aboutManual.png"
              class="about_manual_item_image"
              alt=""
            />
            <div class="about_manual_text">
              <div class="about_manual_text_title">Фамилия И.О.</div>
              <div class="about_manual_text_desc">Титул</div>
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
.about_manual_items {
  display: flex;
  flex-wrap: wrap;
  gap: 81px 31px;
}

.about_manual_item {
  width: 100%;
  max-width: 370px;
}

.about_manual_item_image {
  width: 100%;
  max-width: 370px;
  height: 370px;
  margin-bottom: 24px;
}

.about_manual_text_title {
  font-size: 24px;
  font-weight: 500;
  color: var(--color-black);
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.about_manual_text_desc {
  font-size: 18px;
  font-weight: 400px;
  color: var(--color-black);
  font-family: "Inter", sans-serif;
}
</style>
