<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ContactController extends Controller
{
    /**
     * @@Route("/contact", name="contact")
     */
    public function indexAction()
    {
        return $this->render(':default:contact.html.twig');
    }
}
