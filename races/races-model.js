const db = require('../data/dbConfig');

module.exports = {
    add,
    remove,
    getAll
};

async function add(race) {
    const [id] = await db('races').insert(race, 'id');
    return db('races').where({id}).first();
};

function remove(id) {
    return db('races').where('id', id).del();
};

function getAll() {
    return db('races');
};