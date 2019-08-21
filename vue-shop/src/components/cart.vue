<template>
	<div class="cart-holder">
		<button class="cart">
	    <img src="../assets/shopping-cart.svg" width="30px" alt="">
	    <span>{{count}}</span>
	  </button>
	  <ul class="products-list">
	  	<li v-for="cartItem,index in this.$store.state.cart">
	  		<span class="quantity">{{cartItem.quantity}}</span>
	  		<span class="name">{{cartItem.product.productName}}</span>
	  		<span class="price">{{cartItem.product.productPrice}}$</span>
	  		<button class="remove-btn" v-on:click="remove(index)">remove</button>
	  	</li>
	  </ul>
	</div>
</template>

<script>
export default {
  name: 'cart',
  props: {
    text: String,
  },
  methods: {
  	remove(index) {
  		this.$store.dispatch('REMOVE_FROM_CART',index)
  	}
  },
  computed: {
  	count() {
  		return this.$store.getters.CART.length
  	}
  }
};
</script>

<style scoped>
	.cart-holder {
		position: relative;
	}
	.cart {
		widows: 30px;
		height: 30px;
		background: none;
		border: 0;
		outline: 0;
		position: relative;
	}
	.cart span {
		position: absolute;
		top: 0;
		right: 5px;
		display: inline-block;
		width: 15px;
		height: 15px;
		border-radius: 100%;
		background: #42b983;
		font-size: 9px;
		line-height: 15px;
		color: #fff;
		font-weight: 700;
	}
	.products-list {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		position: absolute;
		right: 0;
		min-width: 200px;
		background-color: #fff;
		border: 2px solid #42b983;
		border-radius: 5px;
		padding: 10px;
	}
	.products-list li {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		-ms-align-items: center;
		align-items: center;
		width: 100%;
		text-align: left;
	}
	.products-list li span {
		padding: 0 3px;
	}
	.remove-btn {
		margin-left: auto;
	}
</style>
