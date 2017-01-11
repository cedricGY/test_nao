<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class ExportController extends Controller
{
    /**
     * @Route("/", name="accueil")
     * @Template("default/index.html.twig")
     */
    public function indexAction()
    {

    }
    /**
     * @return Response
     * @Route("/download", name="download")
     */
    public function exportAction()
    {
        $export = $this->get('app.export')->exportService();

        //return $this->redirectToRoute('accueil');
        return $export;
    }
}