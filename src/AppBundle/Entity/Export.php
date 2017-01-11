<?php

/**
 * Created by PhpStorm.
 * User: Cédric Gournay
 * Date: 10/01/2017
 * Time: 18:28
 */

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="test")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ExportRepository")
 */
class Export
{
    /**
     * @var integer $id
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var integer $col_1
     *
     * @ORM\Column(name="col_1", type="integer")
     */
    private $col_1;

    /**
     * @var integer $col_2
     *
     * @ORM\Column(name="col_2", type="integer")
     */
    private $col_2;

    /**
     * @var integer $col_3
     *
     * @ORM\Column(name="col_3", type="integer")
     */
    private $col_3;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return int
     */
    public function getCol1()
    {
        return $this->col_1;
    }

    /**
     * @param int $col_1
     */
    public function setCol1($col_1)
    {
        $this->col_1 = $col_1;
    }

    /**
     * @return int
     */
    public function getCol2()
    {
        return $this->col_2;
    }

    /**
     * @param int $col_2
     */
    public function setCol2($col_2)
    {
        $this->col_2 = $col_2;
    }

    /**
     * @return int
     */
    public function getCol3()
    {
        return $this->col_3;
    }

    /**
     * @param int $col_3
     */
    public function setCol3($col_3)
    {
        $this->col_3 = $col_3;
    }
}