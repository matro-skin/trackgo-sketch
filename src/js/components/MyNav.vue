<template>
	<div class="card my-nav">
		<div class="card-body py-0 px-3 px-lg-4">

			<ul class="nav d-lg-none">
				<li class="nav-item">
					<a class="nav-link font-weight-bold active" href="#">Активные</a>
				</li>
				<li class="nav-item">
					<a class="nav-link font-weight-bold" href="#">Архив</a>
				</li>
				<li class="nav-item ml-auto">
					<a class="nav-link" href="#" data-toggle="collapse" data-target="#add-post-col">Добавить посылку</a>
				</li>
			</ul>

			<ul class="nav d-none d-lg-flex">
				<li class="nav-item">
					<a class="nav-link active" href="#">Мои посылки</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Выгрузить из:</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Alliexpress</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">JD.com</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Почта России</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Grearbest</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Wish</a>
				</li>
			</ul>

		</div>
	</div>
</template>

<script>
	export default {
		name: "MyNav"
	}
</script>

<style scoped>

</style>
