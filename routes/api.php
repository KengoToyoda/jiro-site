<?php

use Illuminate\Http\Request;
use App\Shop;
use App\Myjiro;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/myjiro', function(Request $request){
    $myjiros = App\Myjiro::all();
    return response()->json(['myjiros' => $myjiros]);
});

// Route::get('/myjiro','ShopController@getMyjiros');

Route::post('/myjiro','ShopController@storeMyjiros');




