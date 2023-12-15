<template>
  <li class="accordion__item">
    <div class="accordion_wrapper">
      <div
        class="accordion__trigger"
        :class="{ accordion__trigger_active: visible }"
        @click="open"
      >
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <slot name="accordion-trigger"></slot>
      </div>

      <transition
        name="accordion"
        @enter="start"
        @after-enter="end"
        @before-leave="start"
        @after-leave="end"
      >
        <div class="accordion__content" v-show="visible">
          <ul>
            <!-- This slot will handle all the content that is passed to the accordion -->
            <slot name="accordion-content"></slot>
          </ul>
        </div>
      </transition>
    </div>
  </li>
</template>

<script>
export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    },
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
  created() {
    this.index = this.Accordion.count++;
  },
};
</script>

<style scoped>
.accordion__item {
  cursor: pointer;
  position: relative;
  width: 100%;
  max-width: 558.69px;
  font-family: "Inter", sans-serif;
}

.accordion_wrapper {
  padding-bottom: 25px;
  border-bottom: 0.5px solid #00000080;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  margin-bottom: 11px;
  position: relative;
}

.accordion__trigger::after {
  content: "";
  width: 24px;
  height: 20px;
  background-image: url("../assets/accordionPlus.svg");
  background-repeat: no-repeat;
  position: absolute;
  top: 5px;
  right: 0;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion__trigger_active {
  position: relative;
}

.accordion__trigger_active h3 {
  color: #007aff;
}

.accordion__trigger_active::after {
  content: "";
  width: 24px;
  height: 20px;
  background-image: url("../assets/minus.svg");
  background-repeat: no-repeat;
  position: absolute;
  top: 10px;
  right: 0;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
