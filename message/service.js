const knex = require('../connection/db');

module.exports.createMessage = ({content,userId}) => {
    let message = knex('message').insert({content,user_id: userId});
    return message;
}

module.exports.getAllMessage = () => {
    let messages = 
        knex.
        select('content','user.username').
        from('message').
        join('user', 'message.user_id', 'user.id');

    return messages;
}