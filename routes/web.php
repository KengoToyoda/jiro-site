<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
Route::get('/', 'ShopController@index')->middleware('auth');
Route::get('/home', 'HomeController@index')->name('home');

Route::get('/myjiro', 'ShopController@fetchMyjiros');
Route::put('/myjiro/{myjiro}', 'ShopController@storeMyjiros');
Route::delete('/myjiro/{myjiro}','ShopController@deleteMyjiros');

Route::get('/quiz', 'QuizController@index');
Route::get('/quiz/fetch', 'QuizController@fetch');










