import { fail, redirect } from '@sveltejs/kit';
const PUBLIC_DOMAIN = process.env.PUBLIC_DOMAIN || 'localhost';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	answer: async ({ request, locals, params }) => {
		console.log('los params son', params);
		const form = await request.formData();

		const content = form.get('content'); // Contenido de la respuesta
		const issueId = params.id; // Id de la issue que esta pasada como parametro en la url
		const userId = locals.user.id; // Id del usuario que  esta realizando la respuesta

		if (content === '' || issueId === '') {
			return fail(400, { invalid: true, message: 'Contenido no puede estar vacío' });
		}

		const answer = {
			content,
			student_id: userId,
			issue_id: issueId
		};

		const res = await fetch(`http://${PUBLIC_DOMAIN}:3000/api/v1/answers/`, {
			method: 'POST',
			body: JSON.stringify(answer),
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		});

		if (res.status != 201) {
			return fail(400, { invalid: true, message: 'No se pudo realizar la respuesta' });
		}

		throw redirect(302, `/home/issues/${issueId}`);
	}
};
