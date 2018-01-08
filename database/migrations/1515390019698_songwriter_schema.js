'use strict'

const Schema = use('Schema')

class SongwriterSchema extends Schema {
  up () {
    this.create('songwriters', (table) => {
      table.increments()
      table.string('first_name')
      table.string('last_name')
      table.timestamps()
    })
  }

  down () {
    this.drop('songwriters')
  }
}

module.exports = SongwriterSchema
