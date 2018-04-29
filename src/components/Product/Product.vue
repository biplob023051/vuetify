<template>
	<v-container>
		<v-layout row wrap>
			<v-flex>
				<v-card>
					<v-card-media
					class="white--text"
					height="200px"
					:src="product.src"
					>
					</v-card-media>
					<v-card-title>
						<div>
							<h3 class="grey--text">{{ product.title }}</h3><br>
							<span>{{ product.date }}</span><br>
							<span>Description will be here</span>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-btn flat color="orange" to="/signup">Register</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		props: ['id'],
		computed: {
			product() {
				return this.$store.getters.loadedProduct(this.id)
			}
		}
	}
</script>