<template>
	<header id="header">
		<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top py-2 py-lg-0">
			<div class="container">

				<div class="row w-100 mx-0 align-items-center">

					<div class="col col-lg-auto pl-0">
						<a class="navbar-brand" href="#">
							<img src="img/logo.png" alt="" />
						</a>
					</div>

					<div class="col">
						<Drawer />
					</div>

					<div class="col-auto">
						<DropdownAuth />
					</div>

					<div class="col-auto px-0 d-lg-none">
						<button type="button" class="btn btn-link drawer-toggle px-0"
						        @click="$root.$emit('drawer', true)">
							<SvgDrawerToggle />
						</button>
					</div>

				</div>

			</div>
		</nav>
	</header>
</template>

<script>
	import Drawer from "../components/header/Drawer";
	import SocialButtons from "../components/SocialButtons";
	import DropdownAuth from "../components/header/DropdownAuth";
	import SvgDrawerToggle from "../../svg/menu.svg"
	export default {

		name: "Header",

		components: {
			DropdownAuth,
			SocialButtons,
			Drawer,
			SvgDrawerToggle
		}

	}
</script>
