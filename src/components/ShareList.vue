<template>
  <div>
    <ul>
      <ShareItem :share="share" v-for="share of shares" :key="share.id" />
    </ul>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import ShareItem from '@/components/ShareItem';

export default {
  components: {
    ShareItem,
  },
  data() {
    return {
      shares: [
        { id: 1, title: 'Tesla', ticker: 'TSLA' },
        { id: 2, title: 'Yandex', ticker: 'YNDX' },
        { id: 3, title: 'Yandex', ticker: 'YNDXD' },
      ],
    };
  },
};
</script>
