<?php
?>
<h3>Examen</h3>

<?php for($i = 1 ; $i <= $aciertos ; $i++): ?>
    <button id="examen<?= $i ?>" onclick="examen(<?= $i ?>)" style="margin: 0.1rem" class="btn btn-info"><?= $i ?></button>
<?php endfor; ?>
