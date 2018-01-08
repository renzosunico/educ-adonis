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


Route.on('/').render('welcome')
Route.group(() => {
    Route.resource('song', 'SongController').apiOnly()
    Route.get('', 'HomeController.index')
    Route.get('login/:username/:password', 'LoginController.login')

    // Songwriter
    Route.get('songwriters', 'SongwriterController.index')
    Route.post('songwriters', 'SongwriterController.create')
    Route.get('songwriters/:id', 'SongwriterController.show')
    Route.put('songwriters/:id', 'SongwriterController.update')
    Route.delete('songwriters:/id', 'SongwriterController.delete')

    // Singer
    Route.post('singers', 'SingerController.store')
    Route.get('singers', 'SingerController.index')
    Route.get('singers/:id', 'SingerController.show')
    Route.put('singers/:id', 'SingerController.update')
    Route.delete('singers/:id', 'SingerController.delete')
    
}).prefix('api')