import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import singleBlog from './components/singleBlog.vue';
import tagBlog from './components/tagBlog'

export default [
    { path: '/', component: showBlogs},
    { path: '/add', component: addBlog},
    { path: '/tag', component: tagBlog},
    { path: '/blog/:id', component: singleBlog}
]