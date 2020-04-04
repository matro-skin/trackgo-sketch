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
							<a href="#" class="text-clear show-map mr-2"
							   @click.prevent="expandMap = !expandMap">
								Посмотреть на карте
								<SvgAngle class="angle-down" />
							</a>
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
			<yandexMap v-if="expandMap" :zoom="zoom" :coords="coords" :cluster-options="options" />
		</div>
	</div>

</template>

<script>
	import { yandexMap } from 'vue-yandex-maps'
	import SvgAngle from '../../svg/angle.svg'

	export default {
		name: 'PostInfoLogItem',
		data () {
			return {
				expandMap: false,
				zoom: 10,
				coords: [0, 0],
				options: { 1: { clusterDisableClickZoom: true, layout: '<div></div>' } },
			}
		},
		props: ['active'],
		components: {
			yandexMap,
			SvgAngle,
		},
	}
</script>
