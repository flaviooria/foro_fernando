import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({locals}) {
    // Usamos esto para proteger la ruta y que no se pueda acceder si es que no esta logueado
    if (!locals.user) {
        throw redirect(302,'/');
    }
}