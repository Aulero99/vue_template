<template>
  <header> 
    <Navigation/>
  </header>
  <main class="default-content">
    <router-view />
  </main>
  <footer>
    <Footing/>
  </footer>
</template>

<script>
import { computed, onBeforeMount, onMounted } from 'vue';
// @ts-ignore
import { AppState } from './AppState';

export default {

  setup(){

    onBeforeMount(()=>{
      if(AppState.dev){ console.log('onBeforeMounted') }
    })
    onMounted(()=>{ 
      if(AppState.dev){ console.log('onMounted') }
    })

    return{ 
      appState: computed(() => AppState)
    }

  }
}
</script>

<style lang="scss">
@import "suspendors";
@import "./assets/scss/main.scss";
.default-content{
    min-height: vol(12);
    background-color: white;
}
</style>
