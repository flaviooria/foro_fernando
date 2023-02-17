// Cargamos el estudiante
/** @type {import('./$types').LayoutServerLoad} */
export async function load({locals}) {
    // Aquí obtenemos desde locals, que tendra el usuario seteado, el cual es pasado como argumento
    // dentro de hooks.server.js, es aquel que manejara los datos de respuesta
    // Ahora user es accesible para toda la app web.
    const { user } = locals;
    return { user };
}