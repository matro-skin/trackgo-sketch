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
		<a href="#" class="google-play-badge btn btn-outline-light bg-white p-0 border-0 box-shadow-sm">
			<svg><use xlink:href="svg/google-play-badge-light.svg#google-play-badge-light"></use></svg>
		</a>
	</div>
</template>

<script>
	export default {
		name: "AppWidget"
	}
</script>
