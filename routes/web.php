<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;


Route::get('/', [MainController::class, 'home']);
Route::get('/about', [MainController::class, 'about']);


Route::get('/test', [MainController::class, 'show']);
Route::get('/post/{id}', [MainController::class, 'post']);
Route::get('/service/{id}', [ MainController::class, 'service']);
Route::get('/work/{id}', [MainController::class, 'work']);

