<template>
   <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld title="00000" msg="1" />
      <HelloWorld title="99999" msg="2" />
      <HelloWorld title="88888" msg="3" />
   </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
   name: "HomeView",
   components: {
      HelloWorld,
   },
};
</script>
