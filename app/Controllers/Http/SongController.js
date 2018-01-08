'use strict'

const Song = use('App/Models/Song')

class SongController {
    async index({response}) {
        const songs = await Song.all()
        return response.send(songs.toJSON())
    }

    async store ({request, response}) {
        const song = new Song();
        const data = request.post()

        const isValid = await song.validate(data);
        if (!isValid) {
            return response.send({
                'success': false,
                'message': 'Unable to save song.',
                'errors': song.errors
            })
        }



        song.title = data.title
        song.description = data.description
        await song.save()

        return response.send({
            'success': true,
            'message': 'Song saved.'
        })
    }

    async show({request, response, params}) {
        const id = Number(params.id)
        const song = await Song.find(id)

        if (!song) {
            return response.header('Status', 404).send({
                'success': false,
                'message': 'Song not found'
            })
        }

        return response.send(song.toJSON())
    }

    async update({request, response, params}){
        const id = Number(params.id)
        const song = await Song.find(id)

        if (!song) {
            return response.header('Status', 404).send({
                'success': false,
                'message': 'Song not found'
            })
        }

        const data = request.post()
        const isValid = await song.validate(data)

        if (!isValid) {
            return response.send({
                'success': false,
                'message': 'Unable to save song.',
                'errors': song.errors
            })
        }

        await song.save()

        return response.send({
            'success': true,
            'message': 'Song updated.'
        })
    }

    async destroy({request, response, params}) {
        const id = Number(params.id)
        const song = await Song.find(id)

        if (!song) {
            return response.header('Status', 404).send({
                'success': false,
                'message': 'Song not found'
            })
        }

        await song.delete()
        return response.send({
            'success': true,
            'message': 'Song updated.'
        })
    }
}

module.exports = SongController
