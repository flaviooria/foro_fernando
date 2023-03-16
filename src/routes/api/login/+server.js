import { json } from '@sveltejs/kit';
import { API_KEY } from '$env/static/private';
const PUBLIC_DOMAIN = process.env.PUBLIC_DOMAIN || 'localhost';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	// Recogemos los datos del cuerpo
	const body = await request.json();

	// Validamos que tenga la api_key
	const api = request.headers.get('api_key');

	if (api != API_KEY) {
		return json({ detail: 'Invalid credentials' }, { status: 401 });
	}

	console.log('El dominio utilizado es', PUBLIC_DOMAIN);

	const res = await fetch(`http://${PUBLIC_DOMAIN}:3000/api/v1/students/signIn`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: { 'Content-type': 'application/json;charset=UTF-8' }
	});

	const data = await res.json();

	if (res.status != 200) {
		return json(res.status, data);
	}

	// Obtengo el token que la api nos manda usando el jwt
	const { access_token } = data;

	return json({ token: access_token }, { status: 200 });
}
