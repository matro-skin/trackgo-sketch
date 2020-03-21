<template>
	<div>

		<section role="banner" id="section-home-search" class="bg-light-gray text-center">

			<div class="container">

				<div class="row">
					<div class="col-lg-9 mx-auto">

						<h1 class="text-xxxl font-weight-bold">Отслеживание посылок</h1>

						<div class="text-gray text-lg mb-5">
							Из <strong>AliExpress</strong>, <strong>Ebay.com</strong>, <strong>TaoBao</strong>,
							JD.com Joom, Wish - Почты России, Украины, Беларусии, Казахстана, Китая, AliExpress JD.com,
							Joom, Pandao, GearBest, Ebay.com, TaoBao быстро, легко и удобно
						</div>

						<div class="card">
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

			</div>

		</section>

		<div class="section-hr">
			<button type="button" class="btn btn-outline-light bg-white rounded-circle position-absolute">
				<i class="fas fa-angle-down"></i>
			</button>
		</div>

		<section role="banner" id="section-home-items" class="bg-light-gray">
			<div class="container">
				<PostInfo />

			</div>
		</section>

		<div class="section-hr"></div>

		<section role="banner" id="section-home-stats" class="bg-light-gray">

			<div class="container">

				<div class="total text-center">
					<div class="amount text-xxxl font-weight-bold">10 263 934</div>
					<div class="caption text-xl text-gray line-height-1 mb-4 mb-lg-5">Посылок мы отследили</div>
				</div>

				<div class="cards">
					<div class="row">
						<div class="col-lg-4 mt-2 mt-lg-4">
							<div class="card">
								<div class="card-body">
									<div class="row align-items-center mb-2">
										<div class="col-auto">
											<span class="font-weight-bold text-primary text-xxl">462</span>
										</div>
										<div class="col">
											<div class="line-height-1 font-weight-bold text-lg">
												Активные службы отслеживания посылок
											</div>
										</div>
									</div>
									<div class="text-gray line-height-md">
										Устали ждать посылку? Мы поможем Вам узнать в какой точке мира
										была замечена Ваша посылка последний раз
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 mt-2 mt-lg-4 d-none d-lg-block">
							<div class="card">
								<div class="card-body">
									<div class="row align-items-center mb-2">
										<div class="col-auto">
											<img src="img/chrome.png" alt="Расширение для браузера" />
										</div>
										<div class="col">
											<div class="line-height-1 font-weight-bold text-lg">
												Расширение для браузера
											</div>
										</div>
									</div>
									<div class="text-gray line-height-md mb-2">
										Установите удобное расширение в бразуер
										и отслеживайте посылки прямо из личного кабинета
									</div>
									<a href="#" class="text-primary font-weight-bold">Установить</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 mt-2 mt-lg-4 d-none d-lg-block">
							<div class="card">
								<div class="card-body">
									<div class="row align-items-center mb-2">
										<div class="col-auto">
											<img src="img/bell.png" alt="Web-push уведомления" />
										</div>
										<div class="col">
											<div class="line-height-1 font-weight-bold text-lg">
												Web-push уведомления
											</div>
										</div>
									</div>
									<div class="text-gray line-height-md">
										Хотите быть всегда в курсе изменений статусов вашей посылки?
										Используйте push-уведомления
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 mt-2 mt-lg-4">
							<div class="card">
								<div class="card-body">
									<div class="row align-items-center mb-2">
										<div class="col-auto">
											<img src="img/icontelegram.png" alt="Телеграм бот @TrackGoBot" />
										</div>
										<div class="col">
											<div class="line-height-1 font-weight-bold text-lg">
												Телеграм бот @TrackGoBot
											</div>
										</div>
									</div>
									<div class="text-gray line-height-md mb-2">
										Уведомления, отслеживание, управление отправлениями
									</div>
									<a href="#" class="text-primary font-weight-bold">Перейти</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 mt-2 mt-lg-4">
							<div class="card">
								<div class="card-body">
									<div class="row align-items-center mb-2">
										<div class="col-auto">
											<img src="img/vk.png" alt="Вконтакте бот" />
										</div>
										<div class="col">
											<div class="line-height-1 font-weight-bold text-lg">
												Вконтакте бот
											</div>
										</div>
									</div>
									<div class="text-gray line-height-md mb-2">
										Онлайн-поддержка, задайте вопрос в чате
									</div>
									<a href="#" class="text-primary font-weight-bold">Перейти</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 mt-2 mt-lg-4">
							<div class="card">
								<div class="card-body">
									<div class="row align-items-center mb-2">
										<div class="col-auto">
											<img src="img/shield.png" alt="Личный кабинет" />
										</div>
										<div class="col">
											<div class="line-height-1 font-weight-bold text-lg">
												Личный кабинет
											</div>
										</div>
									</div>
									<div class="text-gray line-height-md mb-2">
										История всех Ваших отправлений
									</div>
									<a href="#" class="text-primary font-weight-bold">Войти</a>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</section>

		<section role="banner" id="section-home-faq">
			<div class="container">

				<div class="text-xxl font-weight-bold text-gray mb-3 d-none d-lg-block">
					Часто задаваемые вопросы
				</div>

				<div class="row">

					<div class="col-lg-4 col-xl-3 offset-lg-1 order-lg-last">

						<div class="jumbotron text-center">
							<img src="img/app-screen.png" alt="TrackGo" />
							<ul class="list-inline pt-4">
								<li class="list-inline-item">
									<div class="text-xl text-primary font-weight-bold line-height-1">+1000</div>
									<div class="text-sm">отзывов</div>
								</li>
								<li class="list-inline-item">
									<div class="text-xl text-primary font-weight-bold line-height-1">4.8</div>
									<div class="text-sm">рейтинг</div>
								</li>
							</ul>
							<div class="text-sm py-3">
								«Приложение простое и понятное, на русском языке,
								все сведения о посылке на одной странице,
								для любопытных - можно отследить все манипуляции с посылкой».
							</div>
							<a href="#" class="google-play-badge btn btn-outline-light bg-white p-0 border-0 box-shadow-sm">
								<svg><use xlink:href="svg/google-play-badge-light.svg#google-play-badge-light"></use></svg>
							</a>
						</div>

					</div>

					<div class="col-lg-7 col-xl-8">


						<div class="text-xxl font-weight-bold text-gray mb-3 d-lg-none">
							Часто задаваемые вопросы
						</div>

						<div class="accordion" id="accordionFAQ">
							<FaqItem v-for="i in 5" :key="i" :id="i" :active="i === 1" />
						</div>

						<div class="text-gray">

							<div class="text-xxl font-weight-bold mb-3 mt-5">
								Отслеживание посылок - TrackGo.ru
							</div>

							<div class="text-lg">
								Популярность онлайн-шоппинга ежедневно растет, поскольку многие товары
								со всемирных торговых площадок: Aliexpress, eBay, TaoBao, на порядок дешевле,
								а порой и качественней предлагаемых в местных магазинах. В связи с этим актуальным
								становится вопрос отслеживания посылок и почтовых отправлений,
								ведь каждому хочется найти и отследить посылку по трек номеру узнать,
								где посылка, и когда же придет груз. Попробуем разобраться, как это сделать наиболее удобно.
							</div>

							<div class="text-xl font-weight-bold mt-4">Для чего нужны идентификаторы?</div>
							<div class="text-md">Идентификатор - трек номер,  или попросто трек, - это буквенно-цифровой код, по которому отслеживается посылки от момента регистрации в почтовом отделении отправителя до конечного пункта доставки. </div>
							<div class="text-lg my-3">LO265976594CN - пример</div>
							<ul class="list-unstyled">
								<li>2 латинских букв (указывают тип отправления: мелкий/большой пакет, бандероль, пр.);</li>
								<li>9 цифр (уникальная кодовая комбинация);</li>
								<li>2 латинских букв (указывают страну-отправителя. К примеру, CN – Китай, GB – Великобритания, US – США, BY – Белоруссия, KZ - Казахстан PL – Польша, IT – Италия и т. д.).</li>
							</ul>
							<div class="jumbotron jumbotron-sm text-lg">
								Трек-номер выдается отправителю при регистрации посылки.
								Далее он сообщает его будущему получателю. С этого момента
								и можно проверять перемещение почтового отправления.
							</div>

							<div class="text-xl font-weight-bold mt-4">Как отследить трек и узнать где посылка?</div>
							<div class="mb-3">С помощью сервиса отслеживания посылок TrackGo.ru вы можете отследить международную посылку.</div>
							<div class="jumbotron jumbotron-sm text-lg">
								<ul class="list-unstyled mb-0">
									<li class="font-weight-bold">Для этого достаточно:</li>
									<li>ввести трек-номер в соответствующую строку;</li>
									<li>нажать кнопку «отследить»;</li>
									<li>подождать буквально несколько секунд, пока система обработает ваш запрос.</li>
								</ul>
							</div>

							<div class="mb-3">
								В удобной форме будет предоставлена информация о полном пути следования посылки
								(через пункт приема, сортировочные центры, к месту выдачи). Это одно из главных
								преимуществ нашего сервиса, в отличие от сайтов национальных почтовых операторов,
								где данные о бандероли указывается только в период, пока она находится в этой стране.
							</div>

							<div class="mb-3">
								Все это доступно бесплатно каждому не зарегистрированному пользователю.
								Если же вы хотите воспользоваться расширенными возможностями, рекомендуем
								зарегистрироваться на сервисе TrackGo.ru. Это не займет много времени,
								зато в дальнейшем пользоваться им будет гораздо удобнее, особенно если вам
								часто приходят отправления из-за рубежа или в пределах страны.
							</div>

							<div class="text-xl font-weight-bold mt-4">Как узнать кто перевозчик по треку?</div>
							<div class="mb-3">
								Если у клиента возникает вопрос о том, кто является перевозчиком его груза,
								то ответить на него он сможет, просто посмотрев трек посылки.
								Любые международные отправления доходят до страны получателя двумя основными путями:
							</div>
							<ul>
								<li class="mb-3">
									Через непосредственно государственные почтовые организации
									(например, в России это «Почта России», на Украине «Укрпочта»,
									в Китае - это сервисы «China Post», а в США - «USPS»), через EMS.
									Необходимый груз получатель должен будет забрать
									из указанного почтового отделения самостоятельно;
								</li>
								<li>
									Через международные курьерские организации (самыми популярными являются DHL,
									UPS и др.). В этом случае клиент может заказать доставку посылки прямо
									к себе на дом (цена за доставку в таком случае будет гораздо выше),
									или же может также забрать груз из местного почтового отделения или пункта
									самовывоза (если такой вариант предусмотрен у курьерской службы).
								</li>
							</ul>
							<div>
								Всю необходимую информацию о перевозчике указывает продавец заказанного вами товара.
								Вы можете узнать только страну, из которой отправляется товар (латинские буквы
								в конце номера отправления). Если добросовестный продавец указал и компанию,
								которая курирует груз, то вы можете проверить почтовое отправление.
							</div>

						</div>

					</div>
				</div>

			</div>
		</section>

	</div>
</template>

<script>
	import SocialButtons from "../components/SocialButtons";
	import FaqItem from "../components/FaqItem";
	import PostInfo from "../components/PostInfo";
	export default {

		name: "Home",

		components: {
			PostInfo,
			FaqItem,
			SocialButtons
		}

	}
</script>

<style scoped>

</style>
