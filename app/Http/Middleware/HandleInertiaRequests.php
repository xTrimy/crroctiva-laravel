<?php

namespace App\Http\Middleware;

use App\Services\Strapi\StrapiService;
use Illuminate\Http\Request;
use Inertia\Middleware;
class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {   
     
        $strapi = new StrapiService();
        $services = $strapi->getServices(5);
        $general = $strapi->getGeneralData();
        $locales = $strapi->locales();
        $defaultLocale = $request->getPreferredLanguage(collect($locales)->pluck('code')->toArray()) ?? config('app.fallback_locale');
        $currentLocale = session('locale', $defaultLocale);
        if (!$currentLocale || !collect($locales)->contains('code', $currentLocale)) {
            $currentLocale = $defaultLocale;
        }
        return array_merge(parent::share($request), [
            'navbar_services' => $services,
            'generalData' => $general,
            'locales' => $locales,
            'locale' => $currentLocale,
        ]);
    }
}
