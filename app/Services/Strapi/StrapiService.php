<?php

namespace App\Services\Strapi;

use App\Services\Strapi\Entity\About;
use App\Services\Strapi\Entity\BlogPost;
use App\Services\Strapi\Entity\Partner;
use App\Services\Strapi\Entity\Service;
use App\Services\Strapi\Entity\Work;
use Illuminate\Support\Facades\Http;

class StrapiService extends IStrapi{
    public function getBlogPosts(int $limit = null): array
    {
        $url = "/blog-posts";
        if ($limit != null) {
            $url .= "?pagination[limit]={$limit}";
        }
        $data = $this->get($url);
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

    public function getPartners(int $limit = null): array
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

    public function getServices(int $limit = null): array
    {
        $url = "/services";
        if ($limit != null) {
            $url .= "?pagination[limit]={$limit}";
        }
        $data = $this->get($url);
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

    public function getWork(int $limit = null): array
    {
        $url = "/works?fields[0]=title&populate=image";
        if ($limit != null) {
            $url .= "&pagination[limit]={$limit}";
        }
        $data = $this->get($url);
        $works = [];
        if ($data == null) {
            return [];
        }
        foreach ($data as $work) {
            $works[] = new Work($work);
        }
        return $works;
    }

    public function getWorkSingle($id): Work
    {
        $data = $this->get("/works/{$id}?populate=image&populate=content");
        return new Work($data);
    }

    public function getAbout(): About
    {
        $data = $this->get("/about?populate[hero][populate]=*&populate[sections][populate]=*");
        return new About($data);
    }
}