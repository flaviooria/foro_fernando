<script>
    // Obtengo la data que nos ha pasado el layout.server principal
    export let data;

    const { user } = data;

</script>

<section class="grid grid-cols-3 w-full min-h-screen h-full">
	<section class="bg-primary h-full p-5 flex justify-center items-center col-span-1">
		<article class="text-3xl text-white leading-snug font-semibold">
			<h1>Foro Fernando Responde</h1>
			<p>Únete a nuestra comunidad</p>
			<p>y fomenta el compañerismo</p>
		</article>
	</section>
    <section class="col-span-2 bg-secondary h-full">
        <nav class="bg-[#89A178] p-5 shadow-md shw flex justify-between items-center">
            <div>
                <a class="mx-3 text-primary hover:text-green-800" href="/home">Home</a>
                <a class="mx-3 text-primary hover:text-green-800" href="/home/me/{user.name}">Perfíl</a>
                <a class="mx-3 text-primary hover:text-green-800" href="/home/issues/create">Crear issue</a>
            </div>
            <div>
                <form class="mx-3 text-primary hover:text-white bg-white py-3 px-1 rounded-md hover:bg-terniary" action="/logout" method="post">
                    <button type="submit">Cerrar Sesión</button>
                </form>
            </div>
        </nav>
        <slot />

    </section>
</section>



