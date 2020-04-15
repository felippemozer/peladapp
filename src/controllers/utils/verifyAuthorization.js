

module.exports = function verifyAuthorization(request) {
    const auth = request.headers.authorization;
    const { id } = request.params;

    if(auth !== id) {
        return false;
    }

    return true;
}