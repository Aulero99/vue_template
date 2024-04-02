<template>
    <s-container class="default-content">
        <s-container-solid>
            <s-row class="px-2 px-xs-0">
                <s-col-12>
                    <h1 class="pt-2">
                       Aulero99 Vue Template 
                    </h1>
                </s-col-12>
                <s-col-6>
                    This is some content in a s-col-6
                </s-col-6>
                <s-col-6>
                    This is some content in another s-col-6
                </s-col-6>
            </s-row>
        </s-container-solid>
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
// @import "suspendors";

.default-content{
    min-height: vol(12);
    background-color: white;
}
</style>