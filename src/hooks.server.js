//Los "hooks" son funciones de la aplicación que declaras que SvelteKit llamará en respuesta a eventos específicos, dándote un control preciso sobre el comportamiento del framework.
/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	// Obtengo la sesión de las cookies que ha sido pasada previamente al hacer login
	const session = event.cookies.get('session');

	if (!session) {
		// Carga como una página normal ya que no hay ninguna sesión
		return resolve(event);
	}

	// Hago una petición a la api, que si el token que se le pasa es valido me devuelve el usuario que 
	// corresponda con este
	const res = await fetch('http://127.0.0.1:3000/api/v1/students/me', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			'Authorization': `Bearer ${session}`
		}
	});

	
	if (res.status === 200) {
		const user = await res.json();
		// Asignamos a locals el usuario
		event.locals.user = user;
	}

	return resolve(event);
};
