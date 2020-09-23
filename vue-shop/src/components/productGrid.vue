<template>
  <div class="product-grid">
    <productSort/>
    <div class="grid-items">
      <productItem v-for="product in products" v-bind:item="product"></productItem>
    </div>
  </div>
</template>
<script>

import productSort from '@/components/productSort.vue';
import productItem from '@/components/productItem.vue';

export default {
  name: 'productGrid',
  components: {
    productItem,
    productSort
  },
  computed: {
    products() {
      let sortedProducts = [];
      switch (this.$store.state.sorting) {
        case 'asc': 
          sortedProducts = this.$store.state.products.sort((a,b) => {
            return a.productPrice - b.productPrice
          });
          break;
        case 'desc':
          sortedProducts = this.$store.state.products.sort((a,b) => {
            return b.productPrice - a.productPrice
          });
          break;
        default:
          sortedProducts = this.$store.state.products;
      }
      return sortedProducts;
      
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .grid-items {
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
