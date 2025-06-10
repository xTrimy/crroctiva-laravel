<?php 

namespace App\Http\Controllers;

use App\Services\Strapi\Entity\Locale;

use App\Services\Strapi\StrapiService;
use Illuminate\Http\Client\Request;

class LocaleController extends Controller
{
    protected StrapiService $strapiService;
    public function __construct(StrapiService $strapiService)
    {
        $this->strapiService = $strapiService;
    }

    public function index()
    {
        $locales = $this->strapiService->locales();
        return response()->json($locales);
    }

    public function change($locale)
    {
        $locales = $this->strapiService->locales();
        $locale = collect($locales)->firstWhere('code', $locale);
        if (!$locale) {
            $locale = request()->getPreferredLanguage(collect($locales)->pluck('code')->toArray()) ?? config('app.fallback_locale');
        }else{
            $locale = $locale->code;
        }
        session(['locale' => $locale]);
        return response()->json(['message' => 'Locale changed successfully', 'locale' => $locale]);
    }
}