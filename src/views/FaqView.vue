<template>
  <div class="faq_wrapper">
    <HeaderTitle title="Частые вопросы" />
    <div class="container">
      <div class="faq_content">
        <div class="faq_items">
          <div class="faq_item">
            <Accordion>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3 class="faq_title">
                    What is Webflow and why is it the best website builder?
                  </h3>
                </template>

                <template slot="accordion-content">
                  <span class="faq_desc"
                    >Vitae congue eu consequat ac felis placerat vestibulum
                    lectus mauris ultrices. Cursus sit amet dictum sit amet
                    justo donec enim diam porttitor lacus luctus accumsan tortor
                    posuere.</span
                  >
                </template>
              </accordion-item>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3 class="faq_title">
                    What is your favorite template from BRIX Templates?
                  </h3>
                </template>

                <template slot="accordion-content">
                  <span class="faq_desc"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</span
                  >
                </template>
              </accordion-item>
            </Accordion>
          </div>

          <div class="faq_item">
            <Accordion>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3 class="faq_title">
                    What is Webflow and why is it the best website builder?
                  </h3>
                </template>

                <template slot="accordion-content">
                  <span class="faq_desc"
                    >Vitae congue eu consequat ac felis placerat vestibulum
                    lectus mauris ultrices. Cursus sit amet dictum sit amet
                    justo donec enim diam porttitor lacus luctus accumsan tortor
                    posuere.</span
                  >
                </template>
              </accordion-item>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3 class="faq_title">
                    What is your favorite template from BRIX Templates?
                  </h3>
                </template>

                <template slot="accordion-content">
                  <span class="faq_desc"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</span
                  >
                </template>
              </accordion-item>
            </Accordion>
          </div>

          <div class="faq_item">
            <Accordion>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3 class="faq_title">
                    What is Webflow and why is it the best website builder?
                  </h3>
                </template>

                <template slot="accordion-content">
                  <span class="faq_desc"
                    >Vitae congue eu consequat ac felis placerat vestibulum
                    lectus mauris ultrices. Cursus sit amet dictum sit amet
                    justo donec enim diam porttitor lacus luctus accumsan tortor
                    posuere.</span
                  >
                </template>
              </accordion-item>
              <accordion-item>
                <template slot="accordion-trigger">
                  <h3 class="faq_title">
                    What is your favorite template from BRIX Templates?
                  </h3>
                </template>

                <template slot="accordion-content">
                  <span class="faq_desc"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</span
                  >
                </template>
              </accordion-item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "../components/HeaderTitle.vue";
import Accordion from "../components/Accordion.vue";
import AccordionItem from "../components/AccordionItem.vue";
export default {
  components: { Accordion, AccordionItem, HeaderTitle },
};
</script>

<style scoped>
.faq_title {
  color: #303a42;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  max-width: 479px;
}

.faq_desc {
  width: 100%;
  max-width: 489.31px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #303a42;
}

.faq_items {
  display: flex;
  flex-direction: column;
  gap: 33px;
}
</style>
