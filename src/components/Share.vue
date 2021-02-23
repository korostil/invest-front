<template>
  <div>Specific share {{ ticker }}</div>
</template>

<script>
export default {
  name: "Share",
  props: {
    ticker: {
      type: String,
      default: null,
    },
  }
}
</script>

<style scoped>

</style>