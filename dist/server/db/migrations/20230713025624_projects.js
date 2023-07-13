"use strict";
exports.up = (knex) => {
    return knex.schema.createTable('projects', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.string('description');
        table.string('img');
        table.string('link');
    });
};
exports.down = (knex) => {
    return knex.schema.dropTable('projects');
};
