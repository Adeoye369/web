<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

// Route::inertia('/', 'Welcome')->name('home');

Route::get("/", [HomeController::class, 'homeFunc']);
Route::get("/user/{userInfo}/{age}", [HomeController::class, 'userFunc']);