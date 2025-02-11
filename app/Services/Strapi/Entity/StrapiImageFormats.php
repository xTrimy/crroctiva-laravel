<?php

namespace App\Services\Strapi\Entity;

class StrapiImageFormats{
    public StrapiImageFormat | null $thumbnail = null;
    public StrapiImageFormat | null $small = null;
    public StrapiImageFormat | null $medium = null;
    public StrapiImageFormat | null $large = null;

    public function __construct($data)
    {
        if(@$data['thumbnail']){
            $this->thumbnail = new StrapiImageFormat($data['thumbnail']);
        }
        if(@$data['small']){
            $this->small = new StrapiImageFormat($data['small']);
        }
        if(@$data['medium']){
            $this->medium = new StrapiImageFormat($data['medium']);
        }
        if(@$data['large']){
            $this->large = new StrapiImageFormat($data['large']);
        }
    }
}