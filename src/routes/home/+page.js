/** @type {import('./$types').PageLoad} */
export async function load({ fetch}) {
	// petición a issues para cargar en el home
	const response = await fetch('/api/issues', {
		headers: {
			api_key: '123456789'
		}
	});

    const data = await response.json();
	return { issues: data.issues };
}
