/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    console.log(params.username);
    return { username: params.username};
};