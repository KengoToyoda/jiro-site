<?php

namespace App\Http\Controllers;

use App\Myjiro;
use App\Shop;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ShopController extends Controller
{   
    public function index(){
        return view('shop.index');
    }
    
    /**
     * myjiroの情報をDBから取得
     */
    public function fetchMyjiros(){
        $user = Auth::user();
        $myjiros = new Myjiro();
        $myjiros = $user->myjiros()->get();
        $notMyjiros = Myjiro::where('user_id', NULL)->get(); 
        return response()->json([
            'myjiros' => $myjiros,
            'notMyjiros' => $notMyjiros
        ]);
    }
    
    /**
     * myjiroの情報をDBに登録
     */
    public function storeMyjiros(Request $request, Myjiro $myjiro){
        if($request->image){
            Storage::disk('s3')->delete('myjiros/' . $myjiro->image); //元の画像を削除☆
            $photo = $request->image;
            $photo_name = $photo->getClientOriginalName();
            Storage::disk('s3')->putFileAs('myjiros',$photo,$photo_name);
            $myjiro->image = $photo_name;
        }
        $myjiro->user_id = Auth::id();
        $myjiro->save();
        $myjiros = Myjiro::all();
        return $myjiros;
    }
    
    public function deleteMyjiros(Request $request, Myjiro $myjiro){
        $myjiro->delete();
        $myjiros = Myjiro::all();
        return response()->json(['myjiros' => $myjiros]);
    }
    

    
    
    
}
