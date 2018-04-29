import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedProducts: [
			{ 
				src: 'http://www.propertiesatpune.com/wp-content/uploads/2015/04/Ravi-Kingston-Avenue-in-Baner-Pune-2.jpg', 
				title: 'First property', 
				date: '2018-04-28',
				id: 'test11' 
			},
			{ 
				src: 'http://fineearth.in/wp-content/uploads/2016/02/3-BHKvilla-copy.jpg', 
				title: 'Second property', 
				date: '2018-04-29',
				id: 'test12' 
			},
			{ 
				src: 'https://s3-us-west-2.amazonaws.com/g5-orion-clients/g5-c-1te982x2-place-properties/g5-cl-5527vd9fb-place-properties/uploads/place-properties-hero.jpg', 
				title: 'Third property', 
				date: '2018-04-30',
				id: 'test13' 
			}
		]
	},
	mutations: {},
	actions: {},
	getters: {
		loadedProducts (state) {
			return state.loadedProducts.sort((productA, productB) => {
				return productA.date > productB.date
			})
		},
		featuredProducts(state, getters) {
			return getters.loadedProducts.slice(0, 5)
		},
		loadedProduct(state) {
			return (productId) => {
				return state.loadedProducts.find((product) => {
					return product.id === productId
				})
			}
		}
	}
})