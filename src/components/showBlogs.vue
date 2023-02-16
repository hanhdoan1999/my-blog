<template>
    <div class="w-full h-full" >
         <div class="loader"></div>       
        <div class="mx-20 my-5">
            <div class="flex items-center justify-between mb-10">
            <h1 class="text-lg font-special">All Blog Articles</h1>
        <input class="py-2 px-5 rounded-full border border-gray-300 focus:outline-none" type="text" v-model="search" placeholder="search blogs" />
        </div>
        <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <div v-for="blog in filteredBlogs" :key="blog.id" class="m-5 p-8 border border-gray-200 shadow-lg hover:bg-gray-100 group">
            <div class="relative group-hover:bg-gray-100">
                 <button   class="focus:outline-none absolute flex w-full h-full items-start justify-end opacity-0 group-hover:opacity-100 "><span v-on:click.prevent='deleteBlog(blog)' class="material-icons z-20">close</span></button>
                 <router-link v-bind:to="'/blog/' + blog.id" class="absolute flex w-full h-full items-center justify-center z-10 opacity-0 group-hover:opacity-100"><span class="font-title text-lg font-semibold hover:border-opacity-100 border-gray-500 border-b border-opacity-0">Show more</span></router-link>
                 <img :src="`${blog.fileName}`" class="w-full h-52 object-cover group-hover:opacity-40">
            </div> 
                <router-link v-bind:to="'/blog/' + blog.id"><h2 class="font-title text-xl my-2 ">{{ blog.title }}</h2></router-link>
                <p class="text-md truncate group-hover:opacity-50 ">{{ blog.content }}</p>
                <!-- <button v-on:click.prevent='deleteBlog(blog)'>Delete</button> -->
        </div>
        </div>
        </div>
    </div>
</template>

<script>
// Imports

import $ from 'jquery'

import searchMixin from '../mixins/searchMixin';
export default {
      mounted: function(){
    this.$nextTick(this.getUnits)
  },
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    created() {
        this.$http.get('https://fir-blog-19b47-default-rtdb.firebaseio.com/posts.json').then(function(data){
            return data.json()
        }).then(function(data){
            var blogsArray = [];
            for (let key in data){
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
            //console.log(this.blogs);
        });
    },
    methods:{
        deleteBlog(blog){
        //     this.$http.delete('https://fir-blog-19b47-default-rtdb.firebaseio.com/posts/' + blog.id+ '.json').then(function(data){
        //     console.log(data);
        //     this.blogs.splice(this.blogs.indexOf(blog), 1);
        // })   
          this.$confirm('Delete Blog. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
                        this.$http.delete('https://fir-blog-19b47-default-rtdb.firebaseio.com/posts/' + blog.id+ '.json').then(function(data){
            console.log(data);
            this.blogs.splice(this.blogs.indexOf(blog), 1);
        })   
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        }).catch(() => {
             console.log();
        }); 
        },
         getUnits(){
      $('.loader').fadeOut(3000);
    }
    },
    mixins: [searchMixin]
}
</script>

<style scoped>
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