const { Commission, User_Commission_Role, Role, User } = require('../models');
const { Op } = require("sequelize");

async function managerFilter (commission_name, role_id, option){
    try {
        let commission, manager;

        switch (commission_name) {
            case 'Ruangan':
                switch (option) {
                        case 'MAG':
                            commission = await Commission.findOne({where: {name: 'Ruangan MAG'}})
                            break;
                        case 'Kirana':
                            commission = await Commission.findOne({where: {name: 'Ruangan Kirana'}})
                            break;
                    }

                    manager = await User_Commission_Role.findOne({
                        where: {[Op.and]: 
                            [
                                {commission_id: commission.id}, 
                                {role_id}
                            ]
                        }, 
                        include: {
                            model: User, 
                            attributes: ['email']
                        }
                    })
                break;
        
            default:
                break;
        }
        // console.log({commission, manager});
        return {commission, manager};
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = managerFilter