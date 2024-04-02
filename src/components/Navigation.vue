<template>
  <nav>
    <ul>
        <li>
            <router-link :to="{ name: 'Home' }">
                Home
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: 'Cards' }">
                Cards
            </router-link>
        </li>
        <li>
            <!-- <router-link :to="{ name: 'About' }">
                About
            </router-link> -->
        </li>
    </ul>
  </nav>
</template>
  
<script>
  export default {
    props:{

    },
    setup() {
      return {
  
      }
    }
  }
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
// @import "suspendors";
nav{
    ul{
        display: flex;
        flex-direction: row;
        li{
            display: block;
            list-style: none;
            padding: 0 pad(1);
        }
    }
}

</style>