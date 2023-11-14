const knex = require('./connection/db');


let createEmployee = knex.schema.createTable('employee', table => {
    table.increments();
    table.string('name');
    table.string('role');
    table.string('sector');
    table.double('wage');
})

function createDatabase() {
    Promise.all([createEmployee]).then(() => {
        console.log("Tabelas criadas")
    })
}

createDatabase();



