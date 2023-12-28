<template>
  <div class="about_wrapper littleWrapper">
    <HeaderTitle title="О нас" />
    <div class="container">
      <div class="about_content">
        <div class="about_left_content">
          <img
            src="../assets/about.png"
            class="about_left_content_img"
            alt="About"
          />
        </div>
        <div class="about_right_content">
          <h3 class="about_title">Добро пожаловать</h3>
          <p class="about_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas
            ultrices. Vestibulum et neque id ex semper varius a sit amet metus.
            Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus
            egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas
            rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum
            placerat ligula posuere, ut rhoncus velit eleifend.
          </p>
        </div>
      </div>

      <div class="about_history">
        <h3 class="about_title">Наша история</h3>
        <p class="about_history_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas.
          Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim
          eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Curabitur sed commodo leo.
          Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere,
          ut rhoncus velit eleifend.
        </p>
        <img
          src="../assets/aboutHistory.png"
          class="about_history_img"
          alt="History"
        />

        <h3 class="about_title">Заголовок</h3>
        <p class="about_history_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas.
          Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim
          eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Curabitur sed commodo leo.
          Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere,
          ut rhoncus velit eleifend.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "../components/HeaderTitle.vue";
export default { components: { HeaderTitle } };
</script>

<style scoped>
.about_wrapper {
  padding-bottom: 73px !important;
}
.about_title {
  font-size: 32px;
  font-weight: 500;
  color: var(--color-black);
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  margin-bottom: 32px;
}

.about_desc {
  font-size: 18px;
  font-weight: 400;
  color: var(--color-black);
  font-family: "Inter", sans-serif;
  line-height: 24px;
}

.about_history_desc {
  font-size: 18px;
  font-weight: 400;
  color: #000000cc;
  font-family: "Inter", sans-serif;
  line-height: 30px;
  margin-bottom: 40px;
}
.about_content {
  display: flex;
  gap: 100px;
  margin-bottom: 80px;
}

.about_right_content {
  width: 100%;
  max-width: 500px;
}
.about_left_content_img {
  width: 100%;
  max-width: 570px;
  height: 400px;
}

.about_history {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
}

.about_history_img {
  width: 100%;
  height: 400px;
  margin-bottom: 40px;
}
</style>
