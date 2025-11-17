<?php

require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/OrderDao.php';

class OrderService extends BaseService
{
    public function __construct($dao = null)
    {
        $dao = new OrderDao();
        parent::__construct($dao);
    }

    public function getAllOrders()
    {
        return $this->dao->getAllOrders();
    }
}
