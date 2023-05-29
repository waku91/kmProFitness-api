const { Role } = require('../models/role.js');

async function createRole(roleData) {
    const role = await Role.create(roleData);
    return role.toJSON();
}

async function findRoleById(id) {
    const role = await Role.findByPk(id);
    return role ? role.toJSON() : null;
}

async function findAllRoles() {
    const roles = await Role.findAll();
    return roles.map((role) => role.toJSON());
}

async function updateRoleById(id, roleData) {
    const [rowsAffected] = await Role.update(roleData, {
        where: { id },
    });
    return rowsAffected === 1;
}

async function deleteRoleById(id) {
    const rowsAffected = await Role.destroy({ where: { id } });
    return rowsAffected === 1;
}

module.exports = {
    createRole,
    findRoleById,
    findAllRoles,
    updateRoleById,
    deleteRoleById
};
