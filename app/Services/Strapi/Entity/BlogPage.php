<?php

namespace App\Services\Strapi\Entity;

class BlogPage{
    public Hero $hero;


    public function __construct($data)
    {
        $this->hero = new Hero($data['attributes']['hero']);
    }
}