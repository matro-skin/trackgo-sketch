<template>
	<ul class="list-inline mt-1 mb-4 social-buttons">
		<li class="list-inline-item">
			<a href="#"><SvgVk /></a>
		</li>
		<li class="list-inline-item">
			<a href="#"><SvgTwitter /></a>
		</li>
		<li class="list-inline-item">
			<a href="#"><SvgLinkedIn /></a>
		</li>
		<li class="list-inline-item">
			<a href="#"><SvgFacebook /></a>
		</li>
	</ul>
</template>

<script>
	import SvgVk from "../../svg/vk.svg"
	import SvgTwitter from "../../svg/twitter.svg"
	import SvgLinkedIn from "../../svg/linkedin.svg"
	import SvgFacebook from "../../svg/facebook.svg"
	export default {
		name: "SocialButtons",
		components: {
			SvgVk,
			SvgTwitter,
			SvgLinkedIn,
			SvgFacebook
		}
	}
</script>
