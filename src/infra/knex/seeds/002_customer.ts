exports.seed = async function (knex) {
  await knex('tbl_customer').del() // Deletes ALL existing entries

  await knex('tbl_customer').insert([
    {
      name_customer: 'Customer One',
      document_customer: '11111111111'
    },
    {
      name_customer: 'Customer Two',
      document_customer: '22222222222'
    }
  ])
}
