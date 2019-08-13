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
import Login from '../admin/Login.vue'

Vue.use(Router)
let router = new Router({
	mode: 'history',
	routes:[
      {
        path : '/' ,
        alias : '/login',
        component : Login
      }, 
      { 
       path : '/admin',
       component :  Admin,
       children : [
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
        },
        {
          path: '/admin/alltags',
          name: 'indexTags',
          component: ViewTags
        },
        {
          path: '/admin/addtag',
          name: 'newTag',
          component: AddTag
        },
        {
          path: '/admin/editpost/:id',
          name: 'editPost',
          component: EditPost,
        },{
          path : '/admin/featuredposts',
          name : 'featuredposts',
          component: FeaturedPosts
        }
       ]
     }
	 ],
	  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})


export default router;