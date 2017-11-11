<template>
    <div class="swiper-container swiper-container03" style="margin-bottom:1.3rem">
        <div class="swiper-wrapper">
            <!--社区-->
            <div class="swiper-slide">
               <!--<find-community></find-community>-->
               <vue-lazy-component>
                   <find-community/>
                  <lazy-component slot="skeleton"/>
               </vue-lazy-component>
            </div>
            <!--直播-->
            <div class="swiper-slide">
                <!--<find-slide></find-slide>-->
               <vue-lazy-component>
                    <find-slide/>
                   <lazy-component slot="skeleton"/>
                </vue-lazy-component>
            </div>
            <!-- nice moon 好文-->
            <div class="swiper-slide">
                 <!--<find-nice-moon></find-nice-moon>-->
                 <vue-lazy-component>
                    <find-nice-moon/>
                   <lazy-component slot="skeleton"/>
                 </vue-lazy-component>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    import FindCommunity  from "./FindCommunity.vue";
    import FindSlide  from "./FindSlide.vue";
    import FindNiceMoon  from "./FindNiceMoon.vue";
    import LazyComponent  from "./LazyComponent.vue";

    export default {
       components:{
           FindCommunity,
           FindSlide,
           FindNiceMoon,
           LazyComponent
       },
        mounted(){
           /*3box使用swiper*/
           var swiper03 = new Swiper('.swiper-container03', {
               loop:false,
               slidesPerView : 'auto',
               loopedSlides :3,
               onTransitionEnd: function(swiper){
                   $('.head-box div a').eq(swiper03.activeIndex).addClass('active').parent().siblings("div").find("a").removeClass('active');
               }
           });
           $('.head-box div a').click(function(){
               $(this).addClass('active').parent().siblings("div").find("a").removeClass('active');
               swiper03.slideTo($(this).parent().index(), 500, false);

           });
        }
    }
</script>

<style scoped>

</style>
