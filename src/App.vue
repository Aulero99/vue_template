<template>
  <Navigation/>
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
import { logger } from './utils/Logger';

export default {

  setup(){

    onBeforeMount(()=>{
      if(AppState.dev){ logger.log('onBeforeMounted') }
    })
    onMounted(()=>{ 
      if(AppState.dev){ logger.log('onMounted') }
    })

    return{ 
      appState: computed(() => AppState)
    }

  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

.default-content{
    min-height: vol(12);
    background-color: white;
}
</style>
