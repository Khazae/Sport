<template>
  <div class="structure_wrapper bottomWrapper">
    <HeaderTitle title="Организационная структура 2023" />
    <div class="container">
      <div class="structure_content">
        <img
          src="../assets/structure.png"
          class="structure_content_img"
          alt="Structure"
        />
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
.structure_content_img {
  width: 100%;
  max-width: 1170px;
  height: 829px;
}
</style>
