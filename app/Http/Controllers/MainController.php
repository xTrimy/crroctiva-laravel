<?php

namespace App\Http\Controllers;

use App\Services\Strapi\IStrapi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MainController extends Controller
{
    private IStrapi $strapi_service;
    public function __construct()
    {
        $this->strapi_service = new \App\Services\Strapi\StrapiService();
    }
    public function home()
    {
        $homeData = $this->strapi_service->getHome();
        $blogs = $this->strapi_service->getBlogPosts(limit: 3);
        $partners = $this->strapi_service->getPartners();
        $services = $this->strapi_service->getServices();
        $work = $this->strapi_service->getWork(3)->workItems;
        return Inertia::render('Home', [
            'blogs' => $blogs->posts,
            'partners' => $partners,
            'services' => $services,
            'work' => $work,
            'homeData' => $homeData
        ]);
    }

    public function about(){
        $about = $this->strapi_service->getAbout();
        return Inertia::render('About', [
            'about' => $about
        ]);
    }

    public function blog(Request $request)
    {
        $page = $request->page ?? 1;
        if($page < 1){
            return redirect()->route('blog');
        }
        $blogPosts = $this->strapi_service->getBlogPosts(page: $page);
        $blogPageData = $this->strapi_service->getBlogPage();
        return Inertia::render('Blog', [
            'blogPosts' => $blogPosts->posts,
            'blogPageData' => $blogPageData,
            'pagination' => $blogPosts->getPagination()
        ]);
    }
    public function work(Request $request)
    {
        $page = $request->page ?? 1;
        if ($page < 1) {
            return redirect()->route('work');
        }
        $work = $this->strapi_service->getWork(page: $page);
        $workPageData = $this->strapi_service->getBlogPage();
        return Inertia::render('Work', [
            'workItems' => $work->workItems,
            'workPageData' => $workPageData,
            'pagination' => $work->getPagination()
        ]);
    }

    public function services(Request $request)
    {
        $page = $request->page ?? 1;
        if ($page < 1) {
            return redirect()->route('services');
        }
        $services = $this->strapi_service->getServices();
        $servicesPageData = $this->strapi_service->getServicesPage();
        return Inertia::render('Services', [
            'services' => $services,
            'servicesPageData' => $servicesPageData
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

    public function workItem($id)
    {
        $work = $this->strapi_service->getWorkSingle($id);
        return Inertia::render('WorkPost', [
            'work' => $work
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
