import { json } from '@sveltejs/kit';
import { API_KEY } from '$env/static/private';
const PUBLIC_DOMAIN = process.env.PUBLIC_DOMAIN || 'localhost';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const body = await request.json();

	const authHeader = request.headers.get('api_key');

	if (authHeader != API_KEY) {
		return json({ message: 'Invalid credentials' }, { status: 401 });
	}

	const res = await fetch(`http://${PUBLIC_DOMAIN}:3000/api/v1/students/signUp`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: { 'Content-type': 'application/json; charset=UTF-8' }
	});

	const data = await res.json();

	return json({ student: data }, { status: 201 });
}
