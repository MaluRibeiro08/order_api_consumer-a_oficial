exports.seed = async function (knex) {
  await knex('tbl_sale').del() // Deletes ALL existing entries

  await knex('tbl_sale').insert([
    {
      external_id_sale: '245c6c72-d2e8-4242-a879-8d3a95909f70',
      date_time_sale: '2022-01-01 01:01:01',
      id_customer: 5
    },
    {
      external_id_sale: '245c6c72-d2e8-4542-a879-8d3a95909f70',
      date_time_sale: '2022-02-02 02:02:02',
      id_customer: 6
    }
  ])
}
