<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IndexController;

// Route::inertia('/', 'Welcome')->name('home');

Route::get('/', [IndexController::class, 'home'])->name('Home Page');
Route::get('/about', [IndexController::class, 'aboutPage']);
