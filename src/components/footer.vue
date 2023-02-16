<template>
<div>
<div class="text-4xl font-special flex justify-center items-center my-8">
    <p>Blog !</p>
</div>
<div  class="flex justify-center items-center">
   <ul v-for="link in links" :key="link.name">
    <li class="font-xl font-medium mx-10 mb-10 hover:text-gray-500 "><a href="">{{link.name}}</a></li>
</ul> 
</div>
<div  class="flex justify-center items-center">
   <ul v-for="icon in icons" :key="icon.name">
    <li><img :src="getImgUrl(icon.name)" class="w-8 h-8 mx-3 mb-8 cursor-pointer hover:opacity-40"></li>
</ul> 
</div>   
<hr>
<p class="text-center text-md font-normal my-5">@2023Logwork. All Right Reserved</p>

</div>
   
</template>

<script>
export default {
    data() {
        return {
            links:[
                {name:'Home'},
                {name:'Resipes'},
                {name:'Article'},
                {name:'Contact'},
                {name:'Purchase'},
            ],
            icons:[
                {name:'1.png'},
                 {name:'2.png'},
                  {name:'3.png'},
                   {name:'4.png'},
            ]
        }
    },
    methods: {
        getImgUrl(pic) {
return require('../assets/images/'+pic)
}
    },
}
</script>

<style scoped>

</style>