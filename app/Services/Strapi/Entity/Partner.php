<?php

namespace App\Services\Strapi\Entity;

use Parsedown;

class Partner{
    public $id;
    public $documentId;
    public $name;
    public $image;
    public $publishedAt;
    public $createdAt;
    public $updatedAt;

    public function __construct($data)
    {
        $this->id = $data['id'];
        $this->name = $data['attributes']['name'];
        $this->image = (new StrapiImage($data['attributes']['image']['data']))->getAbsoluteUrl();
        $this->createdAt = $data['attributes']['createdAt'];
        $this->updatedAt = $data['attributes']['updatedAt'];
        $this->publishedAt = $data['attributes']['publishedAt'];
    }
}