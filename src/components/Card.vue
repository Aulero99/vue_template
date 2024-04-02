<template>
  <s-col skeleton vol-4 class="card e-2 round-2">
    <img :data-src="card.img" :alt="card.author">
    <cite class="author">{{ card.author }}</cite>
  </s-col>
</template>
  
<script>
import { Card } from '../models/Card'
import { loaders } from 'suspendors';
import { onMounted } from 'vue';

  export default {
    props:{
        card: { type: Card, required: true }
    },
    setup(props) {
        onMounted(()=>{
            loaders?.loadAllImgInId(`card_${props.card.id}`)
        })
      return {
  
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_themes.scss";

.card{
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    .author{
        display: block;
        z-index: 1;
        color: white;
        text-shadow: black 2px 2px 3px;
        padding: 1rem;
    }
    img{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
</style>