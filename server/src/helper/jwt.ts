import jwt from 'jsonwebtoken';

const createToken = () => {
    const token = jwt.sign({}, 'secret');
    return token
}

module.exports = createToken