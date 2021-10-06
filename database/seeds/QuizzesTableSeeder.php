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
            'correct' => '普通で',
            'uncorrect1' => 'ニンニクで',
            'uncorrect2' => 'ニンニクヤサイアブラで',
            'uncorrect3' => 'お願いします',
            'image' => 'jiro-default.png',
            'description' => '人によって普通は違うため、曖昧な表現になってしまいます。',
        ]);
    }
}
