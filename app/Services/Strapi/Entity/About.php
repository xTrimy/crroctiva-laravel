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
        if (!isset($data['attributes']['hero']) || !is_array($data['attributes']['hero'])) {
            $data['attributes']['hero'] = [];
        }
        if (!isset($data['attributes']['sections']) || !is_array($data['attributes']['sections'])) {
            $data['attributes']['sections'] = [];
        }
        $this->hero = new Hero($data['attributes']['hero']);
        $this->sections = array_map(function($section){
            return new Section($section);
        }, $data['attributes']['sections']);
    }
}