<?php

namespace App\Http\Controllers;

use App\Myjiro;
use App\Shop;
use Illuminate\Http\Request;

class ShopController extends Controller
{   
    
    /**
     * myjiroの情報をDBから取得
     */
     
    public function indexMijiro(){
        return view('shop.myjiro');
    }
     
    public function getMyjiros(){
        
        $myjiros = App\Myjiro::all();
        return response()->json(['myjiros' => $myjiros]);
    }
    
    /**
     * myjiroの情報をDBに登録
     */
     
    public function storeMyjiros(Request $request, Myjiro $myjiro){
        
        $myjiro->name = $request->name;
        // $photo = $request->file('image');
        // $photo_name = $photo->getClientOriginalName();
        // Storage::disk('s3')->putFileAs('myjiro',$photo,$photo_name);
        // $myjiro->image = $photo_name;
        
        $myjiro->save();
        $myjiros = Myjiro::all();
        return $myjiro;
    }
    
}
