<template>
  <ul>
    <ShareItem v-bind:share="share" v-for="share of shares" :key="share.id"/>
  </ul>
</template>


<script>
import ShareItem from '@/components/ShareItem'
export default {
  components: {
    ShareItem
  },
  data () {
    return {
      shares: [
        {id: 1, title: 'Tesla', ticker: 'TSLA'},
        {id: 2, title: 'Yandex', ticker: 'YNDX'},
        {id: 3, title: 'Yandex', ticker: 'YNDXD'},
      ]
    }
  },
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    border-top: 1px solid #303030;
    padding: 5px;
  }
  li:first-child {
      border-top: 0;
  }
</style>