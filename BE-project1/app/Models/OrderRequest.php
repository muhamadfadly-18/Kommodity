<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderRequest extends Model
{
    protected $table = 'orders_request'; // Nama tabel
    protected $primaryKey = 'id_orders'; // Custom PK

    public $timestamps = false; // Karena pakai `created`, bukan default timestamp

    protected $fillable = [
        'orders_code',
        'buyer_id',
        'product_id',
        'message',
        'created',
        'updated',
        'status'
    ];
}
