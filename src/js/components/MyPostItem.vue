<template>
	<div class="my-post-card" :class="{ 'active': isActive }">
		<div class="card">
			<div class="card-body p-3 py-lg-0">
				<div class="row align-items-center">
					<div class="col-4 col-lg-auto py-lg-2 post-avatar-col order-lg-0">
						<div class="post-avatar text-center">
							<img src="img/post-avatar.png" alt="" class=" mx-auto" />
						</div>
					</div>
					<div class="col-8 col-lg-2 order-lg-2">
						<div class="post-code text-gray">
							<i class="fas fa-barcode"></i>
							<span>RA250251554FI</span>
						</div>
						<div class="post-vendor text-gray">
							<img src="img/ali.png" alt="" />
							<span>Aliexpress</span>
						</div>
					</div>
					<div class="col-12 col-lg order-lg-1">
						<div class="post-info pt-3 pt-lg-0">
							<span class="d-xl-block">Смартфон Xiaomi Redmi RU 7A RU 32ГБ, Доп. скидка 2% от 4шт.</span>
							<span class="d-xl-block">[Официальная гарантия, быстрая доставка]</span>
						</div>
					</div>
					<div class="col-12 col-lg-auto order-lg-3 pr-xl-4">
						<div class="text-sm pt-3 pt-lg-0">
							<span class="text-gray">Последнее изменение:</span>
							<span>18 февр. 13:34</span>
						</div>
						<div class="text-sm pb-3 pb-lg-0">
							<span class="text-primary font-weight-bold">Покинуло сортировочный центр</span>
						</div>
					</div>
					<div class="col col-lg-auto order-lg-4">
						<div class="row align-items-center">
							<div class="col">
								<a href="#" class="text-sm" @click.prevent="isActive = !isActive">
									<span class="d-lg-none">Посмотреть детали</span>
									<span class="expand ease"><i class="fas fa-angle-down"></i></span>
								</a>
							</div>
							<div class="col-auto">
								<ul class="list-inline mb-0">
									<li class="list-inline-item">
										<div class="dropdown">
											<button type="button" class="btn btn-link text-gray px-1"
											        data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
												<i class="fas fa-pen"></i>
											</button>
											<div class="dropdown-menu dropdown-menu-right edit-post-dropdown py-0">
												<form class="p-3">
													<div class="form-group mb-2">
														<input type="text" class="form-control form-control-sm" name="label" placeholder="Название отправления..." required />
													</div>
													<button type="submit" class="btn btn-sm btn-primary btn-block">Сохранить</button>
												</form>
											</div>
										</div>
									</li>
									<li class="list-inline-item">
										<button type="button" class="btn btn-link text-gray px-1">
											<i class="far fa-trash-alt"></i>
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="my-post-card-info">
			<PostInfo v-if="isActive" class="animated slideInUp fast mt-3" />
		</div>
	</div>
</template>

<script>
	import PostInfo from "./PostInfo"
	export default {
		name: "MyPostItem",
		components: {
			PostInfo
		},
		data() {
			return {
				isActive: this.active
			}
		},
		props: [ 'active' ]
	}
</script>
