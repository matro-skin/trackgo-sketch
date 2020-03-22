<template>
	<transition name="fade" appear>
		<div :id="'box'+id"
		     :class="'post-box blur-'+blur+' animated pulse infinite slow'">
			<img src="img/box.png" alt="" />
		</div>
	</transition>
</template>

<script>
	export default {
		name: "Box",
		props: [ 'id', 'blur' ]
	}
</script>
