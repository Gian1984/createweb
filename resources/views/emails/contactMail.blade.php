<!DOCTYPE html>

    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Createweb.info</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    </head>

    <body class="antialiased">

        <h2>Hey !</h2> <br><br>

        You received an email from : {{ $details->firstname }} {{ $details->lastname }}<br><br>


    </body>

</html>
