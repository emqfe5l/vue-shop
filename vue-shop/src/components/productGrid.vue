<template>
  <div class="product-grid">
    <productItem v-for="product in this.$store.state.products" v-bind:item="product"></productItem>
  </div>
</template>
<script>

import productItem from '@/components/productItem.vue';

export default {
  name: 'productGrid',
  components: {
    productItem,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .product-grid {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -o-flex-wrap: wrap;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;
  }
  .grid-item img {
    width: 100%;
    height: auto;
  } 
</style>
