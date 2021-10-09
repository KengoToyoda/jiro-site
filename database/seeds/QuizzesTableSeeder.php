<?php

use Illuminate\Database\Seeder;

class QuizzesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('quizzes')->insert([
            'id' => 1,
            'user_id' => 1,
            'question' => '「ニンニクは？」に対する正しいコールで最も相応しくないのはどれでしょう',
            'image' => 'jiro-default.png',
            'description' => '人によって普通は違うため、曖昧な表現になってしまいます。',
        ]);
        DB::table('quizzes')->insert([
            'id' => 2,
            'user_id' => 1,
            'question' => '二郎の中で最も北にある店舗はなに店でしょう',
            'image' => 'jiro-default.png',
            'description' => '人生で一度は行ってみたいものですね〜',
        ]);
    }
}
