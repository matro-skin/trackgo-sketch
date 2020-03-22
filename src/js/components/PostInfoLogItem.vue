<template>
	<div class="delivery-item" :class="{ 'map-opened': expandMap }">
		<div class="row align-items-center">
			<div class="col-lg-2 delivery-dates">
				<div class="row align-items-center line-height-1">
					<div class="col-auto col-lg-12 pr-2 delivery-date">
						<strong>29 Янв.</strong>
						<span>14:25</span>
					</div>
					<div class="col col-lg-auto pl-0 pl-lg-3 pr-2 delivery-year">
						<small class="text-gray">2020</small>
					</div>
					<div class="col-auto pl-0 delivery-timeout">
                    <span class="small">
                        <strong class="text-gray">18 дней</strong>
                    </span>
					</div>
				</div>
			</div>
			<div class="col-lg">
				<div class="delivery-data row align-items-center">
					<div class="col-auto pr-0 pr-lg-3">
						<div class="circle">
							<i v-if="active"></i>
						</div>
					</div>
					<div class="col py-2">
						<div class="label font-weight-bold text-lg">Покинуло сортировочный центр</div>
						<div class="text-gray">
							<a href="#" class="text-clear show-map mr-2" @click.prevent="expandMap = !expandMap">Посмотреть на карте <i class="fas fa-angle-down ease"></i></a>
							<span class="delivery-type">Международная обработка</span>
						</div>
					</div>
					<div class="col-auto d-none d-lg-block">
						<button type="button" class="btn btn-xs btn-outline-secondary">
							Почта России
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="delivery-map box-shadow-md ease">
			<iframe v-if="expandMap" src="https://yandex.ru/map-widget/v1/?um=constructor%3A4a269e577e3556bc1efae57decf54d56e629352e49f375d567bd4f5ffebd0b5b&amp;source=constructor" width="100%" height="150" frameborder="0"></iframe>
		</div>
	</div>

</template>

<script>
	export default {
		name: "PostInfoLogItem",

		data() {
			return {
				expandMap: false
			}
		},

		props: [ 'active' ]

	}
</script>
