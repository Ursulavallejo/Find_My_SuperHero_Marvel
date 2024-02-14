<script>
export default {
  props: ['message', 'author'],
}
</script>

<template>
  <div class="review">
    <h3>{{ author }}</h3>
    <p>" {{ message }} "</p>
    <hr />
  </div>
</template>

<style scoped>
h3 {
  color: rgb(57, 54, 54);
  font-weight: 600;
}
</style>
