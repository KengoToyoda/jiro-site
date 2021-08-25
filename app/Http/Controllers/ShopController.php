<?php

namespace App\Http\Controllers;

use App\Myjiro;
use App\Shop;
use Illuminate\Support\Facades\Storage;//画像操作
use Illuminate\Http\Request;

class ShopController extends Controller
{   
    
    /**
     * myjiroの情報をDBから取得
     */
     
    public function indexMyjiro(){
        return view('shop.myjiro');
    }
    
    public function indexMypage(){
        return view('shop.mypage');
    }
     
    
    /**
     * myjiroの情報をDBに登録
     */
     
    public function storeMyjiros(Request $request, Myjiro $myjiro){
        $myjiro->name = $request->name;
        if($request->image){
            $photo = $request->image;
            $photo_name = $photo->getClientOriginalName();
            Storage::disk('s3')->putFileAs('myjiros',$photo,$photo_name);
            $myjiro->image = $photo_name;
        }
        $myjiro->save();
        $myjiros = Myjiro::all();
        return $myjiro;
    }
    
    public function deleteMyjiros(Request $request, Myjiro $myjiro){
        $myjiro->delete();
        $myjiros = Myjiro::all();
        return response()->json(['myjiros' => $myjiros]);
    }
}
