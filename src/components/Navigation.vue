<template>
  <nav class="main-navigation e-3 flex-row justify-center px-3">
    <div class="logo ps-2 d-none d-xs-flex">
        Vue Template
    </div>
    <ul>
        <li class="px-4 px-xs-2">
            <router-link :to="{ name: 'Home' }">
                Home
            </router-link>
        </li>
        <li class="px-4 px-xs-2">
            <router-link :to="{ name: 'Cards' }">
                Cards
            </router-link>
        </li>
    </ul>
  </nav>
</template>
  
<script>
  export default {
    setup() {
      return {
  
      }
    }
  }
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_themes.scss";

</style>