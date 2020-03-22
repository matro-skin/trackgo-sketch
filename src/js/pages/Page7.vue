<template>
	<div>
		<section id="service-section" class="bg-light-gray">
			<div class="container position-relative">

				<h1 class="text-xxl text-center">
					<span class="d-block font-weight-bold">One World Express</span>
					<span class="d-block text-gray">отслеживание почтовых отправлений</span>
				</h1>

				<div class="row mt-3 mb-5">
					<div class="col-lg-8 mx-auto">
						<div class="text-center text-md">
							<div>One World Express - Курьерская компания</div>
							<div>
								Официальный сайт:
								<a href="https://www.oneworldexpress.com/" class="text-primary">
									www.oneworldexpress.com
								</a>
							</div>
						</div>
					</div>
				</div>

				<SearchPost />

				<Box :id="1" :blur="2" class="hidden-md" />
				<Box :id="2" :blur="5" />

			</div>
		</section>
		<section id="service-info">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 text-md">

						<div class="mb-3">
							<img src="img/oneworld.png" alt=""
							     class="float-lg-left mb-4 mb-lg-4 mt-lg-1 d-block d-lg-inline-block mx-auto mr-lg-4 rounded" />
							One World Express - это международная служба электронной коммерции и логистики.
							Компания была основана в 1998 году. Сегодня система отслеживания посылок
							One world Express доступна в Африке, Китае, Дубае, Великобритании и Америке,
							где организация уже открыла офисы. Клиентами компании являются многонациональные
							компании и потребители из всех отраслей, от банков до фармацевтических компаний
							и отдельных интернет-магазинов. One world express поставляет и отслеживает пакеты
							с постоянно расширяющейся командой преданных своему делу и творческих профессионалов.
							Сотрудники имеют опыт работы в сфере курьерской и электронной коммерции.
							Компания работает над идеями для удовлетворения меняющихся потребностей клиентов
							и рынков. Это постоянные усилия по предоставлению непревзойденных экономически
							эффективных и инновационных услуг для всех клиентов. Компания предлагает этот
							эффект через проверенные платформы и постоянную адаптацию новых технологий.
						</div>
						<div class="mb-3">
							Если вы заинтересованы в отслеживании www.oneworldexpress.com,
							воспользуйтесь сервисом Trackgo.ru. Благодаря специальной системе
							уведомлений вы всегда будете в курсе движения вашего груза.
						</div>
						<div class="mb-3">
							Если у вас есть вопросы, касающиеся отслеживания на сайте
							www.oneworldexpress.com, воспользуйтесь формой обратной
							связи на официальном сайте компании. Доверьте ваши грузы
							сервису с широким спектром услуг дистрибуции для отправки
							посылок в глобальном масштабе. С One World Express ваши
							посылки станут вашей гордостью.
						</div>

					</div>
					<div class="col-lg-3 offset-lg-1">
						<AppWidget />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import SearchPost from "../components/SearchPost";
	import AppWidget from "../components/AppWidget";
	import Box from "../components/Box";
	export default {
		name: "Page7",
		components: {
			Box,
			AppWidget,
			SearchPost
		}
	}
</script>
