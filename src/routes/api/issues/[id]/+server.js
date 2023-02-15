// Esta es una api parametrizada, aqui recibimos nostros desde params

import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	// Obtenemos la id que nos pasan por la ruta
	const { id } = params;
	const res = await fetch(`http://localhost:3000/api/v1/issues/${id ?? '1'}`);
	const data = await res.json();

    if (res.status != 200) {
        throw error(404,data)
    }
    return json({ issue: data });
}
