import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, request }) {
    return {};
}

export const actions = {
    default: async ({request, fetch}) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const category = formData.get('category');
        const asignature = formData.get('asignature');

        if (name === '' || category === '' || asignature === '') {
            return fail(400,{invalid: true, message: 'Campos no pueden estar vacios'})
        }

        const issue = {
            name,
            category,
            asignature
        };

        const res = await fetch('/api/issues', {
            method: 'POST',
            body: JSON.stringify(issue),
            headers: {
                api_key: '123456789'
            }
        })

        if (res.status != 201) {
            return fail(400,{invalid: true, message: 'Algo fallo al intentar crear el tema, intentalo de nuevo'})
        }


        throw redirect(303,'/home')
    }
}