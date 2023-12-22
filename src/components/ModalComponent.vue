<template>
  <div class="dialog" v-if="modalVisible">
    <div class="card">
      <div class="card_inner">
        <slot id="modal">
        </slot>
      </div>
    </div>
    <div class="overlay" @click="hideModal"></div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  data() {
    return {
      modalVisible: false
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
      this.$emit('closed');
    },
  },
};
</script>

<style>
.card_inner {
  margin: 50px;
}

.dialog {
  background: rgba(0, 0, 0, .5);
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  left: 0 !important;
  z-index: 9999999;
}

.card {
  width: 450px;
  max-height: 90vh;
  background: #f5f5f5;
  overflow-y: scroll;
  border-radius: 16px;
  right: -17px;

}

.card::-webkit-scrollbar {
  display: none;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>