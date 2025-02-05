<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MainController extends Controller
{
    public function show()
    {
        return Inertia::render('Test', [
            'event' => [
                "id" => 1,
                "name" => "Laravel Event",
                "date" => "2021-10-10",
                "time" => "10:00:00",
            ]
        ]);
    }
}
