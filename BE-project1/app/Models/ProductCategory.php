<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    protected $table = 'tabel_product_category';
    protected $primaryKey = 'product_category_id';
    public function tableProduct()
{
    return $this->hasOne(\App\Models\Product::class, 'product_category_id', 'product_category_id');
}

    protected $fillable = ['product_category', 'image'];
}