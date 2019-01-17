<template>
  <div class="list-item">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <h1>dddd</h1>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: ['title', 'content', 'detailRoute']
}
</script>

<style lang="scss">

</style>
