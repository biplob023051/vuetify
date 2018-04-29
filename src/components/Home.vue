<template>
	<v-container fluid>
		<v-layout row wrap>
			<v-flex xs12>
				<v-carousel>
					<v-carousel-item v-for="(product,i) in products" :src="product.src" :key="product.id"></v-carousel-item>
				</v-carousel>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script type="text/javascript">
	export default {
		computed: {
			products() {
				return this.$store.getters.featuredProducts
			}
		}
		// data() {
		// 	return {
		// 		products: [
		// 			{ src: 'http://www.propertiesatpune.com/wp-content/uploads/2015/04/Ravi-Kingston-Avenue-in-Baner-Pune-2.jpg', title: 'First property', id: 'test11' },
		// 			{ src: 'http://fineearth.in/wp-content/uploads/2016/02/3-BHKvilla-copy.jpg', title: 'Second property', id: 'test12' },
		// 			{ src: 'https://s3-us-west-2.amazonaws.com/g5-orion-clients/g5-c-1te982x2-place-properties/g5-cl-5527vd9fb-place-properties/uploads/place-properties-hero.jpg', title: 'Third property', id: 'test13' }
		// 		]
		// 	}
		// }
	}
</script>