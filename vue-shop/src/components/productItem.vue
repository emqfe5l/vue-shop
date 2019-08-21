<template>
    <div class="grid-item">
      <img :src="item.productImageUrl" alt="">
      <p class="name">{{item.productName}}</p>
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
<style scoped>
  .grid-item {
    width: 33.33%;
    cursor: pointer;
  }
  .count-product span {
    display: inline-block;
    margin: 0 3px;
  }
</style>
