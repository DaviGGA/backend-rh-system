const knex = require('./connection/db');


let createEmployee = knex.schema.createTable('employee', table => {
    table.increments();
    table.string('name');
    table.string('cpf');
    table.string('role');
    table.string('sector');
    table.double('wage');
})

// Point é falso cognato nesse caso mas resolvi deixar desse jeito mesmo 
let createPoint = knex.schema.createTable('point', table => {
    table.increments();
    table.enum('status', ['CHECKIN','PAUSE','RETURN','CHECKOUT']);
    table.date('date');
    table.timestamp('update_date');
    table.integer('employee_id').unsigned().notNullable();
    table.foreign('employee_id').references('employee.id');
})

let createUser = knex.schema.createTable('user', table => {
    table.increments();
    table.string('username');
    table.string('password');
})

let createMessage = knex.schema.createTable('chat', table => {
    table.increments();
    table.string('message');
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('user.id');
})

function createDatabase() {
    Promise.all([createEmployee, createPoint, createUser, createMessage]).then(() => {
        console.log("Tabelas criadas");
    })
}

createDatabase();



