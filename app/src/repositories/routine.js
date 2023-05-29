const { Routine } = require('../models');

async function createRoutine(routineData) {
    const routine = await Routine.create(routineData);
    return routine.toJSON();
}

async function findRoutineById(id) {
    const routine = await Routine.findByPk(id);
    return routine ? routine.toJSON() : null;
}

async function findAllRoutines() {
    const routines = await Routine.findAll();
    return routines.map((routine) => routine.toJSON());
}

async function updateRoutineById(id, routineData) {
    const [rowsAffected] = await Routine.update(routineData, {
        where: { id },
    });
    return rowsAffected === 1;
}

async function deleteRoutineById(id) {
    const rowsAffected = await Routine.destroy({ where: { id } });
    return rowsAffected === 1;
}

module.exports = {
    createRoutine,
    findRoutineById,
    findAllRoutines,
    updateRoutineById,
    deleteRoutineById,
};
