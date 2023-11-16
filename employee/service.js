const knex = require('../connection/db');


module.exports.createEmployee = async ({name, role, sector, wage}) => {
    const employee = knex('employee').insert({name,role,sector,wage},['id','name']);
    return employee;
}

module.exports.getAllEmployee = async () => {
    const employees = knex.select('*').from('employee');
    return employees;
}