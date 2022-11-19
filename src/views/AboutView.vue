<template>
   <div class="about">
      <h1>This is an about page</h1>
      <Button type="primary">Primary</Button>
      <hr />
      <div>
         <Carousel v-model="value" loop autoplay>
            <CarouselItem v-for="item in 5" :key="item">
               <div class="demo-carousel">
                  <img
                     :src="
                        require(`@/assets/images/Shinnosuke/Shinnosuke${item}.png`)
                     "
                     alt="Shinnosuke image"
                  />
               </div>
            </CarouselItem>
         </Carousel>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         value: 0,
      };
   },
};
</script>

<style lang="scss">
   img {
      width: 10rem;
      height: 10rem;
   }

</style>
