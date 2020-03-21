<template>
	<div>

		<div v-show="$route.name % 2 === 0" class="pl-5">
			<span class="avatar mr-2">
				<img src="img/avatar.png" alt="" />
				<span>2</span>
			</span>
			<a href="#" class="btn btn-link text-gray text-xl btn-sm px-1">
				<i class="fas fa-sign-out-alt"></i>
			</a>
		</div>

		<div v-show="$route.name % 2 !== 0" class="dropdown">

			<a href="#" class="btn btn-sm btn-outline-primary dropdown-toggle" id="dropdownLoginButton"
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
</template>

<script>
	import SocialButtons from "../SocialButtons";
	export default {
		name: "DropdownAuth",
		components: {
			SocialButtons
		},
		data() {
			return {
				show: false
			}
		}
	}
</script>

<style scoped>

</style>
