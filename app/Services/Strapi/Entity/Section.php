<?php

namespace App\Services\Strapi\Entity;

class Section
{
    public $id;
    public $title;
    public $content;
    public $image;

    public function __construct(array $data)
    {
        $this->id = $data['id'];
        $this->title = $data['title'];
        $this->content = $data['content'] ?? null;
        $this->image = (new StrapiImage($data['image']['data']))->getAbsoluteUrl();
    }
}
