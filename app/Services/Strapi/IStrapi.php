<?php

namespace App\Services\Strapi;

use App\Services\Strapi\Entity\BlogPost;
use App\Services\Strapi\Entity\Partner;
use App\Services\Strapi\Entity\Service;
use Illuminate\Support\Facades\Http;

abstract class IStrapi
{
    protected $url;
    protected $token;

    public function __construct()
    {
        $this->token = env('STRAPI_TOKEN');
        $this->url = rtrim(env('STRAPI_API_URL'), '/') . '/';
    }

    protected function get(string $endpoint): array | null
    {
        $endpoint = ltrim($endpoint, '/');
        $response = Http::withToken($this->token)->get($this->url  . $endpoint);
        return $response->json()['data'];
    }

    public abstract function getBlogPosts(): array;
    public abstract function getBlogPost(string $id): BlogPost;
    public abstract function getPartners(): array;
    public abstract function getServices(): array;
    public abstract function getService($id): Service;
}