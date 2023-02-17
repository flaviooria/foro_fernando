import { json } from '@sveltejs/kit';
import { API_KEY } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	// Recogemos los datos del cuerpo
	const body = await request.json();

	// Validamos que tenga la api_key
	const api = request.headers.get('api_key');

	if (api != API_KEY) {
		return json({ detail: 'Invalid credentials' }, { status: 401 });
	}

	const res = await fetch('http://127.0.0.1:3000/api/v1/students/signIn', {
		method: 'POST',
		body: JSON.stringify(body),
		headers: { 'Content-type': 'application/json;charset=UTF-8' }
	});

	const data = await res.json();

	if (res.status != 200) {
		return json(res.status, data);
	}

	const { access_token } = data;

	return json({ token: access_token }, { status: 200 });
}
