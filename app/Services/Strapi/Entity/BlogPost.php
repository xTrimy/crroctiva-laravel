<?php

namespace App\Services\Strapi\Entity;

use PHPHtmlParser\Dom;

use Parsedown;
use PHPHtmlParser\Options;

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
        $dom = new \DOMDocument();
        $Parsedown = Parsedown::instance()->setBreaksEnabled(true);
        $this->id = $data['id'];
        $this->documentId = @$data['attributes']['documentId'];
        $this->title = $data['attributes']['title'];
        $this->body = $Parsedown->text($data['attributes']['content']);
        $dom->loadHTML($this->body, LIBXML_NOWARNING | LIBXML_NOERROR);
        $xpath = new \DOMXPath($dom);
        $first_image = $xpath->query('//img')->item(0);
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