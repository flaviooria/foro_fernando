<script>
    // Recibimos los datos del form
    export let form;
    console.log(form);

    let showPassword = false;
    const handleShowPassword = () => (showPassword = !showPassword);
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
		<form class="flex flex-col w-2/3" method="post">
			<label class="text-white text-xl font-medium my-3" for="email">Correo electronico:</label>
			<input class="p-3 rounded-sm text-primary text-lg" type="text" name="email" id="email" placeholder="example@fernando.es"/>
			{#if form?.user}
                <p class="text-orange-300 my-3">Correo ya registrado</p>
            {/if}
			<label class="text-white text-xl font-medium mt-3" for="password">Contraseña</label>
			<div class="flex items-center justify-between my-3">
				<input class="p-3 rounded-sm text-primary text-lg w-full mr-5" type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="contraseña"/>
				<button on:click={handleShowPassword} type="button">
					<img src="/images/invisible.png" alt="hide_password">
				</button>
			</div>
			<a class="text-white underline my-3" href="/register">Aún no estas registrado, que esperas !</a>
			{#if form?.invalid}
                <p class="text-orange-300 my-3">{form?.message}</p>
            {/if}
			<button class="bg-white p-3 rounded-sm text-primary text-lg hover:bg-terniary hover:text-white hover:transition-all ease-in-out hover:duration-700 duration-700 mt-3" type="submit">
				Iniciar Sesión
			</button>
		</form>
	</section>

</section>
