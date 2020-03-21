<template>
	<div class="drawer ease">
		<div class="drawer-backdrop ease"></div>
		<div class="drawer-inner ease">

			<div class="d-flex flex-column h-100">

				<div class="row align-items-center">

					<div class="col-lg-auto pr-0 order-lg-2">
						<LangSwitch />
					</div>

					<div class="col-lg order-lg-0">
						<ul class="navbar-nav bg-white pb-3 pb-lg-0">
							<li class="nav-item">
								<a class="nav-link" href="#">Почтовые службы</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Расширение для браузера</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Telegram bot</a>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								   data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
									Другое…
								</a>
								<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
									<a class="dropdown-item" href="#">Новости</a>
									<a class="dropdown-item" href="#">Статьи</a>
									<a class="dropdown-item" href="#">Виджеты для сайта</a>
									<a class="dropdown-item" href="#">Калькулятор срока доставки</a>
								</div>
							</li>
						</ul>
					</div>

					<div class="col-lg-auto order-lg-1">
						<div class="px-4 pt-4 p-lg-0">
							<GooglePlayButton />
							<div class="d-lg-none">
								<div class="small py-3">
									«Приложение простое и понятное, на русском языке,
									все сведения о посылке на одной странице,
									для любопытных - можно отследить все манипуляции с посылкой».
								</div>
								<ul class="list-inline pt-2">
									<li class="list-inline-item text-right">
										<div class="text-lg text-primary line-height-0">+1000</div>
										<small>отзывов</small>
									</li>
									<li class="list-inline-item text-center">
										<div class="text-lg text-primary line-height-0">4.8</div>
										<small>рейтинг</small>
									</li>
								</ul>
							</div>
						</div>
					</div>

				</div>

				<div class="mt-auto p-4 d-lg-none">
					<a href="#" class="text-gray font-weight-bolder">
						<svg class="icon" viewBox="0 0 18 18" preserveAspectRatio="none"><use xlink:href="svg/sign-in.svg#sign-in"></use></svg>
						Выйти
					</a>
				</div>

			</div>

		</div>
	</div>
</template>

<script>
	import GooglePlayButton from "./GooglePlayButton";
	import LangSwitch from "./LangSwitch";
	export default {

		name: "Drawer",

		components: {
			LangSwitch, GooglePlayButton
		}

	}
</script>

<style scoped>

</style>
