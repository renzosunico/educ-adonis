'use strict'

const Singer = use ('App/Models/Singer')

class SingerController {
	async index ({response}) {
		let singers = await Singer.all()
		return response.json(singers)
	}

	async show ({params, response}) {
		const singer = await Singer.find(params.id)
		return response.json(singer)
	}

	async store ({request, response}) {
		const singerInfo = request.only(['firstName', 'lastName'])

        const singer = new Singer()
        singer.firstName = singerInfo.firstName
        singer.lastName = singerInfo.lastName

        await singer.save()

        return response.status(201).json(singer)
	}

	async update ({params, request, response}) {
		const singerInfo = request.only(['firstName', 'lastName'])

        const singer = await Book.find(params.id)
        if (!singer) {
            return response.status(404).json({data:'Singer not found'})
        }
        singer.firstName = singerInfo.firstName
        singer.lastName = singerInfo.lastName

        await singer.save()

        return response.status(200).json(singer)
	}

	async delete ({params, response}) {
		const singer = await Singer.find(params.id)
        if (!singer) {
            return response.status(404).json({data:'Singer not found'})
        }
        await singer.delete()

        return response.status(204).json(null)
	}
}

module.exports = SingerController