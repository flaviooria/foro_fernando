<script>
	import Form from '$lib/components/Form.svelte';
	//  Obtengo los datos de +page.js
	export let data;
	// Obtengo data de +page.server.js
	export let form;

	let name = data.username;
</script>

<section class="p-5">
	<div class="text-center">
		<img
			src="https://ui-avatars.com/api/?background=BACFA9&name=laura+cabezas&rounded=true"
			class="rounded-full w-32 mb-4 mx-auto"
			alt="Avatar"
		/>
		<h5 class="text-xl font-medium leading-tight mb-2 text-white">{name}</h5>
		<p class="text-white">Rol: Estuadiante</p>
		<p class="text-white">Instituto: I.E.S Fernando III</p>
	</div>
  <section>
	<Form form={form} nameButton={'Editar'}  />
  </section>
</section>
