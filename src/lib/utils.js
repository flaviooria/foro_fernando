/**
 * Función que verífica si el dominio que tiene coincide con el que esta pre establecido
 * @param {string} email
 */
function verifyEmail(email, domain = 'fernando.es') {
	const posAt = email.indexOf('@');
	return email.substring(posAt + 1) === domain;
}

export { verifyEmail };
