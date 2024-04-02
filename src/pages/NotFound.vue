<template>
  <s-container-solid>
    <s-row>
        <s-col-12 vol-12 class="flex-col justify-center align-center">
            <img src="https://www.macappstudio.com/img/error.png" alt="404" class="img-404">
            <h1>
                Not Found
            </h1>
        </s-col-12>
    </s-row>
  </s-container-solid>
</template>
  
<script>
import { onMounted } from 'vue'
  export default {
    setup() {
        onMounted(()=>{
            window.scrollTo(0, 0)
        })
      return {
  
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_themes.scss";

.img-404{
    width: 50%;
    min-width: 300px;
    height: auto;
}
</style>