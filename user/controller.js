const { use } = require('..');
const service = require('./service');
const bcrypt = require('bcrypt');

module.exports.createUser = async (req, res) => {
    let {
        username,
        password
    } = req.body;

    const hasUser = await service.findUser({username});

    if (hasUser.length > 0) {
        res.status(409).send({message: `User ${username} alrealdy exists!`});
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await service.createUser({username, password: hashedPassword});
    res.status(201).send({user});
}