const argon2 = require('argon2');

const hashPassword = async (password) => {
    try {
        return await argon2.hash(password);
    } catch (err) {
        throw new Error('Error hashing password');
    }
};

const verifyPassword = async (password, hash) => {
    try {
        return await argon2.verify(hash, password);
    } catch (err) {
        throw new Error('Error verifying password');
    }
};

module.exports = {
    hashPassword,
    verifyPassword
};
