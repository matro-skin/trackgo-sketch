<template>
	<transition name="fade" appear>
		<div :id="'box'+id" :class="classes">
			<img src="img/box.png" alt="" />
		</div>
	</transition>
</template>

<script>
	export default {
		name: "Box",
		data() {
			return {
				delay: Math.floor(Math.random()*(5 - 1) + 1)
			}
		},
		props: [ 'id', 'blur' ],
		computed: {
			classes() {
				return [
					'post-box',
					`blur-${this.blur}`,
					'animated',
					'pulse',
					'infinite',
					'slow',
					`delay-${this.delay}s`
				]
			}
		}
	}
</script>
