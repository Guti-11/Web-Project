<?php

require_once __DIR__ . '/BaseDao.php';

class ProductDao extends BaseDao
{
    protected $table_name = 'products';

    public function __construct()
    {
        parent::__construct($this->table_name);
    }

    public function getProductDetails()
    {
        $sql = "
        SELECT 
            category.id AS category_id,
            category.category_name AS category_name,
            products.id AS product_id,
            products.name AS product_name,
            product_details.id AS product_details_id,
            product_details.colors AS product_details_colors,
            product_details.sizes AS product_details_sizes,
            product_details.models AS product_details_models
        FROM category
        INNER JOIN products ON category.id = products.id
        INNER JOIN product_details ON products.id = product_details.product_id
    ";

        $stmt = $this->connection->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }


    public function getProductById($product_id)
    {
        $sql = "
        SELECT 
            category.id AS category_id,
            category.category_name AS category_name,
            products.id AS product_id,
            products.name AS product_name,
            product_details.id AS product_details_id,
            product_details.colors AS product_details_colors,
            product_details.sizes AS product_details_sizes,
            product_details.models AS product_details_models
        FROM products
        INNER JOIN product_details ON products.id = product_details.product_id
        INNER JOIN category ON category.id = products.id
        WHERE products.id = :product_id
    ";

        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(':product_id', $product_id, PDO::PARAM_INT);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        return $result;
    }

    public function getProductByCategory($categoryName)
    {
        $sql = "
              SELECT
                  products.id AS product_id,
                  products.name AS product_name,
                  category.id AS category_id,
                  category.category_name,
                  product_details.colors,
                  product_details.sizes,
                  product_details.models
              FROM products
              INNER JOIN category ON category.id = products.id
              LEFT JOIN product_details ON product_details.product_id = products.id
              WHERE category.category_name = :category_name
          ";

        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(':category_name', $categoryName, PDO::PARAM_STR);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


    public function getProductBy(array $criteria)
    {
        if (empty($criteria)) {
            throw new InvalidArgumentException('At least one filter (size or color) must be provided.');
        }

        $allowedFilters = [
            'size'  => 'product_details.sizes',
            'color' => 'product_details.colors',
        ];

        $conditions = [];
        $params = [];

        foreach ($criteria as $key => $value) {
            if (!array_key_exists($key, $allowedFilters)) {
                throw new InvalidArgumentException(sprintf('Unsupported filter "%s". Only size and color are
  allowed.', $key));
            }

            $conditions[] = $allowedFilters[$key] . ' = :' . $key;
            $params[':' . $key] = $value;
        }

        $sql = "
              SELECT
                  products.id AS product_id,
                  products.name AS product_name,
                  category.category_name,
                  product_details.colors,
                  product_details.sizes,
                  product_details.models
              FROM products
              INNER JOIN product_details ON product_details.product_id = products.id
              INNER JOIN category ON category.id = products.id
              WHERE " . implode(' AND ', $conditions) . "
          ";

        $stmt = $this->connection->prepare($sql);

        foreach ($params as $placeholder => $value) {
            $stmt->bindValue($placeholder, $value);
        }

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
