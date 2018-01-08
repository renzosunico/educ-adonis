'use strict'

const Model = use('Model')
const { validate } = use('Validator')

class Song extends Model {
    get rules() {
        return {
            'title': 'required',
            'description': 'required'
        }
    }

    async validate(data) {
        const validation = await validate(data, this.rules);

        if (validation.fails()) {
            this.errors = validation.messages()
            return false
        }

        return true
    }
}

module.exports = Song
