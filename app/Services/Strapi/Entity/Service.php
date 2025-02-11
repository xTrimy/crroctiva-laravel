<?php

namespace App\Services\Strapi\Entity;

use Parsedown;

class Service{
    public $id;
    public $documentId;
    public $name;
    public $image = null;
    public array $features = [];
    public $content;
    public $publishedAt;
    public $createdAt;
    public $updatedAt;

    public function __construct($data)
    {
        $this->id = $data['id'];
        $this->name = $data['attributes']['name'];
        $this->content = $data['attributes']['content'];
        $this->documentId = @$data['attributes']['documentId'];
        if(@$data['attributes']['image']){
            $this->image = (new StrapiImage($data['attributes']['image']['data']))->getAbsoluteUrl();
        }
        if(@$data['attributes']['features']){
            foreach($data['attributes']['features'] as $feature){
                $this->features[] = new Feature($feature);
            }
        }
        $this->createdAt = $data['attributes']['createdAt'];
        $this->updatedAt = $data['attributes']['updatedAt'];
        $this->publishedAt = $data['attributes']['publishedAt'];
    }
}