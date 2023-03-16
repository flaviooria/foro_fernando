// Vamos a crear nuestra propia api usando otra api, que loco he, para eso creamos un +server.js y crearemos los métodos correspondientes para las peticiones
// que haga el cliente.

// Vamos a obtener nuestras variables de entorno, para eso podemos utilizar $env/static/private, pero solo funcionan el los archivos server
import { API_KEY } from '$env/static/private';
import { error, json } from '@sveltejs/kit';
const PUBLIC_DOMAIN = process.env.PUBLIC_DOMAIN || 'localhost';

/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {
	const authHeader = request.headers.get('api_key');

	if (authHeader != API_KEY) {
		return new Response(json({ message: 'Invalid credentials' }, { status: 401 }));
	}

	const res = await fetch(`http://${PUBLIC_DOMAIN}:3000/api/v1/issues/`);
	const data = await res.json();

	if (!data) {
		throw error(400, 'Not issues exists');
	}

	return json({ issues: data }, {status: 200});
}


/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const body = await request.json();

	const authHeader = request.headers.get('api_key');

	if (authHeader != API_KEY) {
		return json({ message: 'Invalid credentials' }, { status: 401 });
	}

	const res = await fetch(`http://${PUBLIC_DOMAIN}:3000/api/v1/issues/`, {
		method: 'POST',
		body: JSON.stringify(body),
        headers: {"Content-type": "application/json; charset=UTF-8"}
	});

	const data = await res.json();

	return json({ student: data }, { status: 201 });
}