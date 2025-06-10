<?php

namespace App\Services\Strapi\Entity;

class General{
    public $logo;
    public $description;
    public $title;

    public function __construct($data)
    {
        if (!isset($data['attributes'])){
            $this->logo = null;
            $this->description = null;
            $this->title = null;
            return; // Invalid data structure, do not initialize
        }
        $this->logo = (new StrapiImage($data['attributes']['logo']['data']))->getAbsoluteUrl() ?? null;
        $this->description = $data['attributes']['description'] ?? null;
        $this->title = $data['attributes']['siteTitle'] ?? null;
    }
}