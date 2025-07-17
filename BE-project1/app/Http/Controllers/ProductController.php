<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index()
    {
        $products = DB::table('tabel_product')
            ->leftJoin('tabel_product_category', 'tabel_product.product_category_id', '=', 'tabel_product_category.product_category_id')
            ->select(
                'tabel_product.product_id as id',
                'tabel_product.product_name as name',
                'tabel_product_category.product_category as category', // atau 'product_category' jika mau label
                'tabel_product.product_status',
                'tabel_product.thumbnail as image'
            )
            ->where('tabel_product.status', '1')
            ->get()
            ->map(function ($item) {
                $item->stockStatus = match ($item->product_status) {
                    'ready_stok' => 'Ready Stock',
                    'pre_order' => 'Pre-Order',
                    'sold' => 'Sold',
                    default => 'Unknown'
                };
                unset($item->product_status);
                return $item;
            });

        return response()->json($products);
    }
}
