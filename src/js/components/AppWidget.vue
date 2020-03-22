<template>
	<div class="jumbotron text-center">
		<img src="img/app-screen.png" alt="TrackGo" />
		<ul class="list-inline pt-4">
			<li class="list-inline-item">
				<div class="text-xl text-primary font-weight-bold line-height-1">+1000</div>
				<div class="text-sm">отзывов</div>
			</li>
			<li class="list-inline-item">
				<div class="text-xl text-primary font-weight-bold line-height-1">4.8</div>
				<div class="text-sm">рейтинг</div>
			</li>
		</ul>
		<div class="text-sm py-3">
			«Приложение простое и понятное, на русском языке,
			все сведения о посылке на одной странице,
			для любопытных - можно отследить все манипуляции с посылкой».
		</div>
		<GooglePlayButton />
	</div>
</template>

<script>
	import GooglePlayButton from "./header/GooglePlayButton";
	export default {
		name: "AppWidget",
		components: {GooglePlayButton}
	}
</script>
