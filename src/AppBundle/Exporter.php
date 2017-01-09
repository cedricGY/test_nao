<?php
/**
 * Created by PhpStorm.
 * User: Carla Marques
 * Date: 07/01/2017
 * Time: 13:39
 */

namespace AppBundle;

use Symfony\Component\HttpFoundation\StreamedResponse;

class Exporter
{
    public function buildDatas($datas)
    {
        $response = new StreamedResponse();
        $response->setCallback(function() use($datas)
        {
            $handle = fopen('php://output', 'w+');

            // Nom des colonnes du CSV
            fputcsv($handle, array('Colonne'),';');

            //Champs
            while( $row = $datas->fetch() )
            {
                fputcsv($handle,array($row['col_1']),';');
            }

            fclose($handle);
        });

        $response->setStatusCode(200);
        $response->headers->set('Content-Type', 'text/csv; charset=utf-8');
        $response->headers->set('Content-Disposition','attachment; filename="export.csv"');

        return $response;
    }
}