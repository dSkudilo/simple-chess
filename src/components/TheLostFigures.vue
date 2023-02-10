<template>
  <div class="lost">
    <h3>{{title}}</h3>
    <div
      v-if="figures"
      class="lost__list"
    >
      <div
        v-for="figure in figures"
        :key="figure.id"
        class="lost__wrapper"
       >
          <img
            :src="figure.logo"
            :alt="figure.name"
            class="lost__img">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheLostFigures',
  props: {
    title: {
      type: String
    },
    figures: {
      type: Array || null
    }
  }
}
</script>
<style scoped lang="scss">
.lost {
  height: calc(50vh - 78px);
  padding: 30px;
  margin-left: 50px;
  background-color: $lost-bg;
}
.lost__list {
  display: flex;
  flex-wrap: wrap;
}
.lost__wrapper {
  width: 20px;
  height: 20px;
}
.lost__img {
  width: 100%;
  height: auto;
}
</style>
