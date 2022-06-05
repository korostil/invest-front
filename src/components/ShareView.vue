<script setup></script>

<template>
  <div>
    <router-link :to="{ name: 'list of shares' }">
      back to shares list
    </router-link>
    <h2>Specific share {{ this.$route.params.ticker }}</h2>
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
