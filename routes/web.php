<?php

use App\Http\Controllers\LocaleController;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;

Route::post('/locale/{locale}', [LocaleController::class, 'change'])
    ->name('setLocale')
    ->where('locale', '[a-zA-Z]+');
    
    Route::get('/',     [MainController::class, 'home'])->name('home');
    Route::get('/about', [MainController::class, 'about'])->name('about');
    Route::get('/blog', [MainController::class, 'blog'])->name('blog');
    Route::get('/work', [MainController::class, 'work'])->name('work');
    Route::get('/services', [MainController::class, 'services'])->name('services');


    Route::get('/test', [MainController::class, 'show']);
    Route::get('/post/{id}', [MainController::class, 'post']);
    Route::get('/service/{id}', [MainController::class, 'service']);
    Route::get('/work/{id}', [MainController::class, 'workItem']);

