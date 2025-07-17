<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'tabel_product';
    protected $primaryKey = 'product_id';

    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id');
    }
public function productCategorySub()
{
    return $this->belongsTo(ProductCategorySub::class, 'product_category_sub_id');
}
    
    public function categorySub()
    {
        return $this->belongsTo(ProductCategorySub::class, 'product_category_sub_id');
    }
}