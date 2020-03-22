<template>
	<div class="my-post-card" :class="{ 'selected': isSelected }">
		<div class="card">
			<div class="card-body p-3 py-lg-0">
				<div class="row align-items-lg-center">
					<div class="col-4 col-lg-auto py-lg-2 post-avatar-col order-lg-0">
						<div class="post-avatar text-center">
							<img src="img/post-avatar.png" alt="" class=" mx-auto" />
						</div>
					</div>
					<div class="col-8 col-lg-auto order-lg-2 text-right pr-lg-5">
						<div class="form-group my-auto">
							<div class="custom-control custom-checkbox float-right float-lg-none">
								<input type="checkbox" class="custom-control-input"
								       :id="'customCheck' + id" :checked="isSelected" />
								<label class="custom-control-label" :for="'customCheck' + id"></label>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg order-lg-1">
						<div class="post-info pt-3 pt-lg-0">
							<span class="d-xl-block">Смартфон Xiaomi Redmi RU 7A RU 32ГБ, Доп. скидка 2% от 4шт.</span>
							<span class="d-xl-block">[Официальная гарантия, быстрая доставка]</span>
						</div>
					</div>
					<div class="col-12 col-lg-auto pr-lg-0 order-lg-3 mt-2 mt-lg-0">
						<button type="button" class="btn btn-secondary btn-block btn-lg">Добавить</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MyAliItem",
		data() {
			return {
				isSelected: this.selected
			}
		},
		props: [ 'selected', 'id' ]
	}
</script>
