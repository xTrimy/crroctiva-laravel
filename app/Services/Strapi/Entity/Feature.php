<?php

namespace App\Services\Strapi\Entity;

class Feature{
    public $id;
    public $name;
    public $content;
    public $icon;

    public function __construct($data)
    {
        $this->id = $data['id'];
        $this->name = $data['name'];
        $this->content = $data['content'];
        if(@$data['icon']){
            $this->icon = (new StrapiImage($data['icon']['data']))->getAbsoluteUrl();
        }
    }
}