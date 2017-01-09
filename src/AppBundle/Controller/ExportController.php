<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class ExportController extends Controller
{
    public function exportAction()
    {
        $connectToDb = $this->get('database_connection');

        $datas = $connectToDb->query("SELECT * FROM tbl_name");

        $fileToDownload = $this->get('app.export')->buildDatas($datas);
        return new Response($fileToDownload);
    }
}
