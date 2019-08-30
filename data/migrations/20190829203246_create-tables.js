
exports.up = function(knex) {
    return knex.schema.createTable('races', tbl => {
        tbl.increments();
        tbl.string('race', 128)
            .notNullable()
            .unique();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('races');
};
