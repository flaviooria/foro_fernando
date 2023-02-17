import { redirect, fail } from '@sveltejs/kit';
import { verifyEmail } from '$lib/utils.js';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, fetch }) => {
		// TODO register the user
		const formData = await request.formData();
		const name = formData.get('name');
		const surname = formData.get('surname');
		const email = formData.get('email');
		const password = formData.get('password');

		if (name === '' || surname === '' || email === '' || password === '') {
			return fail(400, { invalid: true, message: 'Campos no pueden estar vacios' });
		}

		if (!verifyEmail(email)) {
			return fail(400, { invalid: true, message: 'El dominio del correo debe ser "fernando.es"', email, name, surname, password });
		}

		const user = {
			name,
			surname,
			email,
			password
		};

		// Los redirect siempre se lanzan
		const res = await fetch('/api/register', {
			body: JSON.stringify(user),
			method: 'POST',
			headers: {
				api_key: '123456789'
			}
		});

		if (res.status != 201) {
			return fail(400, {invalid: true, message: 'No se pudo registrar, intentelo de nuevo'})
		}

		throw redirect(303, '/');
	}
};
