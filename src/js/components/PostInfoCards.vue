<template>
	<div class="row mt-2 mt-lg-0 text-center delivery-cards">

		<div class="col-6 col-lg pr-1 pr-lg-2 h-100">
			<div class="card">
				<div class="card-body">
					<div class="caption text-gray caption mb-2">
						Используйте личный кабинет,
						чтобы сохранять и отслеживать все ваши посылки
					</div>
					<a href="#" class="btn btn-sm btn-outline-primary">
						<SvgSignIn class="icon" />
						<span>Войти</span>
					</a>
				</div>
			</div>
		</div>

		<div class="col-6 col-lg pl-1 pl-lg-2 order-lg-last">
			<div class="card">
				<div class="card-body">
					<div class="caption text-gray caption mb-2">
						Если вы много времени проводите
						в мессенджерах, используйте нашего телеграм бота
					</div>
					<a href="#" class="btn btn-sm btn-outline-secondary font-weight-normal">
						<SvgTelegramIcon class="icon-lg" />
						<span>@TrackGoBot</span>
					</a>
				</div>
			</div>
		</div>

		<div class="col-12 col-lg mt-2 mt-lg-0 px-lg-2">
			<div class="card">
				<div class="card-body">
					<div class="caption text-gray caption mb-2">
						Если вы часто просматривайте посылки с телефона,
						установите удобнее приложение
					</div>
					<GooglePlayButton />
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	import SvgSignIn from "../../svg/sign-in.svg"
	import SvgTelegramIcon from "../../svg/icontelegram.svg"
	import GooglePlayButton from "./header/GooglePlayButton";
	export default {
		name: "PostInfoCards",
		components: {
			GooglePlayButton,
			SvgSignIn,
			SvgTelegramIcon
		}
	}
</script>
