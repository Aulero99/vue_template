<template>
    <s-container-solid>
        <s-row cols-12 cols-sm-6 cols-md-4 g-2 class="my-2">
            <Card v-for="c in cards" :key="c.id" :id="'card_' + c.id" :card="c"/>
        </s-row>
    </s-container-solid>
</template>
  
<script>
import { computed, onMounted } from 'vue';
import { cardsService } from '../services/CardsService';
import { AppState } from '../AppState';

  export default {
    setup() {
        onMounted(()=>{
            window.scrollTo(0, 0)
            cardsService.getCards()
        })
      return {
        cards: computed(() => AppState.cards)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_themes.scss";

</style>