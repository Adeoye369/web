<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function homeFunc(){
        return Inertia::render("User/Index", [
            'homeTitle' => "Title home"
        ]);
    }
    
    public function userFunc($userInfo, $age){
        return Inertia::render("User/UserDetail", [
            'userInfo' => $userInfo,
            'age' => $age
        ]);
    }
}
