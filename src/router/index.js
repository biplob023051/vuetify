import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Product/Products'
import Product from '@/components/Product/Product'
import AddProduct from '@/components/Product/AddProduct'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/products',
    	name: 'Products',
    	component: Products
    },
    {
    	path: '/products/add',
    	name: 'AddProduct',
    	component: AddProduct
    },
    {
    	path: '/products/:id',
    	name: 'Product',
    	props: true,
    	component: Product,
    },
    {
    	path: '/signin',
    	name: 'Signin',
    	component: Signin
    },
    {
    	path: '/signup',
    	name: 'Signup',
    	component: Signup
    }
  ],
  mode: 'history'
})
