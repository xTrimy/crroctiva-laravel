<?php

namespace App\Services\Strapi\Entity;

class About{
    public Hero $hero;
    /**
     * @var Section[]
     */
    public array $sections;

    public function __construct($data)
    {
        $this->hero = new Hero($data['attributes']['hero']);
        $this->sections = array_map(function($section){
            return new Section($section);
        }, $data['attributes']['sections']);
    }
}