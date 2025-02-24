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
        $this->hero = new Hero($data['attributes']['hero']);
        $this->insights = array_map(function($insight){
            return new Insight($insight);
        }, $data['attributes']['Insights']);
    }
}