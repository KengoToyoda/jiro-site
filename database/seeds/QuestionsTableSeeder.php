<?php

use Illuminate\Database\Seeder;

class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('questions')->insert([
            'id' => 1,
            'quiz_id' => 1,
            'answerText' => '普通で',
            'isCorrect' => true,
        ]);
        DB::table('questions')->insert([
            'id' => 2,
            'quiz_id' => 1,
            'answerText' => 'ニンニクで',
            'isCorrect' => false,
        ]);
        DB::table('questions')->insert([
            'id' => 3,
            'quiz_id' => 1,
            'answerText' => 'ニンニクヤサイアブラで',
            'isCorrect' => false,
        ]);
        DB::table('questions')->insert([
            'id' => 4,
            'quiz_id' => 1,
            'answerText' => 'お願いします',
            'isCorrect' => false,
        ]);
        
        DB::table('questions')->insert([
            'id' => 5,
            'quiz_id' => 2,
            'answerText' => 'ラーメン二郎札幌店',
            'isCorrect' => true,
        ]);
        DB::table('questions')->insert([
            'id' => 6,
            'quiz_id' => 2,
            'answerText' => 'ラーメン二郎仙台店',
            'isCorrect' => false,
        ]);
        DB::table('questions')->insert([
            'id' => 7,
            'quiz_id' => 2,
            'answerText' => 'ラーメン二郎京都店',
            'isCorrect' => false,
        ]);
        DB::table('questions')->insert([
            'id' => 8,
            'quiz_id' => 2,
            'answerText' => 'ラーメン二郎盛岡店',
            'isCorrect' => false,
        ]);
    }
}
