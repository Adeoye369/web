<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function indexAction()
    {   
        return inertia('home/Index',
            [
                'message'=> "Hello from IndexAction",
                'count' => 1000,
                'isLogged' => false
             ]
        );
    }

    public function showAction(){
        return inertia('home/Show');
    }
}
