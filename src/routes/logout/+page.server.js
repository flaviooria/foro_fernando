import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// Nosotros solo usamos esta ruta para redireccionar al incio y no se necesita ver la página
	throw redirect(302, '/');
}


/** @type {import('@sveltejs/kit').Actions} */
export const actions = {
	default: async ({ cookies }) => {
		cookies.set('session', '', {
			expires: new Date(0)
		});

		throw redirect(302, '/');
	}
};
