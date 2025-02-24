<?php

namespace App\Services\Strapi\Traits;

trait Pageable
{
    public ?int $page = null;
    public ?int $pageSize = null;
    public ?int $pageCount = null;
    public ?int $total = null;
    public function __construct($data)
    {
        $this->page = @$data['meta']['pagination']['page'];
        $this->pageSize = @$data['meta']['pagination']['pageSize'];
        $this->pageCount = @$data['meta']['pagination']['pageCount'];
        $this->total = @$data['meta']['pagination']['total'];
    }

    public function hasMore(): bool
    {
        return $this->page < $this->pageCount;
    }

    public function nextPage(): int
    {
        return $this->page + 1;
    }

    public function previousPage(): int
    {
        return $this->page - 1;
    }

    public function firstPage(): int
    {
        return 1;
    }

    public function lastPage(): int
    {
        return $this->pageCount;
    }

    public function getPagination(): array
    {
        return [
            'page' => $this->page,
            'pageSize' => $this->pageSize,
            'pageCount' => $this->pageCount,
            'total' => $this->total
        ];
    }


}