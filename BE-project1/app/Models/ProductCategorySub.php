<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCategorySub extends Model
{
    protected $table = 'tabel_product_category_sub';

    protected $primaryKey = 'product_category_sub_id';

    public $timestamps = false;
    public function productCategory()
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id');
    }

    public function tabelProductCategory()
    {
        return $this->belongsTo(\App\Models\ProductCategory::class, 'product_category_id');
    }
    protected $casts = [
        'foto_product' => 'array',
    ];

    protected $fillable = [
        'product_category_id',
        'product_category_sub',
        'description',
        'thumbnail',
        'image',
        'icon',
        'meta_description',
        'meta_keyword',
        'slug',
        'created',
        'author',
        'updated',
        'updater',
        'status',
    ];
}
