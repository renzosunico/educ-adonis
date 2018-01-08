'use strict'

const Model = use('Model')

class Singer extends Model {
	static get table () {
		return 'singers'
	}

	static get primaryKey () {
		return 'id'
	}
}

module.exports = Singer
