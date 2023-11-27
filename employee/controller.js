const service = require('./service');
const _ = require('lodash');

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

module.exports.getPercentWagePerSector = async (req, res) => {
    const employees = await service.getAllEmployee();
    
    let employeeSector = _.groupBy(employees,'sector');
    employeeSector = _.map(employeeSector,  e => e);

    let totalWage = _.sumBy(employees,'wage');

    let wagePerSector = [];

    for (let sector of employeeSector) {
        let wageSector = _.sumBy(sector,'wage');

        let percentSector = {
            percent: wageSector / totalWage,
            sector: sector[0].sector
        }

        wagePerSector.push(percentSector);
    }

    res.status(200).send({wagePerSector})
    
}

module.exports.getTotalWage = async (req, res) => {
    const employees = await service.getAllEmployee();
    const totalWage = _.sumBy(employees, 'wage');
    res.status(200).send({totalWage});
}