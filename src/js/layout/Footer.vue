<template>
	<footer id="footer" class="bg-light-gray">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 mb-4 mb-md-0">
					<img src="img/logo.png" class="logo" alt="TrackGo" />
					<div class="text-sm text-gray mt-4">
						<div class="mb-3">Trackgo.ru - отслеживание отправлений по всему миру</div>
						<div>
							Сервис Trackgo.ru уже полноценно отслеживает регистрируемые почтовые отправления
							США, Китая, России, Сингапура, Японии, Польши, Франции, Беларуси, Украины
							и Казахстана, Германии, Великобритании, Кореи и других стран.
						</div>
					</div>
				</div>
				<div class="col-lg-4 d-none d-lg-block">
					<div class="text-lg">Отслеживание посылок</div>
					<ul class="list-unstyled mb-0">
						<li><a href="#">с Алиэкспресс</a></li>
						<li><a href="#">с Joom</a></li>
						<li><a href="#">Пандао</a></li>
						<li><a href="#">ASOS</a></li>
						<li><a href="#">с GearBest</a></li>
						<li><a href="#">Почта России</a></li>
						<li><a href="#">SF-Express на русском</a></li>
						<li><a href="#">ePacket на русском</a></li>
						<li><a href="#">Почты Малайзии POS Malaysia на русском</a></li>
						<li><a href="#">с Ebay</a></li>
					</ul>
				</div>
				<div class="col-lg">
					<div class="text-lg">Контакты</div>
					<SocialButtons />
					<a href="mailto:webmaster@trackgo.ru" class="text-gray text-clear">
						webmaster@trackgo.ru
					</a>
				</div>
			</div>
			<div class="box animated pulse infinite slow"></div>
		</div>
	</footer>
</template>

<script>
	import SocialButtons from "../components/SocialButtons";
	export default {

		name: "Footer",

		components: {
			SocialButtons
		}

	}
</script>

<style scoped>

</style>
