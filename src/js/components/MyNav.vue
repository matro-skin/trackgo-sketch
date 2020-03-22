<template>
	<div class="row mb-4">

		<div class="col-lg order-lg-2 mb-4 mb-lg-0">
			<button type="button" class="btn btn-lg btn-block btn-cashback text-gray">
				Вернуть 3% кэшбеком
			</button>
		</div>

		<div class="col-lg-8 col-xl-9 order-lg-1">
			<div class="card my-nav">
		<div class="card-body py-0 px-3 px-lg-4">

			<ul class="nav d-lg-none">
				<li class="nav-item">
					<a class="nav-link font-weight-bold active" href="#"
					   v-html="active || 'Активные'" />
				</li>
				<li class="nav-item">
					<a class="nav-link font-weight-bold" href="#">Архив</a>
				</li>
				<li class="nav-item ml-auto">
					<a class="nav-link" href="#" data-toggle="collapse" data-target="#add-post-col">
						Добавить посылку
					</a>
				</li>
			</ul>

			<ul class="nav d-none d-lg-flex">
				<li class="nav-item">
					<a class="nav-link" :class="{ 'active': !active }" href="#">Мои посылки</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
						Выгрузить из:
					</a>
				</li>
				<li class="nav-item" v-for="(vendor, i) in vendors" :key="i">
					<a class="nav-link" href="#"
					   :class="{ 'active': active === vendor }"
					   v-html="vendor" />
				</li>
			</ul>

		</div>
	</div>
		</div>

		<div id="add-post-col" class="col-12 order-lg-0 mt-4 mt-lg-0 pb-lg-5 collapse">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<form>
						<div class="row align-items-center">
							<div class="col-lg mb-2 mb-lg-0">
								<label for="post-label" class="sr-only">Трек-код</label>
								<input type="text" id="post-label" name="label" class="form-control" placeholder="Название..." required />
							</div>
							<div class="col-lg px-lg-0 mb-2 mb-lg-0">
								<label for="post-track-code" class="sr-only">Трек-код</label>
								<input type="text" id="post-track-code" name="code" class="form-control" placeholder="Трек-код..." required />
							</div>
							<div class="col-lg-auto">
								<button type="submit" class="btn btn-secondary btn-block text-lg">
									Добавить посылку
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {

		name: "MyNav",

		data() {
			return {
				vendors: [ 'AliExpress', 'JD.com', 'Почта России', 'Grearbest', 'Wish' ]
			}
		},

		props: [ 'active' ]

	}
</script>

<style scoped>

</style>
