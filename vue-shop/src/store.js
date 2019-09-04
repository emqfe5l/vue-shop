import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    endpoint: 'http://localhost:3000/shop',
    filter: {},
  },
  getters: {
    CART: state => {
      return state.cart
    }
  },
  mutations: {
    SAVE_TO_STORE: (state, products) => {
      state.products = products
    },
    ADD_TO_CART: (state, payload) => {
      const productsIdPool = [];
      if (state.cart.length > 0) {
        state.cart.forEach(el => {
          productsIdPool.push(el.product.id);
        })
      }
      let indexOfMatch = productsIdPool.indexOf(payload.product.id);
      indexOfMatch != -1 ? state.cart[indexOfMatch].quantity += payload.quantity : state.cart.push(payload);
    },
    REMOVE_FROM_CART: (state,removeIndex) => {
      state.cart.splice(removeIndex,1);
    },
    SET_FILTER: (state,filter) => {
      Object.assign(state.filter, filter);
    }
  },
  actions: {
    LOAD_PRODUCTS: (context,url) => {
      fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
      })
        .then(response => response.status !== 200 ? console.log(response) : response.json())
        .then(result => context.commit('SAVE_TO_STORE', result.products))
        .catch(error => console.log(error))
    },
    GET_PRODUCT: (context, payload) => {
      context.commit('ADD_TO_CART', payload);
    },
    REMOVE_FROM_CART: (context,index) => {
      context.commit('REMOVE_FROM_CART',index)
    },
    FILTER_REQUEST: (context,url) => {
      let parameters = '?';

      for(let key in context.state.filter){
        if (context.state.filter[key].length > 0){
          context.state.filter[key].forEach((param,i) => {
            let and = i > 0 ? '&' : '';
            return parameters += and + key +'='+ param;
          })
          parameters += '&';
        }
      }

      let paramsUrl = url + parameters.slice(0,-1);

      console.log(paramsUrl);

      fetch(paramsUrl)
        .then(response => response.status !== 200 ? console.log('response error') : response.json())
        .then(result => context.commit('SAVE_TO_STORE', result.products))
        .catch(error => console.log('error'))
    }
  },
});
// ?gender=male&gender=female