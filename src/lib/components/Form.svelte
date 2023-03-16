<script>
    // Recibimos los datos del form
    export let form;
	export let nameButton = '';
	export let width = 'w-2/3';

    let showPassword = false;
    const handleShowPassword = () => (showPassword = !showPassword);
</script>

<form class="flex flex-col {width}" method="post">
	<label class="text-white text-xl font-medium my-3" for="name">Nombre:</label>
	<input class="p-3 rounded-sm text-primary text-lg" type="text" name="name" id="name" placeholder="tú nombre" value={form?.name ?? ''}/>
	<label class="text-white text-xl font-medium my-3" for="surname">Apellido:</label>
	<input class="p-3 rounded-sm text-primary text-lg" type="text" name="surname" id="surname" placeholder="tú apellido" value={form?.surname ?? ''}/>
	<label class="text-white text-xl font-medium my-3" for="email">Correo electronico:</label>
	<input class="p-3 rounded-sm text-primary text-lg" type="text" name="email" id="email" placeholder="example@fernando.com" value={form?.email ?? ''} />
	<label class="text-white text-xl font-medium mt-3" for="password">Contraseña</label>
	<div class="flex items-center my-3">
		<input class="p-3 rounded-sm text-primary text-lg mr-8 w-full" type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="contraseña" value={form?.password ?? ''} />
		<button on:click={handleShowPassword} type="button">
			<img src="/images/invisible.png" alt="hide_password">
		</button>
	</div>
	{#if form?.invalid}
		<p class="text-orange-300 mt-1">{form?.message}</p>
	{/if}
	<button class="bg-white p-3 rounded-sm text-primary text-lg hover:bg-terniary hover:text-white hover:transition-all hover:ease-in hover:duration-700 duration-300 mt-3" type="submit">
		{nameButton}
	</button>
</form>

