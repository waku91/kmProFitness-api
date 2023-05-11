const { Size } = require('../models');

async function createSize(sizeData) {
    const size = await Size.create(sizeData);
    return size.toJSON();
}

async function findSizeById(id) {
    const size = await Size.findByPk(id);
    return size ? size.toJSON() : null;
}

async function findAllSizes() {
    const sizes = await Size.findAll();
    return sizes.map((size) => size.toJSON());
}

async function updateSizeById(id, sizeData) {
    const [rowsAffected] = await Size.update(sizeData, {
        where: { id },
    });
    return rowsAffected === 1;
}

async function deleteSizeById(id) {
    const rowsAffected = await Size.destroy({ where: { id } });
    return rowsAffected === 1;
}


module.exports = {
    createSize,
    findSizeById,
    findAllSizes,
    updateSizeById,
    deleteSizeById
};
