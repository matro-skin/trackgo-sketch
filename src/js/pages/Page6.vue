<template>
	<div>
		<section id="search-section" class="bg-light-gray">
			<div class="container">

				<h1 class="text-xxl text-center font-weight-bold">
					<span class="text-primary">462</span>
					<span>службы отслеживания мы поддерживаем</span>
				</h1>

				<div class="row mt-3 mb-5">
					<div class="col-lg-8 mx-auto">
						<div class="text-center text-gray text-lg">
							Отследить посылку AliExpress, Ebay.com, TaoBao, JD.com Joom, Wish - Почты России,
							Украины, Беларусии, Казахстана, Китая, AliExpress JD.com, Joom, Pandao, GearBest,
							Ebay.com, TaoBao быстро, легко и удобно
						</div>
					</div>
				</div>

				<SearchPost />

			</div>
		</section>
		<section id="services-list">
			<div class="container">

				<div class="row">
					<div class="col-lg-9 mx-auto">
						<div class="search-service-input input-group input-group-sm mb-5">
							<div class="input-group-prepend">
								<span class="input-group-text bg-white">
									<i class="fas fa-search"></i>
								</span>
							</div>
							<input type="search" class="form-control bg-white text-md"
							       v-model="service" name="service"
							       placeholder="Начните вводить название службы" />
						</div>
					</div>
				</div>

				<div class="row">

					<div class="col-sm-6 col-lg-4 mb-4 service" v-for="(service, i) in filtered" :key="i">
						<div class="row">
							<div class="col-auto pr-0">
								<img src="img/service.png" alt="" />
							</div>
							<div class="col">
								<div class="label text-primary text-md font-weight-bold mb-2" v-html="service.label" />
								<div class="caption text-sm" v-html="service.caption" />
								<div class="link text-primary">Отследить направление - {{ service.label }}</div>
							</div>
						</div>
					</div>

				</div>

			</div>
		</section>
	</div>
</template>

<script>
	import SearchPost from "../components/SearchPost";
	export default {

		name: "Page6",

		data() {
			return {
				service: '',
				services: [
					{ label: 'One World Express', caption: 'Курьерская служба' },
					{ label: 'CNZ Express', caption: 'Курьерская китайская служба' },
					{ label: 'WEDO Express', caption: 'Курьерская служба' },
					{ label: 'MTY Track', caption: 'Курьерская китайская служба' },
					{ label: 'Worldship gd', caption: 'Курьерская китайская служба' },
					{ label: 'ETS Express', caption: 'Курьерская служба' }
				]
			}
		},

		computed: {

			filtered() {
				let handle = this.service.toLowerCase();
				return this.services.filter(a => a.label.toLowerCase().indexOf( handle ) > -1 )
			}

		},

		components: {
			SearchPost
		}

	}
</script>

<style scoped>

</style>
