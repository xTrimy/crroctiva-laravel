<?php

namespace App\Services\Strapi;

use App\Services\Strapi\Entity\BlogPost;
use App\Services\Strapi\Entity\Partner;
use App\Services\Strapi\Entity\Service;
use Illuminate\Support\Facades\Http;

class StrapiService extends IStrapi{
    public function getBlogPosts(): array
    {
        $data = $this->get( '/blog-posts');
        $blog_posts = [];
        if ($data == null) {
            return [];
        }
        foreach ($data as $blog_post) {
            $blog_posts[] = new BlogPost($blog_post);
        }
        return $blog_posts;
    }

    public function getBlogPost(string $id): BlogPost
    {
        return new BlogPost($this->get( '/blog-posts/' . $id));
    }

    public function getPartners(): array
    {
        $data = $this->get('/partners?populate=image');
        $partners = [];
        if ($data == null) {
            return [];
        }
        foreach ($data as $partner) {
            $partners[] = new Partner($partner);
        }
        return $partners;    
    }

    public function getServices(): array
    {
        $data = $this->get('/services');
        $services = [];
        if ($data == null) {
            return [];
        }
        foreach ($data as $service) {
            $services[] = new Service($service);
        }
        return $services;
    }

    public function getService($id): Service
    {
        $data = $this->get("/services/{$id}?populate[features][populate]=*&populate=image");
        return new Service($data);
    }
}