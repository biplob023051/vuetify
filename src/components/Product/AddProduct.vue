<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm6 offset-sm3>
				<h2>Add Product</h2>
			</v-flex>
		</v-layout>
		<v-layout row wrap>
			<v-flex xs12>
				<form>
					<v-layout row wrap>
						<v-flex xs12 sm6 offset-sm3>
							<v-text-field label="Title" v-model="title" required></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex xs12 sm6 offset-sm3>
							<v-text-field label="Image Url" v-model="imageUrl" required></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex xs12 sm6 offset-sm3>
							<img :src="imageUrl" height="200">
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex xs12 sm6 offset-sm3>
							<v-text-field label="Description" multi-line v-model="description" required></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex xs12 sm6 offset-sm3>
							<v-btn class="primary" :disabled="!isFormValid">Create Product</v-btn>
						</v-flex>
					</v-layout>
				</form>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		data () {
			return {
				title: '',
				description: '',
				imageUrl : ''
			}
		},
		computed: {
			isFormValid () {
				return this.title !== '' && this.imageUrl !== '' && this.description !== ''
			}
		}
	}
</script>