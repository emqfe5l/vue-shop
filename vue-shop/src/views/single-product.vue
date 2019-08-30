<template>
  <main class="main">
  	<div class="container">
  		<div class="image-side">
  			<img :src="product.productImageUrl" alt="">
  		</div>
  		<div class="info-side">
  			<p class="name">{{product.productName}}</p>
  			<p class="description">{{product.productDescription}}</p>
  			<span class="price">price: <span class="bold">{{product.productPrice}}</span><span>$</span></span>
  		</div>
  	</div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'singleProduct',
  props: {
  	product: Object,
  },
};
</script>
<style scoped lang="scss">
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
	.image-side {
		width: 40%;
	}
	.info-side {
		width: 60%;
		display: flex;
		flex-wrap: wrap;
		text-align: left;
		.name {
			font-weight: 700;
			font-size: 40px;
			margin: 0;
		}
		.price {
			span {
				font-weight: 700;
			}
		}
	}
</style>