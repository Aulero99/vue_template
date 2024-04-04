<template>
  <s-container>
    <s-row>
        <s-col-12 skeleton vol-7 class="flex-col justify-center align-center home-cta" id="homeCta">
            <img data-src="https://source.unsplash.com/random/?city,night" alt="Background">
            <div class="px-5 text-content">
                <h2 data-skeleton>
                    Vue Home
                </h2>
            </div>
            <div class="px-5 text-content">
                <p data-skeleton-bars>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus culpa quis facere at tempora sint!
                </p>
            </div>
            <div class="round-circle home-scrollbutton">

            </div>
        </s-col-12>
        <s-col-4> Content 1 </s-col-4>
        <s-col-4> Content 2 </s-col-4>
        <s-col-4> Content 3</s-col-4>
    </s-row>
  </s-container>
</template>
  
<script>
import { loaders } from 'suspendors';
import { onMounted } from 'vue';

  export default {
    setup() {
        onMounted(()=>{
            window.scrollTo(0, 0)
            loaders.loadAllImgInId('homeCta')
        })
      return {
  
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_themes.scss";

.home-cta{
    position: relative;
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    text-align: center;
    .text-content{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        >*{
            width: 50%;
            min-width: 300px;
            max-width: 700px;
            position: relative;
            padding: 0.5rem;
            color: white;
            text-shadow: black 1px 2px 4px;
            &:empty{
                display: block;
            }
        }
    }
}

.home-scrollbutton{
    background-color: orange;
    height: 15%;
}

</style>