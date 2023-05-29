const { Nutrition } = require('../models/nutrition');

async function createNutrition(nutritionData) {
    const nutrition = await Nutrition.create(nutritionData);
    return nutrition.toJSON();
}

async function findNutritionById(id) {
    const nutrition = await Nutrition.findByPk(id);
    return nutrition ? nutrition.toJSON() : null;
}

async function findAllNutrition() {
    const nutritions = await Nutrition.findAll();
    return nutritions.map((nutrition) => nutrition.toJSON());
}

async function updateNutritionById(id, nutritionData) {
    const [rowsAffected] = await Nutrition.update(nutritionData, {
        where: { id },
    });
    return rowsAffected === 1;
}

async function deleteNutritionById(id) {
    const rowsAffected = await Nutrition.destroy({ where: { id } });
    return rowsAffected === 1;
}

module.exports = {
    createNutrition,
    findNutritionById,
    findAllNutrition,
    updateNutritionById,
    deleteNutritionById
};
