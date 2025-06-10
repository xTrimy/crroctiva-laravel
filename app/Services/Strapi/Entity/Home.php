<?php

namespace App\Services\Strapi\Entity;

class Home{
    public Hero $hero;
    /**
     * @var Insight[]
     */
    public array $insights;

    public function __construct($data)
    {
        if (!isset($data['attributes']['hero']) || !is_array($data['attributes']['hero'])) {
            $data['attributes']['hero'] = [];
        }
        if (!isset($data['attributes']['Insights']) || !is_array($data['attributes']['Insights'])) {
            $data['attributes']['Insights'] = [];
        }
        $this->hero = new Hero($data['attributes']['hero']);
        $this->insights = array_map(function($insight){
            return new Insight($insight);
        }, $data['attributes']['Insights']);
    }
}