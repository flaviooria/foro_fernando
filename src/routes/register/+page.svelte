<script>
  import Form from '$lib/components/Form.svelte';

    // Recibimos los datos del form
    export let form;
</script>

<section class="grid grid-cols-2 w-full h-full">
	<section class="bg-primary h-screen p-5 flex justify-center items-center">
		<article class="text-4xl text-white leading-snug font-semibold">
			<h1>Foro Fernando Responde</h1>
			<p>Únete a nuestra comunidad</p>
			<p>y fomenta el compañerismo</p>
		</article>
	</section>

	<section class="bg-secondary h-screen p-3 flex justify-center items-center">
		<Form form={form} nameButton={'Registrarse'}></Form>
	</section>

</section>
