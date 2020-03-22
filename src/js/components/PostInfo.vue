<template>
	<div class="post-info mb-4">

		<div class="row align-items-center">
			<div class="col col-lg-auto pr-0">
				<a href="#" class="btn btn-link btn-sm text-sm text-gray">
					<i class="fas fa-redo"></i>
					<span class="pl-1">Обновить</span>
				</a>
			</div>
			<div class="col-auto pl-0">
				<small class="text-gray">Последнее обновление: 2 часа</small>
			</div>
		</div>

		<div class="row">

			<div class="col-lg-8 mb-2 mb-lg-0 px-0 px-lg-3">
				<div class="card delivery-items-card">
					<div class="card-body">

						<div class="delivery-items">
							<PostInfoLogItem v-for="i in 5" :key="i" :active="i === 1" />
						</div>

						<div class="text-center pt-3 d-lg-none">
							<button type="button" class="btn btn-secondary">
								Показать все события
							</button>
						</div>

					</div>
				</div>
				<div class="d-none d-lg-block mt-4">
					<PostInfoCards />
				</div>
			</div>

			<div class="col-lg">

				<div class="list-group delivery-meta">
					<div class="list-group-item">
						<div class="row align-items-center">
							<div class="col-auto py-3">
								<div class="text-gray">
									<i class="fas fa-barcode fa-2x"></i>
								</div>
							</div>
							<div class="col delivery-meta-code pl-0 py-3">
								<span class="text-gray">80110944330814</span>
							</div>
							<div class="col-auto align-self-start">
								<LangSwitch />
							</div>
						</div>
					</div>
					<div class="list-group-item">
						<div class="row align-items-center">
							<div class="col text-gray">Страна отправки</div>
							<div class="col-auto">
								<span>Россия</span>
							</div>
						</div>
					</div>
					<div class="list-group-item">
						<div class="row align-items-center">
							<div class="col text-gray">Страна получатель</div>
							<div class="col-auto">
								<span>Россия</span>
							</div>
						</div>
					</div>
					<div class="list-group-item">
						<div class="row align-items-center">
							<div class="col text-gray">Адрес получения</div>
							<div class="col-auto">
								<span>Москва 19</span>
							</div>
						</div>
					</div>
				</div>

				<div class="d-lg-none">
					<PostInfoCards />
				</div>

				<div class="card mt-4 d-none d-lg-flex">
					<div class="card-body">
						<div class="row">
							<div class="col-auto">
								<div class="custom-control custom-switch">
									<input type="checkbox" class="custom-control-input" id="customSwitch2">
									<label class="custom-control-label" for="customSwitch2"></label>
								</div>
							</div>
							<div class="col">
								Включите уведомления чтобы моментально
								получать уведомление об изменении статуса
							</div>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="card-body">
						<div class="text-lg mb-2">Ссылка для отслеживания</div>
						<div class="input-group input-group-sm mb-3">
							<label for="track-link" class="sr-only">Ссылка для отслеживания</label>
							<input type="text" class="form-control" id="track-link" value="https://trackgo.ru/?1234567890" readonly />
							<div class="input-group-append">
								<button class="btn btn-light" type="button">
									<i class="fas fa-link"></i>
								</button>
							</div>
						</div>
						<div class="text-lg mb-2">Поделиться ссылкой</div>
						<SocialButtons />
					</div>
				</div>

			</div>

		</div>

	</div>
</template>

<script>
	import PostInfoLogItem from "./PostInfoLogItem";
	import PostInfoCards from "./PostInfoCards";
	import SocialButtons from "./SocialButtons";
	import LangSwitch from "./header/LangSwitch";
	export default {
		name: "PostInfo",
		components: {
			LangSwitch,
			SocialButtons,
			PostInfoCards,
			PostInfoLogItem
		}
	}
</script>
