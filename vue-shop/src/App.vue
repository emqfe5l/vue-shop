<template>
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <cart text="cart"></cart>
    </header>
    <router-view />
  </div>
</template>
<script>
import cart from '@/components/cart.vue'

export default {
  name: 'App',
  components: {
    cart
  },
  mounted() {
    this.$store.dispatch('LOAD_PRODUCTS',this.$store.state.endpoint)
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: space-between;
  -ms-align-items: center;
  align-items: center;
  margin-bottom: 50px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
