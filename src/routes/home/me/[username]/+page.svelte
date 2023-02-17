<script>
	import Form from '$lib/components/Form.svelte';
	//  Obtengo los datos de +page.js
	export let data;
	// Obtengo data de +page.server.js
	export let form;

	const { user } = data;
	const { name,surname, avatar:src } = user;
</script>

<section class="p-5">
	<div class="text-center">
		<img
			{src}
			class="rounded-full w-32 mb-4 mx-auto"
			alt="Avatar"
		/>
		<h5 class="text-xl font-medium leading-tight mb-2 text-white">{name} {surname}</h5>
		<p class="text-white">Rol: Estuadiante</p>
		<p class="text-white">Instituto: I.E.S Fernando III</p>
	</div>
  <section class="flex items-center justify-center ">
	<Form form={form} nameButton={'Editar'} width={'w-5/6'} />
  </section>
</section>
