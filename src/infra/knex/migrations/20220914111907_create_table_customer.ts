exports.up = knex => knex.schema.createTable('tbl_customer', table => {
  table.increments('id_customer').primary().notNullable()

  table.string('name_customer', 100).notNullable()
  table.string('document_customer', 11).unique().notNullable()
})

exports.down = knex => knex.schema.dropTable('tbl_customer')
