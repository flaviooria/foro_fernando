import { error, json } from '@sveltejs/kit';
const PUBLIC_DOMAIN = process.env.PUBLIC_DOMAIN || 'localhost';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    console.log('los params son',params);
    const { id } = params;

    const res = await fetch(`http://${PUBLIC_DOMAIN}:3000/api/v1/answers/${id ?? '1'}`);
    const data = await res.json();

    if (res.status != 200) {
        throw error(res.status, data);
    }

    return json({answers: data});
};