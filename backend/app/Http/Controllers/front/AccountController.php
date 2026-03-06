<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AccountController extends Controller
{
    //

    public function register(Request $request)
    {
        dd($request->all());
        $validator= Validator::make($request->all(),[
            'name' => 'required|min:5',
            'email' =>'required|email|unique:users',
            'password' => 'required|min:8'

        ]);


        if($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()

            ],400);
        }

        $user= new User();

        $user->name=$request->name;
        $user->email=$request->email;
        $user->password=Hash::make($request->password);
        $user->save();


        return response()->json([
            'status'=>200,
            'message'=>'user registered successfully,'
        ],200);


    }








}
