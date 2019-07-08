import Vue from 'vue'
import Router from 'vue-router'
import AddCategory from '../admin/components/AddCategory.vue'
import ViewCategories from '../admin/components/ViewCategories.vue'
//TODO add component imports
import AddPost from '../admin/components/AddPost.vue'
import ViewPosts from '../admin/components/ViewPosts.vue'
import AddTag from '../admin/components/AddTag.vue'
import ViewTags from '../admin/components/ViewTags.vue'
import EditPost from '../admin/components/EditPost.vue'
import Admin from '../admin/Admin.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes:[
     {
        
       path : '/admin',
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
        }
       ]
     }
	 ],
	  linkActiveClass: 'active'
})