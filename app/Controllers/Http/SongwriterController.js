'use strict'

const Songwriter = use('App/Models/Songwriter')

class SongwriterController {
   async index({response}) {
        let songwriters = await Songwriter.all()
        return response.json(songwriters)
    }

    async show({params, response}) {
        const songwriters = await Songwriter.find(params.id)
        return response.json(songwriters)
    }

    async create ({request, response}) {
        const songwritersInfo = request.only(['first_name', 'last_name'])

        const songwriters = new Songwriter()
        songwriters.first_name = songwritersInfo.first_name
        songwriters.last_name = songwritersInfo.last_name

        await songwriters.save()

        return response.status(201).json(songwriters)
    }

    async update({request, response, params}) {
        const songwritersInfo = request.only(['first_name', 'last_name'])

        const songwriters = await Songwriter.find(params.id)
        if (!songwriters) {
            return response.status(404).json({data: 'Resource not found'})
        }
        songwriters.first_name = songwritersInfo.first_name
        songwriters.last_name = songwritersInfo.last_name

        await songwriters.save()

        return response.status(200).json(songwriters)
    }

    async delete ({params, response}) {
        const songwriters = await Songwriter.find(params.id)
        if (!songwriters) {
          return response.status(404).json({data: 'Resource not found'})
        }
        await songwriters.delete()

        return response.status(204).json(null)
      }
}

module.exports = SongwriterController
