<?php

namespace App\Services\Strapi\Entity;

class WorkPage{
    public Hero $hero;


    public function __construct($data)
    {
        $this->hero = new Hero($data['attributes']['hero']);
    }
}