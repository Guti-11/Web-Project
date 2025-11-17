<?php


require_once __DIR__ . "/CategoryDao.php";
require_once __DIR__ . "/ProductDao.php";


$dao = new ProductDao();


print_r($dao->getProductByCategory('Apparel'));
