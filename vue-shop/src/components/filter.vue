<template>
  <aside class="filter-holder">
    <div class="filetr-block">
      <strong>Gender</strong>
      <ul class="checkbox-list">
        <li>
          <label for="male">male</label>
          <input id="male" type="checkbox" value="male" name="male" v-model="filter.gender">
          <span class="check-box"></span>
        </li>
        <li>
          <label for="female">female</label>
          <input id="female" type="checkbox" value="female" name="female" v-model="filter.gender">
          <span class="check-box"></span>
        </li>
      </ul>
    </div>
    <div class="filetr-block">
      <strong>Type</strong>
      <ul class="checkbox-list">
        <li>
          <label for="mounting">mounting</label>
          <input id="mounting" type="checkbox" value="mounting" v-model="filter.type">
          <span class="check-box"></span>
        </li>
        <li>
          <label for="city">city</label>
          <input id="city" type="checkbox" value="city" v-model="filter.type">
          <span class="check-box"></span>
        </li>
      </ul>
    </div>
    <div class="filetr-block">
      <strong>wheel size</strong>
      <ul class="checkbox-list">
        <li>
          <label for="26">26</label>
          <input id="26" type="checkbox" value="26" v-model="filter.wheelSize">
          <span class="check-box"></span>
        </li>
        <li>
          <label for="27">27</label>
          <input id="27" type="checkbox" value="27" v-model="filter.wheelSize">
          <span class="check-box"></span>
        </li>
        <li>
          <label for="28">28</label>
          <input id="28" type="checkbox" value="28" v-model="filter.wheelSize">
          <span class="check-box"></span>
        </li>
      </ul>
    </div>
    <button v-on:click="filterRequest()">filter</button>
  </aside>
</template>

<script>

export default {
  name: 'productFilter',
  props: {
    msg: String,
  },
  data() {
    return {
        filter: {
          gender: [],
          type: [],
          wheelSize: [],
      },
    }
  },
  watch: {
    filter: {
      handler: function(currentFilter){
        this.$store.commit('SET_FILTER',currentFilter);
        this.$store.dispatch('FILTER_REQUEST',this.$store.state.endpoint);
        console.log(this.$store.state.filter);
      },
      deep: true,
    }
  },
  // methods: {
  //   filterRequest() {
  //     this.$store.dispatch('FILTER_REQUEST',this.$store.state.endpoint);
  //   }
  // },
};
</script>
<style scoped>
  .filter-holder {
    width: 220px;
    flex-shrink: 0;
  }
  .checkbox-list {
    list-style: none;
  }
</style>
