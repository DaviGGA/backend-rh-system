const knex = require('../connection/db');

module.exports.createPoint = async ({employeeId, date, status}) => {
    const point = knex('point').insert({employee_id: employeeId, date , status});
    return point;
}

module.exports.hasPoint = async ({employeeId,date}) => {
    const point = 
        knex.
        select('id').
        from('point').
        where({employee_id: employeeId, date: date})

    return point;
}

module.exports.updatePoint = async ({employeeId, date, status}) => {
    const point =
        knex('point').
        where({employee_id: employeeId, date}).
        update({status, update_date : knex.fn.now()})

    return point
}