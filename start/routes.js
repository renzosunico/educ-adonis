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

//Route.on('/').render('welcome')

Route.group(() => {
    Route.post('singers', 'SingerController.store')
    Route.get('singers', 'SingerController.index')
    Route.get('singers/:id', 'SingerController.show')
    Route.put('singers/:id', 'SingerController.update')
    Route.delete('singers/:id', 'SingerController.delete')
}).prefix('api/s1')

