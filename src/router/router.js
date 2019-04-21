import Vue from 'vue'
import Router from 'vue-router'
import AddCategory from '../admin/components/AddCategory.vue'
import ViewCategories from '../admin/components/ViewCategories.vue'

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
    }
	 ],
	  linkActiveClass: 'active'
})