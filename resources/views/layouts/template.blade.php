<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="keywords" content="@yield('keywords')">
        
        <!-- Styles -->
        <!--<link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">-->
        <!-- Reset.css読み込み -->
        <!--<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css">-->
        <link href="{{ asset('css/common.css') }}" rel="stylesheet" type="text/css">
        
        <!--style.scssのコンパイル先-->
        <link href="{{ asset('sass/style.css') }}" rel="stylesheet" >
        
        <!--jQuery読み込み-->
        <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>-->
        
        <!-- Js -->

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
        
    <script src="{{ asset('js/app.js') }}" ></script>
    </body>
</html>


