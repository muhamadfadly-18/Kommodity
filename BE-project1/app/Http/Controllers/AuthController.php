<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Registered;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:100',
            'last_name' => 'required|string|max:100',
            'reason' => 'required|string|max:100',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
           
            
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'reason' => $request->reason,
            'password' => Hash::make($request->password),
            // 'confirmPassword' => Hash::make($request->password),
        ]);


        event(new Registered($user)); // Kirim email verifikasi otomatis

        // 🔥 Generate token langsung walau belum verifikasi
        $token = $user->createToken('api_token')->plainTextToken;

        return response()->json([
            'message' => 'Registered successfully. Please verify your email.',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user,
        ], 201);
    }


    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid login details'], 401);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user->hasVerifiedEmail()) {
            return response()->json(['message' => 'Email not verified.'], 403);
        }

        $token = $user->createToken('api_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user,
        ]);
    }
}
