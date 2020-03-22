<template>
	<div class="card">
		<div class="card-header" :id="'accordionFAQh'+id">
			<h2 class="mb-0">
				<button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#accordionFAQc'+id"
				        :aria-expanded="active ? 'true' : 'false'" :aria-controls="'accordionFAQh'+id">
					Collapsible Group Item #{{ id }}
					<span class="expand"><i class="fas fa-angle-down"></i></span>
				</button>
			</h2>
		</div>
		<div :id="'accordionFAQc'+id" class="collapse"
		     :class="{ 'show': active }"
		     :aria-labelledby="'accordionFAQh'+id"
		     data-parent="#accordionFAQ">
			<div class="card-body">
				Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
				3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
				Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
				Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
				Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
				raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
			</div>
		</div>
	</div>
</template>

<script>
	export default {

		name: "FaqItem",

		props: [ 'id', 'active' ]

	}
</script>
