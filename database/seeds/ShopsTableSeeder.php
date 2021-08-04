<?php

use Illuminate\Database\Seeder;

class ShopsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shops')->insert([
            'shop' => 'ラーメン二郎 ひばりヶ丘店',
            'address' => '〒188-0001 東京都西東京市谷戸町３丁目２７−２４ ひばりヶ丘プラザ1F',
            'holiday' => '日曜日',
            'hour' => '【月曜〜金曜】11:30〜14:30／17:45〜21:15,【土曜】10:30〜16:30',
            'image' => 'https://jiro-ramen.s3.ap-northeast-1.amazonaws.com/jiro-basis/hibari.jpg'
        ]);
    }
}
