<?php

namespace App\Services\Strapi\Entity;

class ServicesPage{
    public Hero $hero;


    public function __construct($data)
    {
        $this->hero = new Hero($data['attributes']['hero']);
    }
}