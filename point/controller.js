const service = require('./service');

module.exports.setPoint = async (req, res) => {
    let {
        employeeId,
        status,
        date
    } = req.body;

    let hasPoint = (await service.hasPoint({employeeId,date})).length > 0;
    
    if (hasPoint) {
        let point = await service.updatePoint({employeeId,date,status});
        res.status(200).send({point});
    } else {
        let point = await service.createPoint({employeeId,date,status});
        res.status(201).send({point});
    }

}