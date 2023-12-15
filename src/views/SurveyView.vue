<template>
  <div class="survey_wrapper">
    <HeaderTitle title="Опросы" />
    <div class="container">
      <div class="survey_content">
        <h3 class="survey_title">Ответьте на несколько вопросов</h3>

        <form>
          <div class="survey_items">
            <div class="survey_item">
              <h3 class="survey_item_title">
                1. Вопрос, где можно выбирать один вариант ответа
              </h3>

              <div class="survey_variant">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label for="male">Вариант ответа</label>
              </div>

              <div class="survey_variant">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label for="male">Выбранный вариант ответа</label>
              </div>
              <div class="survey_variant">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label for="male">Вариант ответа</label>
              </div>
              <div class="survey_variant">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label for="male">Вариант ответа</label>
              </div>
            </div>

            <div class="survey_item">
              <h3 class="survey_item_title">
                2. Вопрос, где можно выбирать несколько ответов
              </h3>

              <div class="survey_variant">
                <input
                  type="checkbox"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label for="male">Вариант ответа</label>
              </div>

              <div class="survey_variant">
                <input
                  type="checkbox"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label for="male">Выбранный вариант ответа</label>
              </div>
              <div class="survey_variant">
                <input
                  type="checkbox"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label for="male">Вариант ответа</label>
              </div>
              <div class="survey_variant">
                <input
                  type="checkbox"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label for="male">Вариант ответа</label>
              </div>
            </div>

            <div class="survey_item">
              <h3 class="survey_item_title">
                3. Вопрос, где можно выбирать несколько ответов
              </h3>

              <div class="survey_variant">
                <input
                  type="checkbox"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label for="male">Вариант ответа</label>
              </div>

              <div class="survey_variant">
                <input
                  type="checkbox"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label for="male">Выбранный вариант ответа</label>
              </div>
              <div class="survey_variant">
                <input
                  type="checkbox"
                  id="xz"
                  name="gender"
                  value="male"
                  required
                />
                <label for="xz">Вариант ответа</label>
              </div>
              <div class="survey_variant">
                <input
                  type="checkbox"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label for="male">Вариант ответа</label>
              </div>
            </div>
          </div>

          <Button>Отправить ответы</Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import HeaderTitle from "../components/HeaderTitle.vue";
export default {
  components: { Button, HeaderTitle },
};
</script>

<style scoped>
.survey_title {
  font-size: 32px;
  font-weight: 500;
  color: #000000;
  font-family: "Inter", sans-serif;
  margin-bottom: 40px;
}

.survey_item_title {
  font-size: 22px;
  font-weight: 500;
  color: #000000;
  font-family: "Inter", sans-serif;
  margin-bottom: 30px;
}

.survey_variant {
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;
}

.survey_variant:last-child {
  margin-bottom: 0;
}

.survey_item {
  margin-bottom: 80px;
}

.survey_item:last-child {
  margin-bottom: 0;
}

input {
  margin-right: 12px;
}

input[type="radio"] {
  width: 24px;
  height: 24px;
}

input[type="checkbox"] {
  width: 24px;
  height: 24px;
}

label {
  font-size: 18px;
  font-weight: 400;
  color: var(--color-black);
  font-family: "Inter", sans-serif;
}

.survey_items {
  margin-bottom: 80px;
}
</style>
