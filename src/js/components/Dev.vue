<template>
	<div :style="style">
		<ul class="list-unstyled mb-0">
			<li v-for="i in 7" :key="i">
				<router-link :to="{ name: i }" class="text-white">{{ i }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Dev",
		data() {
			return {
				style: {
					position: 'fixed',
					left: 0,
					top: '6rem',
					backgroundColor: 'rgba(0,0,0,0.5)',
					padding: '0.5rem'
				}
			}
		}
	}
</script>
