<template>
  <div>
    <ul>
      <ShareItem v-bind:share="share" v-for="share of shares" :key="share.id" />
    </ul>
    <vue-ads-pagination
      :total-items="200"
      :max-visible-pages="5"
      :page="page"
      :loading="loading"
      @page-change="pageChange"
      @range-change="rangeChange"
    >
      <template slot-scope="props">
        <div class="vue-ads-pr-2 vue-ads-leading-loose">
          Items {{ props.start }} tot {{ props.end }} van de {{ props.total }}
        </div>
      </template>
      <template slot="buttons" slot-scope="props">
        <vue-ads-page-button
          v-for="(button, key) in props.buttons"
          :key="key"
          v-bind="button"
          @page-change="page = button.page"
        />
      </template>
    </vue-ads-pagination>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import "vue-ads-pagination/dist/vue-ads-pagination.css";
import ShareItem from "@/components/ShareItem";
import VueAdsPagination, { VueAdsPageButton } from "vue-ads-pagination";

export default {
  components: {
    ShareItem,
    VueAdsPagination,
    VueAdsPageButton
  },
  data() {
    return {
      shares: [
        { id: 1, title: "Tesla", ticker: "TSLA" },
        { id: 2, title: "Yandex", ticker: "YNDX" },
        { id: 3, title: "Yandex", ticker: "YNDXD" }
      ]
    };
  }
};
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
