<?php

namespace App\Services\Strapi\Entity;

class Insight{
    public $id;
    public int $number;
    public string $title;

    public function __construct($data)
    {
        $this->id = $data['id'];
        $this->number = $data['number'];
        $this->title = $data['title'];
    }
}