<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;

class VerifyEmailController extends Controller
{
    public function verify(Request $request, $id, $hash)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }

        if (!hash_equals((string) $hash, sha1($user->getEmailForVerification()))) {
            return response()->json(['message' => 'Invalid verification link.'], 403);
        }

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        return Redirect::away('http://localhost:3000/pages/Login');
    }
}
