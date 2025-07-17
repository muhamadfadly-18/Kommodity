<?php

use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductCategorySubController;
use App\Http\Controllers\OrderRequestController;
use App\Http\Controllers\OrdersSampleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/product-category', [ProductCategoryController::class, 'index']);


Route::post('/order-request', [OrderRequestController::class, 'store']);

Route::post('/orders-sample', [OrdersSampleController::class, 'store']);

Route::get('/product-category-sub/{id}', [ProductCategorySubController::class, 'show']);

Route::get('/product-category-sub/{id}/similar', [ProductCategorySubController::class, 'similar']);


Route::get('/products', [ProductController::class, 'index']);

// Email Verification

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return Redirect::away('http://localhost:3000/login');
})->middleware(['signed'])->name('verification.verify');

Route::get('/check-verification-status', function (Request $request) {
    $user = \App\Models\User::where('email', $request->email)->first();
    if (!$user) {
        return response()->json(['verified' => false], 404);
    }

    return response()->json(['verified' => $user->hasVerifiedEmail()]);
});


Route::post('/email/resend', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return response()->json(['message' => 'Verification email sent!']);
})->middleware(['auth:sanctum']);
