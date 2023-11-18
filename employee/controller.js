const service = require('./service');

module.exports.createEmployee = async (req ,res) => {
    let {
        name,
        cpf,
        role,
        sector,
        wage
    } = req.body;

    const employeeId = await service.createEmployee({name, cpf, role, sector, wage});
    

    res.status(200).send({message: "Funcionário criado com sucesso",  id: employeeId[0]});
}

module.exports.getAllEmployee = async (req, res) => {
    const employees = await service.getAllEmployee();
    
    res.status(200).send(employees);
}