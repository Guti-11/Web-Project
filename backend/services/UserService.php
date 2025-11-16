<?php

require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/UserDao.php';

class UserService extends BaseService
{
    public function __construct($dao = null)
    {
        $dao = new UserDao();
        parent::__construct($dao);
    }

    public function getUserByEmail($email)
    {
        return $this->dao->getUserByEmail($email);
    }

    public function createUser(array $user)
    {
        return $this->dao->createUser($user);
    }
}
