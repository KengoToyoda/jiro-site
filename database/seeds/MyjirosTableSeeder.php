<?php

use Illuminate\Database\Seeder;

class MyjirosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $myjiros = array(
            '三田本店','目黒','仙川','歌舞伎町','品川','小滝橋',
            '新代田','野猿街道','池袋','亀戸','京急川崎','府中',
            '松戸','めじろ台','荻窪','上野毛','京急大久保','一之江'.
            '相模大野','関内','神保町','小岩','ひばりヶ丘','桜台',
            '栃木街道','立川','千住大橋','茨城守谷','湘南藤沢','西台',
            '中山','仙台','札幌','会津若松','新潟','川越',
            '京都','越谷','前橋','千葉','大宮公園'
        );
        foreach($myjiros as $myjiro){
            DB::table('myjiros')->insert([
                'name' => $myjiro,
                'image' => 'jiro-default.png' 
            ]);
        }
        
    }
}
