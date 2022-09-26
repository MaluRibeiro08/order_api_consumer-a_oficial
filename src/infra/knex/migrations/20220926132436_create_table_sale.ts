exports.up = knex => knex.schema.createTable('tbl_sale', table => {
  table.increments('id_sale').primary().notNullable()
  table.uuid('external_id_sale').unique().notNullable()
  table.integer('id_customer').unsigned().notNullable()

  table.datetime('date_time_sale').notNullable()
  table.foreign('id_customer').references('id_customer').inTable('tbl_customer')
})

exports.down = knex => knex.schema.dropTable('tbl_sale')
