<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderRequest;
use Illuminate\Support\Str;

class OrderRequestController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'buyer_id'   => 'required|integer',
            'product_id' => 'required|integer',
            'message'    => 'required|string',
            'status'     => 'nullable|in:0,1'
        ]);

        $order = new OrderRequest();
        $order->orders_code = 'REQ-' . strtoupper(Str::random(8));
        $order->buyer_id    = $validated['buyer_id'];
        $order->product_id  = $validated['product_id'];
        $order->message     = $validated['message'];
        $order->tgl_order     = now();
        $order->status      = $validated['status'] ?? 1;

        $order->save();

        return response()->json([
            'status' => true,
            'message' => 'Request berhasil dikirim!',
            'data' => $order
        ]);
    }
}
