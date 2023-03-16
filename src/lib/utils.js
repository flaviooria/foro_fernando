/**
 * Función que verífica si el dominio que tiene coincide con el que esta pre establecido
 * @param {string} email
 */
function verifyEmail(email, domain = 'fernando.es') {
	const posAt = email.indexOf('@');
	return email.substring(posAt + 1) === domain;
}

/**
 * 
 * @param {string} word 
 * @returns Retorna la palabra con la primera letra en mayuscula.
 */
const capitalizeString = (word) => {
	return word[0].toUpperCase() + word.substring(1);
};

export { verifyEmail, capitalizeString };
