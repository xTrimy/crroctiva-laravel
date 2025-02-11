<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MainController extends Controller
{
    private $strapi_service;
    public function __construct()
    {
        $this->strapi_service = new \App\Services\Strapi\StrapiService();
    }
    public function home()
    {
        $blogs = $this->strapi_service->getBlogPosts();
        $partners = $this->strapi_service->getPartners();
        $services = $this->strapi_service->getServices();
        return Inertia::render('Home', [
            'blogs' => $blogs,
            'partners' => $partners,
            'services' => $services
        ]);
    }
    public function post($id)
    {
        $blog = $this->strapi_service->getBlogPost($id);
        return Inertia::render('Post', [
            'post' => $blog
        ]);
    }

    public function service($id)
    {
        $service = $this->strapi_service->getService($id);
        return Inertia::render('Service', [
            'service' => $service
        ]);
    }

    public function show2()
    {
        return Inertia::render('Home', [
            'event' => [
                "id" => 1,
                "date" => "2021-10-10",
                "time" => "10:00:00",
            ]
        ]);
    }
}
