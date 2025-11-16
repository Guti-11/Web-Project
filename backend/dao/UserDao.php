<?php

require_once __DIR__ . '/BaseDao.php';

class UserDao extends BaseDao
{
    protected $table_name = 'users';


    public function __construct()
    {
        parent::__construct($this->table_name);
    }


    public function getUserByEmail($email)
    {
        $sql = 'SELECT * FROM ' . $this->table_name . ' WHERE email = :email';

        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }


    public function createUser(array $user)
    {
        return $this->add($user);
    }
}
