<?php
    require_once 'config.php';

    $disable = '';
    $aciertos = '';
    $evidencias = '';
    $bandera = false;
    if (isset($_GET['request'])) {
        $bandera = true;
        $disable = 'disabled';
        $aciertos = $_GET['aciertos'];
        $evidencias = $_GET['evidencias'];;
    }
?>

<!doctype html>
<html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <title>CALIFICA</title>
    </head>
    <body>
        <?php require_once 'navbar.php'; ?>
        <br>
        <div class="container">

            <?php if ($bandera): ?>
                <?php require_once 'examen.php'; ?>
                <br><br>
                <?php require_once 'evidencias.php'; ?>
                <br><br>
                <?php require_once 'calificacion.php'; ?>
            <?php endif; ?>

        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <script src='main.js'></script>
    </body>
</html>