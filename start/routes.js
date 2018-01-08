'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.group(() => {
    Route.get('', 'HomeController.index')
    Route.get('login/:username/:password', 'LoginController.login')

    Route.get('songwriters', 'SongwriterController.index')
    Route.post('songwriters', 'SongwriterController.create')
    Route.get('songwriters/:id', 'SongwriterController.show')
    Route.put('songwriters/:id', 'SongwriterController.update')
    Route.delete('songwriters:/id', 'SongwriterController.delete')
}).prefix('api')
