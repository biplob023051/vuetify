<template>
	<v-container>
		<v-layout row wrap v-for="product in products" :key="product.id" class="mb-2">
			<v-flex xs12>
				<v-card class="primary">
					<v-container fluid>
						<v-layout row>
							<v-flex xs5 sm4 md3>
								<v-card-media
								class="white--text"
								height="200px"
								:src="product.src"
								>
									<v-container fill-height fluid>
										<v-layout fill-height>
											<v-flex xs12 align-end flexbox>
												<span class="headline">{{ product.title }}</span>
											</v-flex>
										</v-layout>
									</v-container>
								</v-card-media>
							</v-flex>
							<v-flex xs7 sm8 md9>
								<v-card-title>
									<div>
										<h3 class="white--text">{{ product.title }}</h3><br>
										<span>{{ product.date }}</span><br>
										<span>Test description goes here</span>
									</div>
								</v-card-title>
								<v-card-actions>
									<v-btn flat color="orange" :to="'/products/'+product.id">Explore</v-btn>
								</v-card-actions>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		computed: {
			products() {
				return this.$store.getters.loadedProducts
			}
		}
	}
</script>