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
        DB::table('myjiros')->insert([
            'name' => 'ラーメン二郎 ひばりヶ丘店',
            'image' => 'https://jiro-ramen.s3.ap-northeast-1.amazonaws.com/jiro-basis/hibari.jpg'
        ]);
    }
}
