<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;

class ProductCategoryController extends Controller
{
    public function index()
    {
        // Ambil data hanya kolom name & img
        $categories = ProductCategory::select('product_category','image')->get();

        return response()->json($categories);
    }
}
