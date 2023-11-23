const service = require('./service');

module.exports.createMessage = async (req, res) => {
    let {
        content,
        userId
    } = req.body;

    let message = await service.createMessage({content,userId})
    res.status(201).send({message});
}

module.exports.getAllMessages = async (req, res) => {
    let messages = await service.getAllMessage();
    res.status(200).send({messages});
}
