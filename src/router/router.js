import Vue from 'vue'
import Router from 'vue-router'
import AddCategory from '../admin/components/AddCategory.vue'
import ViewCategories from '../admin/components/ViewCategories.vue'
//TODO add component imports
import AddPost from '../admin/components/AddPost.vue'
import ViewPosts from '../admin/components/ViewPosts.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes:[
     {
      path: '/admin/addcategory',
      name: 'newCategory',
      component: AddCategory
    },
    {
      path: '/admin/allcategories',
      name: 'indexCategories',
      component: ViewCategories
    },
    {
      path: '/admin/addpost',
      name: 'newPost',
      component: AddPost
    },
    {
      path: '/admin/allposts',
      name: 'indexPosts',
      component: ViewPosts
    }
	 ],
	  linkActiveClass: 'active'
})