<script>
	import AnswerSection from '../../lib/components/AnswerSection.svelte';

	// Recibo la data que me ha enviado mi +page.js que obtiene los datos de la api
	export let data;

	let issues = data.issues ?? [];
	let querySearch = '';
	let filteredIssues = [];

	$: if (querySearch.length > 2) {
		filteredIssues = issues.filter(({ name }) =>
			name.toLowerCase().includes(querySearch.toLowerCase())
		);
	} else {
		filteredIssues = issues;
	}
</script>

<section class="p-3">
	<section class="grid grid-cols-1">
		<input
			class="text-xl p-2 my-5 w-full rounded-md outline-none text-primary placeholder:text-primary"
			type="search"
			name="query_issue"
			id="issue"
			placeholder="Busca la duda que quieras"
			bind:value={querySearch}
		/>
		{#if filteredIssues.length > 0}
			<p class="text-xl text-white">Mostrando {filteredIssues.length} resultados:</p>
			{#each filteredIssues as { id, name, date } (id)}
				<!-- content here -->
				<a
					class="text-xl my-3 p-2 w-full bg-primary rounded-md outline-none text-white"
					href="home/issues/{id}"
				>
					<p>{name}</p>
					<p>Fecha:{date}</p>
				</a>
			{/each}
		{:else}
			<p>Sin datos</p>
		{/if}
	</section>
</section>
