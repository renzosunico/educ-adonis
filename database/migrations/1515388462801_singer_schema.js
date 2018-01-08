'use strict'

const Schema = use('Schema')

class SingerSchema extends Schema {
  up () {
    this.create('singers', (table) => {
      table.increments()
      table.string('firstName').notNullable()
      table.string('lastName').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('singers')
  }
}

module.exports = SingerSchema
