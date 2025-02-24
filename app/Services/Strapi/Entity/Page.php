<?php

namespace App\Services\Strapi\Entity;

class Page{
    public array $data;
    public int $page;
    public int $pageSize;
    public int $pageCount;
    public int $total;

    public function __construct($data)
    {
        $this->data = $data['data'];
        $this->page = $data['meta']['pagination']['page'];
        $this->pageSize = $data['meta']['pagination']['pageSize'];
        $this->pageCount = $data['meta']['pagination']['pageCount'];
        $this->total = $data['meta']['pagination']['total'];
    }
}