const knex = require('../connection/db')

module.exports.createUser = ({username, password}) => {
    const user = knex('user').insert({username, password});
    return user;
}

module.exports.findUser = ({username}) => {
    const user = 
        knex.
        select('*').
        from('user').
        where({username}).
        limit(1)

    return user;
}