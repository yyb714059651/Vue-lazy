<template>
    <div>
        <div class="lazyhead">
            lazy-component-head
        </div>
        <div class="lazybody">
           lazy-component-body
        </div>
        <div class="lazyfoot">
            lazy-component-foot
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {

    }
</script>

<style scoped>
 .lazyhead{
     font-size:0.4rem;
     height:3rem;
     width:100%;
     color:white;
     background:red;
 }
 .lazybody{
      font-size:0.4rem;
      height:3rem;
      width:100%;
      color:white;
      background:black;
  }
  .lazyfoot{
       font-size:0.4rem;
       height:3rem;
       width:100%;
       color:white;
       background:pink;
   }
</style>
