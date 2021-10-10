<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="<?= RAIZ ?>">Califica</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <form class="d-flex" action="<?= RAIZ ?>" method="GET">
                <input name="request" type="hidden">
                <input id="porcentaje_examen" value="<?= EXAMEN_VALUE ?>" type="hidden">
                <input id="porcentaje_evidencias" value="<?= EVIDENCIAS_VALUE ?>" type="hidden">
                <input <?= $disable ?> value="<?= $aciertos ?>" class="form-control me-2" name="aciertos" id="aciertos" type="number" placeholder="Aciertos" required aria-label="Aciertos">
                <input <?= $disable ?> value="<?= $evidencias ?>" class="form-control me-2" name="evidencias" id="evidencias" type="number" placeholder="Evidencias" required aria-label="Evidencias">
                <button <?= $disable ?> class="btn btn-outline-success" type="submit">Iniciar</button>
            </form>
        </div>
    </div>
</nav>
