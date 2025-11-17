<?php

require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/OrderItemsDao.php';

class OrderItemsService extends BaseService
{
    public function __construct($dao = null)
    {
        $dao = new OrderItemsDao();
        parent::__construct($dao);
    }
}
