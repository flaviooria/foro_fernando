/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		// TODO: log the user in
		console.log(event);
        // 1. Obtener el usuario en caso de que no tenga su id
        // 2. Obtener los datos con el request.formData()
        // 3. Editar perfíl si todo esta bién, sino lanzar error
	}
};
