
const tableNames = 'tbl_settings'

exports.up = function(knex) {
        return knex.schema.createTable(tableNames, function(table) {
                table.string('id').primary();
                table.string('name').notNullable().unique();
                table.jsonb('value').notNullable();
                table.timestamps(true, true);
            });
};


exports.down = function(knex) {
        return knex.schema.dropTable(tableNames);
};
