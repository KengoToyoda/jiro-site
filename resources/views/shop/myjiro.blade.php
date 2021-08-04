@extends('layouts.template')

@section('title', '二郎食堂')
@section('keywords', '二郎', '二郎ラーメン')
@section('description', '二郎をこよなく愛し、崇拝する人々のためのサイトです。')

    @include('layouts.header')
    
    @section('content')
        <!-- pc left lock start-->
        <div class="">
            <h1>Myjiro</h1>
            <div id="myjiro"></div>
        </div>
    
        
    @endsection
    
    @include('layouts.footer')
        
        
