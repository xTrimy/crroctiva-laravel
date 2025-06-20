<?php

namespace App\Services\Strapi;

use App\Services\Strapi\Entity\About;
use App\Services\Strapi\Entity\BlogPage;
use App\Services\Strapi\Entity\BlogPost;
use App\Services\Strapi\Entity\BlogPosts;
use App\Services\Strapi\Entity\General;
use App\Services\Strapi\Entity\Home;
use App\Services\Strapi\Entity\Partner;
use App\Services\Strapi\Entity\Service;
use App\Services\Strapi\Entity\ServicesPage;
use App\Services\Strapi\Entity\WorkItems;
use App\Services\Strapi\Entity\WorkPage;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

abstract class IStrapi
{
    protected $url;
    protected $token;

    public function __construct()
    { 
        //simulate slow network
        sleep(1);
        $this->token = env('STRAPI_TOKEN');
        $this->url = rtrim(env('STRAPI_API_URL'), '/') . '/';
    }

    protected function get(string $endpoint, bool $withMetaData = false): array | null
    {
        $endpoint = ltrim($endpoint, '/');
        $locales = $this->locales();
        $defaultLocale = request()->getPreferredLanguage(collect($locales)->pluck(value: 'code')->toArray()) ?? config('app.fallback_locale');
        if (strpos($endpoint, '?') === false) {
            $locale = session('locale', $defaultLocale);
            $endpoint .= "?locale={$locale}";
        } else {
            $endpoint .= "&locale=" . session('locale', $defaultLocale);
        }
        if (Cache::has($endpoint)) {
            return Cache::get($endpoint);
        }
        $response = Http::timeout(60)->withToken($this->token)->withoutVerifying()->get($this->url  . $endpoint);
        if ($response->failed()) {
            return null;
        }

        if($withMetaData){
            Cache::put($endpoint, $response->json(), 60 * 60);
            return $response->json();
        }
        Cache::put($endpoint, $response->json()['data'], 60 * 60);
        return $response->json()['data'];
    }

    public abstract function getGeneralData(): General;
    public abstract function getBlogPosts(int $limit = null, int $page = null): BlogPosts;
    public abstract function getBlogPost(string $id): BlogPost;
    public abstract function getPartners(): array;
    public abstract function getServices(int $limit = null): array;
    public abstract function getService($id): Service;

    public abstract function getWork(int $limit =null, int $page = null): WorkItems;
    public abstract function getAbout(): About;
    public abstract function getHome(): Home;
    public abstract function getBlogPage(): BlogPage;
    public abstract function getWorkPage(): WorkPage;
    public abstract function getServicesPage(): ServicesPage;
}