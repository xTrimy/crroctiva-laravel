<?php

namespace App\Services\Strapi\Entity;

class Work{
    public $id;
    public $title;
    public $content;
    public $image;

    public function __construct(array $data)
    {
        $this->id = $data['id'];
        $this->title = $data['attributes']['title'];
        $this->content = $data['attributes']['content'] ?? null;
        $this->image = (new StrapiImage($data['attributes']['image']['data']))->getAbsoluteUrl();
    }
}