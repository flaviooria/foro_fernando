// Esta es una api parametrizada, aqui recibimos nostros desde params

import { error, json } from '@sveltejs/kit';
const PUBLIC_DOMAIN = process.env.PUBLIC_DOMAIN || 'localhost';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	// Obtenemos la id que nos pasan por la ruta
	const { id } = params;

	// Obtenemos la issue
	const res = await fetch(`http://${PUBLIC_DOMAIN}:3000/api/v1/issues/${id ?? '1'}`);
	const data = await res.json();

	if (res.status != 200) {
		throw error(404, data);
	}

	return json({ issue: data });
}
