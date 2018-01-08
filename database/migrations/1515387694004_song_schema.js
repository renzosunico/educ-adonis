'use strict'

const Schema = use('Schema')

class SongSchema extends Schema {
  up () {
    this.create('songs', (table) => {
        table.increments()
        table.string('title').notNullable()
        table.text('description', 'longtext').notNullable()
        table.timestamps()
    })
  }

  down () {
    this.drop('songs')
  }
}

module.exports = SongSchema
