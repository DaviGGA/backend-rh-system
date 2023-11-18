const knex = require('../connection/db');


module.exports.createEmployee = async ({name,cpf, role, sector, wage}) => {
    const employee = knex('employee').insert({name,cpf,role,sector,wage});
    return employee;
}

module.exports.getAllEmployee = async () => {
    const employees = knex.select('*').from('employee');
    return employees;
}