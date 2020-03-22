<template>
	<a href="#" class="google-play-badge btn btn-outline-light bg-white p-0 border-0 box-shadow-sm">
		<SvgGooglePlay />
	</a>
</template>

<script>
	import SvgGooglePlay from "../../../svg/google-play-badge-light.svg"
	export default {
		name: "GooglePlayButton",
		components: {
			SvgGooglePlay
		}
	}
</script>
