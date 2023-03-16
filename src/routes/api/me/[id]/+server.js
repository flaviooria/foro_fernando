import { error, json } from '@sveltejs/kit';
const PUBLIC_DOMAIN = process.env.PUBLIC_DOMAIN || 'localhost';

/** @type {import('./$types').RequestHandler} */
export async function PATCH({ request, params }) {
	const body = await request.json();
	const idUser = params.id;

	console.log(idUser);
	console.log(body);

	const res = await fetch(`http://${PUBLIC_DOMAIN}:3000/api/v1/students/${idUser}`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		headers: { 'Content-type': 'application/json;charset=UTF-8' }
	});

	const data = await res.json();

	if (res.status != 200) {
		throw error(res.status, data);
	}

	return json({user: data}, { status: 200 });
}
