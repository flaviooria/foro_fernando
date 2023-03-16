import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals, request, fetch, params}) => {
		// TODO: log the user in
		// 1. Obtener el usuario en caso de que no tenga su id
		const idUser = locals.user.id;
		// 2. Obtener los datos con el request.formData()
		const form = await request.formData();
		// 3. Editar perfíl si todo esta bién, sino lanzar error
		if (!idUser) {
			return fail(400, { invalid: true, message: 'Id de usuario no pasada por parametro' });
		}

		const name = form.get('name') || locals.user.name;
		const surname = form.get('surname') || locals.user.surname;
		const email = form.get('email') || locals.user.email;
		const password = form.get('password');
		let userUpdated = {};
		if (password != '') {
			userUpdated = { name, surname, email, password };
		}
		
		userUpdated = { name, surname, email };


		const res = await fetch(`/api/me/${idUser}`, {
			method: 'PATCH',
			body: JSON.stringify(userUpdated)
		});

		const data = await res.json();

		if (res.status != 200) {
			return fail(res.status, { invalid: true, message: 'No se pudo actualizar usuario' });
		}

		const { user } = data;
		locals.user = user;

		throw redirect(302,`/home/me/${user.name}`)
	}
};
