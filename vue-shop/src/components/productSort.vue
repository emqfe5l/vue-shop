<template>
  <div class="sorting-container">
    <select name="sortingSelect" id="sortingSelect" v-on:change="onChange" v-model="sorting">
      <option value="default" disabled selected>sort options</option>
      <option value="asc">price ascending</option>
      <option value="desc">price descending</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'productSort',
  props: {
    
  },
  data() {
    return {
      sorting: 'default',
    }
  },
  methods: {
    onChange() {
      this.$store.commit('SET_SORTING',this.sorting);
    }
  }
};
</script>

<style scoped>
  .sorting-container {
    display: flex;
    align-items: center;
  }
  .filter-holder {
    width: 220px;
    flex-shrink: 0;
  }
  .checkbox-list {
    list-style: none;
  }
</style>
