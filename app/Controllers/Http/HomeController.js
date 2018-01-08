'use strict'

class HomeController {
    index({response}) {
        return response.header('Content-type', 'text/plain').send('welcome mehehehe')
    }
}

module.exports = HomeController
