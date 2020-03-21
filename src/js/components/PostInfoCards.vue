<template>
	<div class="row mt-2 mt-lg-0 text-center delivery-cards">

		<div class="col-6 col-lg pr-1 pr-lg-2 h-100">
			<div class="card">
				<div class="card-body">
					<div class="caption text-gray caption mb-2">
						Используйте личный кабинет,
						чтобы сохранять и отслеживать все ваши посылки
					</div>
					<a href="#" class="btn btn-sm btn-outline-primary">
						Войти
					</a>
				</div>
			</div>
		</div>

		<div class="col-6 col-lg pl-1 pl-lg-2 order-lg-last">
			<div class="card">
				<div class="card-body">
					<div class="caption text-gray caption mb-2">
						Если вы много времени проводите
						в мессенджерах, используйте нашего телеграм бота
					</div>
					<a href="#" class="btn btn-sm btn-outline-secondary font-weight-normal">
						@TrackGoBot
					</a>
				</div>
			</div>
		</div>

		<div class="col-12 col-lg mt-2 mt-lg-0 px-lg-2">
			<div class="card">
				<div class="card-body">
					<div class="caption text-gray caption mb-2">
						Если вы часто просматривайте посылки с телефона,
						установите удобнее приложение
					</div>
					<a href="#" class="google-play-badge btn btn-outline-light bg-white p-0 border-0">
						<svg><use xlink:href="svg/google-play-badge-light.svg#google-play-badge-light"></use></svg>
					</a>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		name: "PostInfoCards"
	}
</script>

<style scoped>

</style>
