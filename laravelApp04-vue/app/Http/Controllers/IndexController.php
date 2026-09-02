<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    //

    public function home(){


        return Inertia::render('Home', [
            'title' => 'Home Page',
        ]);

    }

    public function aboutPage(){
         return Inertia::render('About');
    }
}
