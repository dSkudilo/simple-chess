<template>
  <div
    :key="isSelected + isAtacted"
    class="cell"
    :class="[
      `cell_${cell.color}`,
      { 'cell_selected': isSelected},
      { 'cell_atacted': isAtacted}
      ]"
    @click="$emit('click')"
  >
    <div
      class="cell__available"
      v-if="isCellAvailable"
    />
    <img
      v-if="cell.figure?.logo"
      :src="cell.figure.logo"
      alt="figure"
      class="cell__img"
    >
  </div>
</template>
<script>
export default {
  name: 'TheBoard',
  props: {
    cell: {
      type: Object,
      require: true
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isCellAvailable () {
      return this.cell.available && !this.cell.figure
    },
    isAtacted () {
      console.log(this.cell.available)
      return this.cell.available && this.cell.figure
    }
  }
}
</script>
<style lang="scss" scoped>
.cell {
  width: $cell-size;
  height: $cell-size;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.cell_white {
  background-color: #eed4ac;
}
.cell_black {
  background-color: deepskyblue;
}
.cell_selected {
  background-color: brown;
}
.cell_atacted {
  background-color: green;
}
.cell__available {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #22c022;
}
.cell__img {
  width: $figure-size;
  height: $figure-size;
  position: relative;
}
</style>
