<template>
   <div class="news">
      <Images link="https://fakeimg.pl/100/"/>
      <Images link="https://fakeimg.pl/150/"/>
      <h1>This is an about page</h1>
      <HelloWorld title="Latest News"/>
   </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Images from "@/components/Images.vue";

export default {
   name: "NewsView",
   components: {
      HelloWorld,
      Images,
   },
};
</script>
