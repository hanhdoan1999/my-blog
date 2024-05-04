<template>
<div>
<div class="text-4xl font-special flex justify-center items-center my-8">
    <p>My Blog - Demo</p>
</div>  
 <nav>
        <ul>
            <li class="capitalize"><router-link to="/" exact>All Blog Articles</router-link></li>
            <li class="capitalize"><router-link to="/add" exact>Add a new blog</router-link></li>
            <!-- <li class="capitalize"><router-link to="/tag" exact>Add a new tag</router-link></li> -->
        </ul>
    </nav>
</div>
   
</template>

<script>
export default {}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>