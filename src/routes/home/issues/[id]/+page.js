/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const { id } = params;

	const res = await fetch(`/api/issues/${id ?? '1'}`);
	const data = await res.json();

	const res_answer = await fetch(`/api/answers/${id ?? '1'}`);
	const data_answer = await res_answer.json();

	return { issue: data.issue, answers: data_answer.answers };
}
