<template>
  <div id="single-blog" class="mx-20 my-10">
     <div class="loader"></div>       
    <div class="grid grid-cols-3">
      <div class="text-center">
        <img :src="`${blog.fileName}`" />
      </div>
      <div class="col-span-2 text-lg ml-10">
        <h1 class="text-2xl my-8 font-title" >{{ blog.title }}</h1>
        <article class="mb-10">{{ blog.content }}</article>
        <div class="flex justify-between items-center">
             <p class="font-semibold">Author: {{ blog.author }}</p>
             <p class="text-sm" v-if="blog.time">Time: {{ blog.time }}</p>
        </div>     
        <p class="text-md">Categories:</p>
        <ul class="flex justify-start items-center">
          <li class="mr-3" v-for="category in blog.categories" :key="category.category">
            {{ category }}
          </li>
        </ul>
        <div class="flex justify-start items-center" v-if="blog.tags">
            <p class="text-md font-semibold mr-5">Tags: </p>
         <ul class="flex justify-start items-center">
          <li class="mr-3" v-for="tag in blog.tags" :key="tag.lable">
            <el-tag type="info"  effect="dark">{{ tag }}</el-tag> 
          </li>
        </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
    mounted: function(){
    this.$nextTick(this.getUnits)
  },
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$http
      .get(
        "https://fir-blog-19b47-default-rtdb.firebaseio.com/posts/" +
          this.id +
          ".json"
      )
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
      });
  },
  methods: {
     getUnits(){
      $('.loader').fadeOut(3000);
    }
  },
};
</script>

<style>
.loader {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background: url('../assets/images/Rolling-1s-100px.gif') 50% 50% no-repeat rgb(249,249,249);
}
</style>
