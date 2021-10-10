
<?php for($j = 0 ; $j < $evidencias ; $j++): ?>
    <h3>Evidencia<?= $j; ?></h3>
    <button id="evidencia<?= $j ?>_0" onclick="evidencia(<?= $j ?>,0)" style="margin: 0.1rem" class="btn btn-success">NP</button>
    <?php for($i = 1 ; $i <= 10 ; $i++): ?>
        <button id="evidencia<?= $j ?>_<?= $i ?>" onclick="evidencia(<?= $j ?>,<?= $i ?>)" style="margin: 0.1rem" class="btn btn-info"><?= $i ?></button>
    <?php endfor; ?>
    <br>
<?php endfor; ?>
