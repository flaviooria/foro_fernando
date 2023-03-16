<script>
	import AnswerSection from '$lib/components/AnswerSection.svelte';

	// Obtengo la issue que me pasan por page.js
	export let data;
	let issue = data.issue;
	let answers = data.answers;


    export let form;

	const { name, category, asignature } = issue;
</script>

<section class="p-3">
	<div class="bg-terniary p-3 rounded-md">
		<h1 class="text-xl text-white font-bold my-1">{name}</h1>
		<p class="text-md text-white font-light">
			Asignatura: <span class="text-white font-medium">{asignature}</span>
		</p>
	</div>
	<AnswerSection {category} {answers}/>
	<form action="?/answer" method="post">
		<div class="flex">
			<div class="mb-3 w-5/6">
                {#if form?.invalid}
                    <p class="mb-2 text-orange-300">{form?.message}</p>
                {/if}
				<label for="content" class="form-label inline-block mb-2 text-white text-lg"
					>Indica tú respuesta</label
				>
				<textarea
					class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-primary
                  bg-white bg-clip-padding
                  border-4 border-primary
                  rounded
                  m-0
                  resize-none
                  outline-none
                "
                    name="content"
					id="content"
					rows="3"
					placeholder="Escribe o pega tu contenido"
				/>
			</div>
		</div>
        <button class="bg-white p-3 w-5/6 rounded-sm text-primary text-lg hover:bg-terniary hover:text-white hover:transition-all hover:ease-in hover:duration-700 duration-300 mt-3" type="submit">Realizar respuesta</button>
	</form>
</section>
