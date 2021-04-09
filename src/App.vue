<template>
  <div id="app">
    <HeaderNav />
    <router-view class="views" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderNav from '@/components/HeaderNav.vue';
import Footer from '@/components/Footer.vue';
export default Vue.extend({
  components: {
    HeaderNav,
    Footer
  } 
})
</script>

<style lang="scss">
@import "assets/scss/style";
* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  outline: none;
  user-select: none;
}

html, body, #app {
  margin: 0;
  padding: 0;
  background: $bg;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  .views {
    min-height: calc(100vh - 100px);
    justify-content: flex-start;
  }
}
</style>
