<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductCategorySub;

class ProductCategorySubController extends Controller
{


    public function show($id)
    {
        try {
            $sub = \App\Models\ProductCategorySub::with(['tabelProductCategory.tableProduct'])
                ->findOrFail($id);

            $response = [
                'id' => $sub->product_category_sub_id,
                'product_category_sub_id' => $sub->product_category_sub_id,
                'description' => $sub->description,
                'foto_product' => $sub->foto_product ?? [], // <= Tambahan ini
                'product_category' => [
                    'image' => $sub->tabelProductCategory->image ?? null,
                    'product_category' => $sub->tabelProductCategory->product_category ?? null,
                    'table_product' => [
                        'name' => $sub->tabelProductCategory->tableProduct->product_name ?? null,
                        'thumbnail' => $sub->tabelProductCategory->tableProduct->thumbnail ?? null,
                        'product_category_id' => $sub->tabelProductCategory->tableProduct->product_category_id ?? null,
                    ],
                ],
            ];

            return response()->json([
                'status' => true,
                'data' => $response
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Server error: ' . $e->getMessage(),
            ], 500);
        }
    }


    public function similar($id)
    {
        try {
            // Cari sub kategori berdasarkan ID
            $sub = \App\Models\ProductCategorySub::with('tabelProductCategory')->findOrFail($id);

            // Ambil product_category_id dari relasi
            $productCategoryId = $sub->tabelProductCategory->product_category_id ?? null;

            // Kalau gak ada category ID, langsung balikin array kosong
            if (!$productCategoryId) {
                return response()->json([
                    'status' => true,
                    'data' => []
                ]);
            }

            // Ambil semua produk yang punya product_category_id yang sama
            $products = \App\Models\Product::where('product_category_id', $productCategoryId)->get();

            // Format responsenya
            $data = $products->map(function ($product) {
                return [
                    'id' => $product->product_id,
                    'product_category_id' => $product->product_category_id,
                    'name' => $product->product_name,
                    'image' => $product->thumbnail ? $product->thumbnail : '/default.jpg',
                    'stockStatus' => $product->product_status === 'ready_stok' ? 'Ready Stock' : 'Pre Order',
                ];
            });

            return response()->json([
                'status' => true,
                'data' => $data
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error: ' . $e->getMessage()
            ], 500);
        }
    }




}
