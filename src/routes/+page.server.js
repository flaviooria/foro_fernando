import { fail, redirect } from '@sveltejs/kit';
import { verifyEmail } from '$lib/utils.js'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();

        const email = formData.get('email');
        const password = formData.get('password');

        if (email === '' || password === '') {
            return fail(400,{invalid: true,message: 'Campos no pueden estar vacios'})
        }

        if (!verifyEmail(email)) {
            return fail(400, {invalid: true, message: 'Email no tiene el dominio "fernando.es"'})
        }

        throw redirect(303,'/home')
    }
}