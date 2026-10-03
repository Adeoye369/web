<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IndexController;

// Route::inertia('/', 'Index')->name('home');

Route::get('/', [IndexController::class, 'indexAction']);
Route::get('/show', [IndexController::class, 'showAction']);
