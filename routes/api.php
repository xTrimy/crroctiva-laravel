<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;


Route::post('/cache-clear', function () {
    Cache::flush();
    return ['status' => 'success', 'message' => 'Cache cleared successfully.', 'success' => true];
})->name('cache.clear');