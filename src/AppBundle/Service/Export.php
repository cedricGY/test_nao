<?php

namespace AppBundle\Service;

use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\Response;

class Export
{
    /**
     * @var EntityManager
     */
    private $doctrine;

    /**
     * Export constructor.
     * @param EntityManager $doctrine
     */
    public function __construct(EntityManager $doctrine)
    {
        $this->doctrine = $doctrine;
    }

    /**
     * @return Response
     */
    public function exportService()
    {
        $answers = $this->doctrine->getRepository('AppBundle:Export')->findAll();
        $handle = fopen('php://memory', 'r+');

        $header = array();

        foreach ($answers as $answer) {
            fputcsv($handle,array($answer->getCol1(),
                $answer->getCol2(),
                $answer->getCol3()
            ),';');
        }

        rewind($handle);
        $content = stream_get_contents($handle);
        fclose($handle);

        $export = new Response($content, 200, array(
            'Content-Type' => 'application/force-download',
            'Content-Disposition' => 'attachment; filename="export.csv"'
        ));

        return $export;
    }
}