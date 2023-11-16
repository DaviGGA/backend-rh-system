const knex = require('./connection/db');


let createEmployee = knex.schema.createTable('employee', table => {
    table.increments();
    table.string('name');
    table.string('role');
    table.string('sector');
    table.double('wage');
})

// Point é falso cognato nesse caso mas resolvi deixar desse jeito mesmo 
let createPoint = knex.schema.createTable('point', table => {
    table.increments();
    table.enum('status', ['CHECKIN','PAUSE','RETURN','CHECKOUT']);
    table.timestamp('date');
    table.timestamp('update_date');
    table.integer('employee_id').unsigned();
    table.foreign('employee_id').references('employee.id');
})


function createDatabase() {
    Promise.all([createEmployee, createPoint]).then(() => {
        console.log("Tabelas criadas");
    })
}

createDatabase();



