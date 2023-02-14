<script>
	let showPassword = false;

	const handleShowPassword = () => (showPassword = !showPassword);
</script>

<section class="grid grid-cols-2">
	<section>
		<h1>Foro Fernando Responde</h1>
		<p>Únete a nuestra comunidad y se parte del compañerismo</p>
	</section>
	<section>
		<form action="">
			<label for="name">Nombre:</label>
			<input type="text" name="name" id="name" placeholder="Tú nombre" />
			<label for="surname">Apellido:</label>
			<input type="text" name="surname" id="surname" />
			<label for="email">Correo electronico:</label>
			<input type="text" name="email" id="email" />
			<label for="password">Contraseña</label>
			<input type={showPassword ? 'text' : 'password'} name="password" id="password" />
			<button on:click={handleShowPassword}>
                mostrar contraseña
            </button>
		</form>
	</section>
</section>
