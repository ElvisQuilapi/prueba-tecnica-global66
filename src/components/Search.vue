<template>
  <div class="loader_class">
    <font-awesome-icon icon="search" class="icon_search" />
    <input type="text" placeholder="Search" v-model="itemSearch"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      itemSearch: ""
    } 
  },
  watch: {
    itemSearch(v) {
       this.$emit("input", v);
    }
  }
}
</script>

<style lang="scss">
.loader_class {
  margin-bottom: 30px;
  position: relative;
  input[type=text] {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    padding-left: 40px;
    border: none;
    outline: none;
    font-size: 16px;
    color: #bfbfbf;
    border-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  }
  .icon_search {
    position: absolute;
    top: 18px;
    left: 15px;
    color: #bfbfbf;
    font-size: 16px;
  }
}
</style>