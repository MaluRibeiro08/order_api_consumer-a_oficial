exports.up = knex => knex.schema.createTable('tbl_sale_item', table => {
  table.increments('id_sale_item').primary().notNullable()
  table.integer('id_sale').unsigned().notNullable()
  table.integer('id_item').unsigned().notNullable()

  table.integer('amount').notNullable()
  table.foreign('id_sale').references('id_sale').inTable('tbl_sale')
  table.foreign('id_item').references('id_item').inTable('tbl_item')
})

exports.down = knex => knex.schema.dropTable('tbl_sale_item')
