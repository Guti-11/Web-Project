<?php

require_once __DIR__ . '/BaseDao.php';

class CategoryDao extends BaseDao
{
    protected $table_name = 'category';

    public function __construct()
    {
        parent::__construct($this->table_name);
    }

    public function getByCategory($CategoryName)
    {
        $sql = "SELECT * FROM category c
                JOIN products p on p.category_id = c.id
                JOIN product_details pd ON p.id = pd.product_id
         WHERE category_name = :CategoryName";

        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(':CategoryName', $CategoryName);

        $stmt->execute();
        $result = $stmt->fetchAll();

        return $result;
    }
}
