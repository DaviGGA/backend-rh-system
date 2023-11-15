const service = require('./service');

module.exports.createEmployee = async (req ,res) => {
    let {
        name,
        role,
        sector,
        wage
    } = req.body;

    const employeeId = await service.createEmployee({name,role,sector,wage});
    

    res.status(200).send({message: "Funcionário criado com sucesso",  id: employeeId[0]});
}