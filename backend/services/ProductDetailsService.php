<?php

require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/ProductDetailsDao.php';

class ProductDetailsService extends BaseService
{
    public function __construct($dao = null)
    {
        $dao = new ProductDetailsDao();
        parent::__construct($dao);
    }
}
