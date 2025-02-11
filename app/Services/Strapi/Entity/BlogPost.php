<?php

namespace App\Services\Strapi\Entity;

use PHPHtmlParser\Dom;

use Parsedown;

class BlogPost{
    public $id;
    public $documentId;
    public $title;
    public $content;
    public $body;
    public $publishedAt;
    public $author;
    public $category;
    public $previewImage;
    public $slug;
    public $createdAt;
    public $updatedAt;

    public $previewText;

    public function __construct($data)
    {
        $dom = new Dom;
        $Parsedown = Parsedown::instance()->setBreaksEnabled(true);
        $this->id = $data['id'];
        $this->documentId = @$data['attributes']['documentId'];
        $this->title = $data['attributes']['title'];
        $this->body = $Parsedown->text($data['attributes']['content']);
        $first_image = $dom->loadStr($this->body)->find('img')[0];
        if($first_image){
            $this->previewImage = $first_image->getAttribute('src');
        }
        $this->content = $data['attributes']['content'];
        $this->createdAt = $data['attributes']['createdAt'];
        $this->updatedAt = $data['attributes']['updatedAt'];
        $this->publishedAt = $data['attributes']['publishedAt'];
        $this->author = @$data['attributes']['createdBy'];
    }
}