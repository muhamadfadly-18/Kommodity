<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrdersSample;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;

class OrdersSampleController extends Controller
{
    public function store(Request $request)
    {
       $validated = $request->validate([
    'buyer_id'     => 'nullable|integer',
    'product_id'   => 'required|integer',
    'supplier_id'  => 'nullable|integer',
    'tgl_order'    => 'nullable|date',
    'description'  => 'nullable|string',
    'author'       => 'nullable|string',
    'status'       => 'nullable|in:0,1,2,3,4,5,6,7,8',
    'email'        => 'nullable|email',
    'country'      => 'nullable|string',
    'first_name'   => 'nullable|string',
    'last_name'    => 'nullable|string',
    'address'      => 'nullable|string',
    'office'       => 'nullable|string',
    'city'         => 'nullable|string',
    'province'     => 'nullable|string',
    'postal_code'  => 'nullable|string',
    'phone'        => 'nullable|string',
    'sample_qty'   => 'nullable|integer',
]);

$order = new OrdersSample();
$order->orders_code  = 'ORD-' . strtoupper(Str::random(8));
$order->buyer_id     = $validated['buyer_id'] ?? 0;
$order->product_id   = $validated['product_id'];
$order->supplier_id  = $validated['supplier_id'] ?? null;
$order->tgl_order    = $validated['tgl_order'] ?? now()->toDateString();
$order->description  = $validated['description'] ?? null;
$order->created      = now();
$order->author       = $validated['author'] ?? 'guest';
$order->status       = $validated['status'] ?? 1;

$order->email        = $validated['email'] ?? null;
$order->country      = $validated['country'] ?? null;
$order->first_name   = $validated['first_name'] ?? null;
$order->last_name    = $validated['last_name'] ?? null;
$order->address      = $validated['address'] ?? null;
$order->office       = $validated['office'] ?? null;
$order->city         = $validated['city'] ?? null;
$order->province     = $validated['province'] ?? null;
$order->postal_code  = $validated['postal_code'] ?? null;
$order->phone        = $validated['phone'] ?? null;
$order->sample_qty   = $validated['sample_qty'] ?? null;

$order->save();

        

        return response()->json([
            'status' => true,
            'message' => 'Order berhasil disimpan!',
            'data' => $order
        ]);
    }
}
