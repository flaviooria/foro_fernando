import { fail,redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	answer: async ({ request, locals }) => {
		const form = await request.formData();

		const content = form.get('content');
		const issueId = form.get('id_issue');
		const userId = locals.user.id;


		if (content === '' || issueId === '') {
			return fail(400, { invalid: true, message: 'Contenido no puede estar vacío' });
		}

		const answer = {
			content,
			student_id: userId.toString(),
			issue_id: issueId
		};

		const res = await fetch('http://127.0.0.1:3000/api/v1/answers/', {
			method: 'POST',
			body: JSON.stringify(answer),
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		});


        if (res.status != 201) {
            
            return fail(400, { invalid: true, message: 'No se pudo realizar la respuesta' });
        }

        throw redirect(302, `/home/issues/${issueId}`)
	}
};
