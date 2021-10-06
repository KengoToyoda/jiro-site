<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Quiz;

class QuizController extends Controller
{
    public function index(Quiz $quiz){
        return view('quiz/index');
    }
    
    public function fetch(Quiz $quiz){
        $user = Auth::user();
        $quizzes = $user->quizzes()->get();
        return response()->json($quizzes);
    }
}
