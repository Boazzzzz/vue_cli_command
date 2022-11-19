<template>
   <div class="hello">
      <div class="img" v-for="item in 6" :key="item">
         <img
            :src="require(`@/assets/images/Shinnosuke/Shinnosuke${item}.png`)"
            alt="小新~"
         />
      </div>
      <!-- <div
         class="img"
         :style="{
            backgroundImage: `url(${require('@/assets/logo.png')}`,
         }"
      ></div> -->
      <div>
         <p>{{ title }}</p>
         <p>{{ msg }}</p>
         <div class="info">
            <button>-</button>
            <p>1</p>
            <button>+</button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "HelloWorld",
   props: {
      title: String,
      msg: String,
   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
   width: 100%;
   display: inline-flex;
   margin: 1rem;
}

.img {
   width: 8rem;
   height: 8rem;
   background-color: #ddd;
}

img {
   width: 8rem;
   height: 8rem;
}

.info {
   display: flex;
   align-items: center;
}

button {
   width: 2rem;
   height: 2rem;
}
</style>
