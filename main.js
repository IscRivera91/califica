
let total_aciertos = document.getElementById("aciertos").value;
let numero_evidencias = document.getElementById("evidencias").value;

let porcentaje_examen_maximo = document.getElementById("porcentaje_examen").value;
let porcentaje_evidencias_maximo = document.getElementById("porcentaje_evidencias").value;

let examen_id_anterior;
let examen_id_actual;
let aciertos_obtenidos = 0;
let calificacion_examen = 0;
let porcentaje_examen = 0;
let porcentaje_evidencias = 0;
let numero_evidencias_entregadas = 0;
let calificacion_final = 0;

let div_numero_evidencias = document.getElementById("numero_evidencias_");
let div_porcentaje_evidencias = document.getElementById("porcentaje_evidencias_");
let div_calificacion_examen = document.getElementById("calificacion_examen_");
let div_porcentaje_examen = document.getElementById("porcentaje_examen_");
let div_calificacion_final = document.getElementById("calificacion_final_");

// procedimiento para generar arrays para las evidencias

let array_evidencia_id_anterior = [];
let array_evidencia_id_actual = [];
let array_calificacion_evidencia = [];

for (let i = 0; i < numero_evidencias; i++) {
    array_evidencia_id_anterior[i] = 'evidencia'+i+'_'+0;
    array_evidencia_id_actual[i] = 'evidencia'+i+'_'+0;
    array_calificacion_evidencia[i] = 0;
}

// finaliza procedimientos

function examen ( valor ) {
    examen_id_anterior = examen_id_actual;
    examen_id_actual = 'examen'+valor;

    aciertos_obtenidos = valor;

    if (examen_id_anterior) {
        document.getElementById(examen_id_anterior).classList.remove('btn-success');
        document.getElementById(examen_id_anterior).classList.add('btn-info');
    }

    document.getElementById(examen_id_actual).classList.remove('btn-info');
    document.getElementById(examen_id_actual).classList.add('btn-success');
    calcula_todo();
}

function evidencia(numero, valor) {

    array_calificacion_evidencia[numero] = valor;
    array_evidencia_id_anterior[numero] = array_evidencia_id_actual[numero]
    array_evidencia_id_actual[numero] = 'evidencia'+numero+'_'+valor;

    document.getElementById(array_evidencia_id_anterior[numero]).classList.remove('btn-success');
    document.getElementById(array_evidencia_id_anterior[numero]).classList.add('btn-info');

    document.getElementById(array_evidencia_id_actual[numero]).classList.remove('btn-info');
    document.getElementById(array_evidencia_id_actual[numero]).classList.add('btn-success');
    calcula_todo();
}

function calcula_numero_evidencias() {
    numero_evidencias_entregadas = 0;
    for (let i = 0; i < numero_evidencias; i++) {
        if (array_calificacion_evidencia[i] != 0) {
            numero_evidencias_entregadas++;
        }
    }
    div_numero_evidencias.innerHTML = numero_evidencias_entregadas+'/'+numero_evidencias;
}

function calcula_porcentaje_evidencias(){
    porcentaje_evidencias = 0;
    let valor_evidencia = porcentaje_evidencias_maximo / numero_evidencias;
    for (let i = 0; i < numero_evidencias; i++) {
        porcentaje_evidencias += (array_calificacion_evidencia[i] * valor_evidencia ) / 10;
    }
    div_porcentaje_evidencias.innerHTML = porcentaje_evidencias+'%';
}

function calcula_calificaion_examen () {
    calificacion_examen = (aciertos_obtenidos * 10 ) / total_aciertos;
    div_calificacion_examen.innerHTML = calificacion_examen;
}

function calcula_porcentaje_examen(){
    porcentaje_examen = (aciertos_obtenidos * porcentaje_examen_maximo ) / total_aciertos;
    div_porcentaje_examen.innerHTML = porcentaje_examen+'%';
}

function calcula_calificacion_final() {
    calificacion_final = porcentaje_evidencias + porcentaje_examen;
    calificacion_final = calificacion_final / 10;
    div_calificacion_final.innerHTML = calificacion_final;
}

function calcula_todo() {
    calcula_numero_evidencias();
    calcula_porcentaje_evidencias();
    calcula_calificaion_examen();
    calcula_porcentaje_examen();
    calcula_calificacion_final();
}

