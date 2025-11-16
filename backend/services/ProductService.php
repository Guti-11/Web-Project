<?php


require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/ProductDao.php';


class ProductService extends BaseService
{

    public function __construct()
    {
        $dao = new ProductDao();
        return parent::__construct($dao);
    }

    public function getProductDetails()
    {
        return $this->dao->getProductDetails();
    }

    public function getProductById($product_id)
    {
        return $this->dao->getProductById($product_id);
    }
}
