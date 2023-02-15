/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch('/api/issues', {
		headers: {
			api_key: '123456789'
		}
	});

    const data = await response.json();
	return { issues: data.issues };
}
