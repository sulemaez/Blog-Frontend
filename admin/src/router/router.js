import Vue from 'vue'
import Router from 'vue-router'

//import admin routes
import AddCategory from '../admin/components/AddCategory.vue'
import ViewCategories from '../admin/components/ViewCategories.vue'
import AddPost from '../admin/components/AddPost.vue'
import ViewPosts from '../admin/components/ViewPosts.vue'
import AddTag from '../admin/components/AddTag.vue'
import ViewTags from '../admin/components/ViewTags.vue'
import EditPost from '../admin/components/EditPost.vue'
import Admin from '../admin/Admin.vue'
import FeaturedPosts from '../admin/components/FeaturedPosts.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes:[
       {
        
       path : '/',
       component :  Admin,
       children : [
        {
          path: '/addcategory',
          name: 'newCategory',
          component: AddCategory
        },
        {
          path: '/allcategories',
          name: 'indexCategories',
          component: ViewCategories
        },
        {
          path: '/addpost',
          name: 'newPost',
          component: AddPost
        },
        {
          path: '/allposts',
          name: 'indexPosts',
          component: ViewPosts
        },
        {
          path: '/alltags',
          name: 'indexTags',
          component: ViewTags
        },
        {
          path: '/addtag',
          name: 'newTag',
          component: AddTag
        },
        {
          path: '/editpost/:id',
          name: 'editPost',
          component: EditPost,
        },{
          path : '/featuredposts',
          name : 'featuredposts',
          component: FeaturedPosts
        }
       ]
     }
	 ],
	  linkActiveClass: 'active'
})