<template>
	<header id="header">
		<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top py-2 py-lg-0">
			<div class="container">

				<div class="row w-100 mx-0 align-items-center">

					<div class="col col-lg-auto pl-0">
						<a class="navbar-brand" href="#">
							<img src="img/logo.png" alt="" />
						</a>
					</div>

					<div class="col">
						<Drawer />
					</div>

					<div class="col-auto">
						<div class="dropdown">
							<a href="#" class="btn btn-sm btn-outline-primary" id="dropdownLoginButton"
							   data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
								<svg class="icon" viewBox="0 0 18 18" preserveAspectRatio="none"><use xlink:href="svg/sign-in.svg#sign-in"></use></svg>
								Войти
							</a>
							<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownLoginButton">

								<form class="px-4 py-2">
									<div class="lead text-gray mb-2">Вход</div>
									<div class="form-group mb-2">
										<label for="login_email" class="sr-only">Email</label>
										<input type="email" name="email" class="form-control"
										       id="login_email" placeholder="Email..." required />
									</div>
									<div class="form-group mb-2">
										<label for="login_password" class="sr-only">Пароль</label>
										<input type="password" name="password" class="form-control"
										       id="login_password" placeholder="Пароль..." required />
									</div>
									<button type="submit" class="btn btn-primary btn-block text-lg">Вход</button>
								</form>

								<div class="text-center mt-3">
									<div class="text-md text-gray">или с помощью соцсетей</div>
									<SocialButtons />
								</div>

								<div class="btn-group btn-group-sm w-100">
									<a href="#" class="btn btn-outline-light">Регистрация</a>
									<a href="#" class="btn btn-outline-light">Забыли пароль?</a>
								</div>

							</div>
						</div>
					</div>

					<div class="col-auto px-0 d-lg-none">
						<button type="button" class="btn btn-link drawer-toggle px-0"
						        @click="$root.$emit('drawer', true)">
							<svg><use xlink:href="svg/menu.svg#menu"></use></svg>
						</button>
					</div>

				</div>

			</div>
		</nav>
	</header>
</template>

<script>
	import Drawer from "../components/header/Drawer";
	import SocialButtons from "../components/SocialButtons";
	export default {

		name: "Header",

		components: {
			SocialButtons,
			Drawer
		}

	}
</script>

<style scoped>

</style>
