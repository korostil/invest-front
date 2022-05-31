<template>
  <div>
    <router-link :to="{ name: 'list of shares' }">
      back to shares list
    </router-link>
    <h2>Specific share {{ ticker }}</h2>
    <h4>Short description</h4>
    <div class="comparison">
      <div class="comparison-row">
        <div class="title">
          <strong>Share count</strong>
        </div>
        <div class="content" />
      </div>
      <div class="comparison-row">
        <div class="title">
          <strong>Capitalization</strong>
        </div>
        <div class="content">
          <canvas ref="canvas" />
        </div>
      </div>
      <div class="comparison-row">
        <div class="title">
          <strong>P/E</strong>
        </div>
        <div class="content" />
      </div>
      <div class="comparison-row">
        <div class="title">
          <strong>ROE</strong>
        </div>
        <div class="content" />
      </div>
      <div class="comparison-row">
        <div class="title">
          <strong>ROA</strong>
        </div>
        <div class="content" />
      </div>
    </div>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,
  name: 'ShareComparison',
  props: {
    ticker: {
      type: String,
      default: null,
    },
  },
  mounted() {
    this.renderChart({
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
  },
};
</script>
