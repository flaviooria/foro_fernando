<script>
	export let form;

	let asignaturas = [
		{ id: 0, name: 'DAW' },
		{ id: 1, name: 'DAM' }
	];

	let selected;
</script>

<section class="p-5">
	<h1 class="text-2xl text-white font-medium">Realiza tu consulta</h1>
	<form class="flex flex-col w-full" method="post">
		<label class="text-white text-xl font-medium my-3" for="name">Nombre del tema:</label>
		<input
			class="p-3 rounded-sm text-primary text-lg"
			type="text"
			name="name"
			id="name"
			placeholder="Tú pregunta?"
			value={form?.name ?? ''}
		/>
		<label class="text-white text-xl font-medium my-3" for="name">Categoría</label>
		<input
			class="p-3 rounded-sm text-primary text-lg"
			type="text"
			name="category"
			id="category"
			placeholder="Python, Svelte, web"
			value={form?.category ?? ''}
		/>
		<label class="text-white text-xl font-medium my-3" for="name">Asignatura:</label>
		<select
			class="form-select appearance-none
        block
        w-full
        px-3
        py-1.5
        text-lg
        font-normal
        text-primary
        bg-white
        hover:bg-primary hover:bg-opacity-75
        outline-none
        rounded
        transition
        ease-in-out
        m-0"
			name="asignature"
			id="asignature"
			bind:value={selected}
		>
			{#each asignaturas as asignature}
				<!-- content here -->
				<option value={asignature.name}>
					{asignature.name}
				</option>
			{/each}
		</select>
		<button
			class="bg-white p-3 rounded-sm text-primary text-lg hover:bg-terniary hover:text-white hover:transition-all hover:ease-in hover:duration-700 duration-300 mt-5"
			type="submit"
		>
			Crear tema
		</button>
	</form>
</section>
