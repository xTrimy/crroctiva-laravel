<?php

namespace App\Services\Strapi\Entity;

class StrapiImageFormat{
    public $name;
    public $hash;
    public $ext;
    public $mime;
    public $width;
    public $height;
    public $size;
    public $sizeInBytes;
    public $url;

    public function __construct($data)
    {
        $this->name = $data['name'];
        $this->hash = $data['hash'];
        $this->ext = $data['ext'];
        $this->mime = $data['mime'];
        $this->width = $data['width'];
        $this->height = $data['height'];
        $this->size = $data['size'];
        $this->sizeInBytes = $data['sizeInBytes'];
        $this->url = $data['url'];
    }
}