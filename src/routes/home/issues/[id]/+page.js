/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const { id } = params;

	const res = await fetch(`/api/issues/${id ?? '1'}`);
	const data = await res.json();

	return { issue: data.issue };
}
