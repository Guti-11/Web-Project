<?php

require_once __DIR__ . "/BaseService.php";
require_once __DIR__ . "/../dao/CategoryDao.php";

class CategoryService extends BaseService
{

    public function __construct()
    {
        $dao = new CategoryDao();
        return parent::__construct($dao);
    }

    public function getByCategory($category)
    {
        return $this->dao->getByCategory($category);
    }
}
