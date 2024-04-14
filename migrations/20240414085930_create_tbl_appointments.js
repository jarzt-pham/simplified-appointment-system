const tableNames = 'tbl_appointments'

exports.up = function(knex) {
        return knex.schema.createTable(tableNames, function(table) {
                table.string('id').primary();
                table.date('date').notNullable();
                table.integer('time').notNullable();
                table.integer('duration').notNullable();
                table.dateTime('scheduling');
                table.timestamps(true, true);
            });
};


exports.down = function(knex) {
        return knex.schema.dropTable(tableNames);
};
