<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="keywords" content="@yield('keywords')">
        
        <!-- Styles -->
        <link href="{{ asset('css/common.css') }}" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        
        <!--style.scssのコンパイル先-->
        <link href="{{ asset('sass/style.css') }}" rel="stylesheet" >
        
        <!--jQuery読み込み-->
        <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>-->
        
        <!-- Js -->
            <script src="{{ asset('js/app.js') }}" defer></script>


    </head>
    <body>
        <div class="wrap">
            @yield('header')
            <section class="contents">
                    <!-- コンテンツ -->
                    @yield('content')
            </section>
            @yield('footer')
        </div>
    </body>
</html>


