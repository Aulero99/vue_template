<template>
  <s-container>
    <s-col-12 vol-12>
        <!-- This is the spacer element for the hidden footer -->
    </s-col-12>
    <s-col-12 vol-12 class="hidden-footer">
        <s-row>
            <s-col-4 vol-12 class="flex-col justify-center align-center">content</s-col-4>
            <s-col-4 vol-12 class="flex-col justify-center align-center">content</s-col-4>
            <s-col-4 vol-12 class="flex-col justify-center align-center">content</s-col-4>
        </s-row>
    </s-col-12>
  </s-container>
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

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_themes.scss";

.hidden-footer{
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: black;
    color: white;
    width: 100%;
}
</style>