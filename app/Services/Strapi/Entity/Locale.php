<?php

namespace App\Services\Strapi\Entity;

class Locale
{
    public string $name;
    public string $code;

    public function __construct($data)
    {
        $this->name = $data['name'] ?? '';
        $this->code = $data['code'] ?? '';
    }
}