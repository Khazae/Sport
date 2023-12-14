<template>
  <div class="wrapperCalendar">
    <div class="container">
      <div class="table">
        <div class="tableRow row">
          <span class="tableCell">По дате</span>
          <span class="tableCell">Соревнования</span>
          <span class="tableCell">Положения</span>
          <span class="tableCell">Протоколы</span>
          <span class="tableCell">Статус</span>
          <span class="tableCell">Трансляция</span>
        </div>

        <div class="tableRow row">
          <div class="tableCell">01.02.2021</div>
          <div class="tableCell">Чемпионат РК по шахматам</div>
          <div class="tableCell">PDF</div>
          <div class="tableCell">PDF</div>
          <div class="tableCell">Ожидается</div>
          <div class="tableCell">Live</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tableRow {
  height: 54px;
  display: grid;
  align-items: center;
  padding: 0 30px;
  column-gap: 16px;
}

.tableRow:last-child {
  border-bottom: none;
}
.tableCell {
  display: flex;
  align-items: center;
  font-size: 13px;
  text-overflow: ellipsis;
}
.row {
  grid-template-columns: 120px repeat(4, 1fr) 200px;
}
</style>
