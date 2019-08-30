<template>
  <div class="grid-item">
    <router-link :to="{ name: 'single-product', params: {name: item.productName, product: item}}" class="grid-item">
      <div class="image-holder">
        <img :src="item.productImageUrl" alt="">
      </div>
      <div class="short-info">
        <p class="name">{{item.productName}}</p>
        <span class="price">{{item.productPrice}}<span>$</span></span>
      </div>
    </router-link>
    <div class="add-to-cart">
      <div class="count-product">
        <button v-on:click="count('minus')" class="minus">-</button>
          <span>{{cartItem.quantity}}</span>
        <button v-on:click="count('plus')" class="plus">+</button>
      </div>
      <button v-on:click="addToCart(item)">add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productItem',
  data(){
    return {
      cartItem: {
        product: this.item,
        quantity: 1,
      },
    }
  },
  props: {
    item: Object,
  },
  methods: {
    count(operator){
      if (this.cartItem.quantity <= 1 && operator === 'minus') {
        return
      }
      operator === 'plus' ? this.cartItem.quantity++ : this.cartItem.quantity--
    },
    addToCart(item) {
      this.$store.dispatch('GET_PRODUCT', {...this.cartItem});
      this.cartItem.quantity = 1;
      console.log(this.$store.state.cart);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .grid-item {
    width: 31%;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    box-sizing: border-box;
    transition: transform .3s;
    text-decoration: none;
    &:hover {
      transform: translateY(-5px);
    }
  }
  .image-holder {
    margin-bottom: 20px;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .count-product {
    span {
      display: inline-block;
      margin: 0 3px;
    }
  }
  .add-to-cart {
    button {
      cursor: pointer;
    }
  }
  .short-info {
    margin-bottom: 20px;
    .name {
      margin: 10px 0;
    }
  }
</style>
