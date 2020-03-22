<template>
	<div class="row">
		<div class="col-lg-9 col-xl-8 mx-auto text-center">
			<div class="card search-card">
				<div class="card-body">
					<form>
						<div class="row align-items-center">
							<div class="col-auto text-gray">
								<div class="pl-4">
									<i class="fas fa-barcode fa-2x"></i>
								</div>
							</div>
							<div class="col pl-0">
								<label for="home-search" class="sr-only">Отследить посылку</label>
								<input type="search" id="home-search" name="search" class="form-control form-control-lg"
								       placeholder="Введите трек-код, например: RF727913178SG" />
							</div>
							<div class="col-lg-auto submit-container">
								<button type="submit" class="btn btn-primary btn-lg">Отследить посылку</button>
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
		name: "SearchPost"
	}
</script>

<style scoped>

</style>
