<template>
    <div id="add-blog" class="mx-20 my-10">
        <h2  v-if="!submitted" class="text-3xl font-semibold my-5 text-center">Add a New Blog Post</h2>
            <!-- <div id="checkboxes">
                <p>Blog Categories:</p>
                <label>Ninjas</label>
                <input type="checkbox" value="ninjas" v-model="blog.categories" />
                <label>Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories" />
                <label>Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories" />
                <label>Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories" />
            </div> -->
            <!-- <label>Author:</label>
            <select v-model="blog.author">
                <option v-for="author in authors" :key="author.author">{{ author }}</option>
            </select>
            <hr /> -->
            <!-- <button v-on:click.prevent="post">Add Blog</button> -->
      
<div class="flex justify-center items-center">
<el-form class="text-5xl bg-gray-100 shadow-lg border-md border border-gray-50 p-10" v-if="!submitted" :rules="rules" ref="blog" :model="blog" label-width="120px">
  <el-form-item label="Blog Title:" prop="title">
    <el-input v-model.lazy="blog.title" required></el-input>
  </el-form-item>
    <el-form-item label="Blog Content:" prop="content">
    <el-input  type="textarea" v-model.lazy.trim="blog.content" required></el-input>
  </el-form-item>
    <el-form-item label="Image link" prop="fileName">
    <el-input v-model.lazy="blog.fileName" required></el-input>
  </el-form-item>
  <el-form-item label="Author" prop="author">
    <el-select v-model="blog.author" placeholder="please select your author">
      <el-option v-for="author in authors"  :value="author.lable" :label="author.lable" :key="author.lable">{{ author.lable }}</el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Time">
    <el-col :span="11">
      <el-date-picker prop={date} type="date" placeholder="Pick a date" v-model="blog.date" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker prop={time}  placeholder="Pick a time" v-model="blog.time" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="Categories:" prop="categories">
    <el-checkbox-group v-model="blog.categories">
      <el-checkbox label="Book" name="type"></el-checkbox>
      <el-checkbox label="LifeStyle" name="type"></el-checkbox>
      <el-checkbox label="Work" name="type"></el-checkbox>
      <el-checkbox label="Love" name="type"></el-checkbox>
      <el-checkbox label="Family" name="type"></el-checkbox>
      <el-checkbox label="Friends" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
    <el-form-item label="Tags: (Đang cập nhật)">
    <el-checkbox-group v-model="blog.tags">
      <el-checkbox v-for="tag in tags" :key="tag.lable" :label="tag.lable">{{tag.lable}}</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" v-on:click.prevent="post('blog')">Add Blog</el-button>
     <el-button @click="resetForm('blog')">Reset</el-button>
  </el-form-item>
</el-form>

</div>
        <div v-if="submitted" class="text-center">
            <h3 class="text-3xl font-semibold tracking-wide text-center">Thanks for adding your post</h3>
            <span class="material-icons text-9xl my-5">
              sentiment_very_satisfied
              </span>
                      </div>
        <!-- <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
             <p>File Name:</p>
             <p>{{ blog.fileName }}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in blog.categories" :key="category.category">{{ category }}</li>
            </ul>
            <p>Author: {{ blog.author }}</p>
        </div> -->
    </div>
</template>

<script>
// Imports
export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: '',
                fileName:'',
                date:'',
                time:',',
                tags:[],
            },
             rules: {
          title: [
            { required: true, message: 'Please input title', trigger: 'blur' },
            { min: 1, max: 150, message: 'Length should be 1 to 150', trigger: 'blur' }
          ],
            content: [
            { required: true, message: 'Please input content', trigger: 'blur' },
          ],
             fileName: [
            { required: true, message: 'Please input image link', trigger: 'blur' },
          ],
           author: [
            { required: true, message: 'Please select author', trigger: 'blur' },
          ],
          categories: [
            { required: true, message: 'Please select categories', trigger: 'change' }
          ],
        },
            
            authors: [{lable:'Hanh Doan'}, {lable:'Park Jimin'}, {lable:'Kim Jenni'}],
            tags:[{lable:'tag1'},{lable:'tag2'},{lable:'tag3'}],
            submitted: false
        }
    },

     
      
    methods: {
        post(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$http.post('https://fir-blog-19b47-default-rtdb.firebaseio.com/posts.json',this.blog).then(function(data){
                console.log(data);
                this.submitted = true;
            });
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style>
/* #add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
} */
</style>