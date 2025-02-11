<?php

namespace App\Services\Strapi\Entity;

class StrapiImage{
    public $id;
    public $name;
    public $alternativeText;
    public $caption;
    public $width;
    public $height;
    public StrapiImageFormats $formats;
    public $hash;
    public $ext;
    public $mime;
    public $size;
    public $url;
    public $previewUrl;
    public $provider;
    public $provider_metadata;
    public $createdAt;
    public $updatedAt;

    public function __construct($data)
    {
        $this->id = $data['id'];
        $this->name = $data['attributes']['name'];
        $this->alternativeText = $data['attributes']['alternativeText'];
        $this->caption = $data['attributes']['caption'];
        $this->width = $data['attributes']['width'];
        $this->height = $data['attributes']['height'];
        $this->formats = new StrapiImageFormats($data['attributes']['formats']);
        $this->hash = $data['attributes']['hash'];
        $this->ext = $data['attributes']['ext'];
        $this->mime = $data['attributes']['mime'];
        $this->size = $data['attributes']['size'];
        $this->url = $data['attributes']['url'];
        $this->previewUrl = $data['attributes']['previewUrl'];
        $this->provider = $data['attributes']['provider'];
        $this->provider_metadata = $data['attributes']['provider_metadata'];
        $this->createdAt = $data['attributes']['createdAt'];
        $this->updatedAt = $data['attributes']['updatedAt'];
    }

    public function getAbsoluteUrl(){
        return env('STRAPI_BASE_URL') . $this->url;
    }
}