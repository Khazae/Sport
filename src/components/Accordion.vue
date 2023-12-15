<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "AccordionComponent",
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
    };
  },
  provide() {
    return { Accordion: this.Accordion };
  },
};
</script>

<style scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 53px;
}
</style>
