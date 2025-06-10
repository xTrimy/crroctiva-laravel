<?php

namespace App\Services\Strapi\Entity;

use App\Services\Strapi\Traits\Pageable;

class BlogPosts{
    use Pageable {
        Pageable::__construct as private __pageableConstruct;
    }
    /**
     * @var BlogPost[]
     */
    public array $posts;
    

    public function __construct($data)
    {
        if(!isset($data['data']) || !is_array($data['data'])) {
            $data['data'] = [];
        }
        $this->__pageableConstruct($data);
        $this->posts = array_map(function($post){
            return new BlogPost($post);
        }, $data['data']);
    }
}