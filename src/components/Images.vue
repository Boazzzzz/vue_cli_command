<template>
   <div class="img">
      <img :src="link" alt="" />
   </div>
</template>

<script>
export default {
   props: {
      link: String,
   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img {
   width: 100vw;
   height: 10rem;
   background-color: #999;
}
</style>
