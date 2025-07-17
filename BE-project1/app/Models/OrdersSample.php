<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrdersSample extends Model
{
    use HasFactory;
    protected $table = 'orders_sample'; // atau 'orders' kalau itu nama tabelnya

protected $primaryKey = 'id_orders';

public $timestamps = false; // karena pakai field custom 'created' dan 'updated'

protected $fillable = [
        'orders_code',
        'buyer_id',
        'product_id',
        'supplier_id',
        'tgl_order',
        'description',
        'created',
        'author',
        'status',
        'email',
        'country',
        'first_name',
        'last_name',
        'address',
        'office',
        'city',
        'province',
        'postal_code',
        'phone',
        'sample_qty',
    ];

}
