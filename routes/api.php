<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;


Route::post('/cache-clear', function () {
    Cache::flush();
    // clear varnish cache as well
    if(env('VARNISH_CACHE_ENABLED', false) == true) {
        $varnishURL = env(key: 'VARNISH_CACHE_URL');
        $varnishCacheTags = env('VARNISH_CACHE_TAGS');
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $varnishURL);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PURGE');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Accept: application/json',
            'X-Cache-Tags: ' . $varnishCacheTags,
        ]);
        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            return response()->json(['status' => 'error', 'message' => 'Failed to clear varnish cache: ' . curl_error($ch)], 500);
        }
        curl_close($ch);
        if ($response !== false) {
            $response = json_decode($response, true);
            if (isset($response['status']) && $response['status'] === 'error') {
                return response()->json(['status' => 'error', 'message' => 'Failed to clear varnish cache: ' . $response['message']], 500);
            }
        }
    }
    return ['status' => 'success', 'message' => 'Cache cleared successfully.', 'success' => true];
})->name('cache.clear');