<?php

namespace App\Services\Strapi\Entity;

use App\Services\Strapi\Traits\Pageable;

class WorkItems{
    use Pageable {
        Pageable::__construct as private __pageableConstruct;
    }
    /**
     * @var Work[]
     */
    public array $workItems;
    

    public function __construct($data)
    {
        $this->__pageableConstruct($data);
        $this->workItems = array_map(function($work){
            return new Work($work);
        }, $data['data']);
    }
}