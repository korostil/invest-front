<template>
  <li class="share">
    <span class="ticker">
      <router-link
        :to="{ name: 'share', params: { ticker: share.ticker } }"
        style="width: 100%"
      >
        {{ share.ticker }}
      </router-link>
    </span>
    {{ share.title }}
  </li>
</template>

<script>
export default {
  name: 'ShareItem',

  props: {
    share: {
      type: Object,
      required: true,
    },
  },
};
</script>
