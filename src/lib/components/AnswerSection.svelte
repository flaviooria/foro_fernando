<script>
	export let category = '';
	
	let listCategories = [];

	if (category.includes(',')) {
		listCategories = category.split(',');
	} else {
		listCategories.push(category);
	}
</script>

<main class="my-3 px-3 grid grid-cols-3">
	<article class="col-span-2">
		<h3 class="text-2xl text-white font-bold mb-6 ml-3">Respuestas recientes</h3>
		<ol class="border-l-2 border-primary">
			<li>
				<div class="md:flex flex-start">
					<div class="bg-primary w-6 h-6 flex items-center justify-center rounded-full -ml-3">
						<div>
							<img
								src="https://ui-avatars.com/api/?background=BACFA9&name=Flavio+Oria&rounded=true"
								alt="avatar"
							/>
						</div>
					</div>
					<div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 w-full">
						<div class="flex justify-between mb-4">
							<p class="font-medium text-primary text-sm">Título</p>
							<p class="font-medium text-primary text-sm">Fecha: 04/02/2022</p>
						</div>
						<p class="text-gray-700 mb-6">Contenido</p>
						<button
							type="button"
							class="inline-block px-4 py-1.5 bg-terniary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
							data-mdb-ripple="true">Mas contenido</button
						>
						<button
							type="button"
							class="inline-block px-3.5 py-1 border-2 border-primary text-primary font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
							data-mdb-ripple="true">See demo</button
						>
					</div>
				</div>
			</li>
		</ol>
	</article>
	<aside class="col-span-1">
		<h1 class="text-2xl text-white font-bold mb-6">Categorías</h1>
		<div class="my-6">
			<ul class="bg-white rounded-lg border border-primary  text-primary">
				{#each listCategories as category, index}
					{#if index != listCategories.length - 1}
						<li class="p-3 border-b border-primary w-full rounded-t-lg">
							{category}
						</li>
					{:else}
						<li class="p-3 w-full rounded-t-lg">
							{category}
						</li>
					{/if}
					
				{/each}
			</ul>
		</div>
	</aside>
</main>

