import { fail, redirect } from '@sveltejs/kit';
import { verifyEmail } from '$lib/utils.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, fetch, cookies }) => {
		// formData puedo obtener los valores del campo del formulario
		const formData = await request.formData();

		const email = formData.get('email');
		const password = formData.get('password');

		if (email === '' || password === '') {
			return fail(400, { invalid: true, message: 'Campos no pueden estar vacios' });
		}

		if (!verifyEmail(email)) {
			return fail(400, { invalid: true, message: 'Email no tiene el dominio "fernando.es"' });
		}

		const student = {
			email,
			password
		};

		// Request a nuestra propia api, luego os enseño como esta montada
		// Ojito que si es nuestra propia api svelte te dice que debes utilizar el fetch propio que ellos tienen.
		const res = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(student),
			headers: {
                api_key: '123456789'
            }
		});

		
		if (res.status != 200) {
			return fail(res.status, {invalid: true, message: 'Fallo al iniciar sesión'});
		}
		
		// Obtengo el token al hacer la petición al login
		const data = await res.json();
		const { token } = data;

		// Añado el token que nos envia la api
		cookies.set('session', token, {
			path: '/', // Envia la cookie a cada página
			httpOnly: true, // Solo funcionara en el lado del servidor, por lo tanto no permite usar document.cookie
			sameSite: 'strict', // Solo se puede hacer peticiones desde el mismo sitio
			secure: process.env.NODE_ENV === 'production', // Enviara respuestas https en producción
			maxAge: 60 * 60 * 24 * 30 // Tiempo que dura la session guardada es de 1 mes, luego expira
		});

		throw redirect(302, '/home');
	}
};
