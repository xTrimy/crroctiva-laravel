<?php

namespace App\Services\Strapi\Entity;

class Hero{
    public $id;
    public $title;
    public $content;
    public $image;

    public function __construct(array $data)
    {
        if (!isset($data['id']) || !isset($data['heroTitle']) || !isset($data['heroImage']['data'])) {
            return; // Invalid data structure, do not initialize
        }
        $this->id = $data['id'];
        $this->title = $data['heroTitle'];
        $this->content = $data['heroText'] ?? null;
        $this->image = (new StrapiImage($data['heroImage']['data']))->getAbsoluteUrl();
    }
}