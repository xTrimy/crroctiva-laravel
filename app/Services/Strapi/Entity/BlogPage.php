<?php

namespace App\Services\Strapi\Entity;

class BlogPage{
    public Hero $hero;


    public function __construct($data)
    {
        if (!isset($data['attributes']['hero']) || !is_array($data['attributes']['hero'])) {
            $data['attributes']['hero'] = [];
        }
        $this->hero = new Hero($data['attributes']['hero']);
    }
}