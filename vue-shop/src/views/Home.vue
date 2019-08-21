<template>
  <main class="main">
  	<div class="container">
  		<productFilter/>
  		<productGrid/>
  	</div>
  </main>
</template>

<script>
// @ is an alias to /src
import productFilter from '@/components/filter.vue';
import productGrid from '@/components/productGrid.vue';

export default {
  name: 'home',
  components: {
    productGrid,
    productFilter,
  },
  mounted() {
  	this.$store.dispatch('LOAD_PRODUCTS',this.$store.state.endpoint)
  }
};
</script>
<style>
	.container {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		padding: 0 15px;
		width: 100%;
		max-width: 1280px;
		box-sizing: border-box;
    margin: 0 auto;
	}
</style>