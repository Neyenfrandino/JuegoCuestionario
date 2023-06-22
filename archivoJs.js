let intervalo;
let tiempoRestante = 5;

function buscarPorId(nombreID){
    return document.getElementById(nombreID);
}

window.onload = function inicioCuentaRegesiva(){
     let intervalo = setInterval (configuracionCuentaRegresiva, 1000);
}

function configuracionCuentaRegresiva(){
    let elementoCuentaRegresiva = buscarPorId('RelojCuentaRegresiva');
    let modificarReloj = ('00:00:' + tiempoRestante + ' Segundos')
    elementoCuentaRegresiva.textContent = modificarReloj;
    
    tiempoRestante -= 1
    
    if(tiempoRestante <= 0){
        clearInterval(intervalo);
        elementoCuentaRegresiva.textContent = 'Tiempo terminado';
        let miBody = buscarPorId('preguntasYrespuestas')
        miBody.textContent = 'GAME OVER'
       /*  let audioGameOver = buscarPorId('audioVerguenza');
        audioGameOver.play() */
        transformarBoton();
    }

}
function transformarBoton() {
    let botonFin = buscarPorId('botonFin');
    botonFin.textContent = 'Puedes intentarlo de vuelta';
    botonFin.addEventListener('click', function(){
        location.reload();
    })
}

 function elementoDeFoco(idNombre){
    let miElemento = buscarPorId(idNombre);
    miElemento.focus();
}

function configuracionListener(nombreEvento, idNombre, parrafoPregunta){
    let input = buscarPorId(parrafoPregunta);
    input.addEventListener(nombreEvento, function(){ 
        elementoDeFoco(idNombre);
    });
}



function botonFinDeljuego(nombreEvento, idBoton){
    let botonFin = buscarPorId(idBoton)
    botonFin.addEventListener(nombreEvento, function(){
        let valorinputInicio = buscarPorId('caja').value
        let valorinpuSegundo = buscarPorId('segundaCaja').value
        let valorinputTercera = buscarPorId('terceraCaja').value
        let valorinputCuarta = buscarPorId('cuartaCaja').value
        let valorinputQuinta = buscarPorId('quintaCaja').value 
        
        let mensajeFinal = fechaActualizada + ' Respuesta pregunta numero 1: ' + valorinputInicio + "\n" + fechaActualizada 
            + ' Respuesta pregunta numero 2: ' + valorinpuSegundo +
            "\n" + fechaActualizada + ' Respuesta pregunta numero 3: ' + valorinputTercera + "\n" + fechaActualizada 
            + ' Respuesta pregunta numero 4: ' + valorinputCuarta + "\n" + fechaActualizada + ' Respuesta pregunta numero 5: ' 
            + valorinputQuinta;

        alert(mensajeFinal);
     })
}

 function fechaActual(){
    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1 ;
    let anio = fechaActual.getFullYear();

    let fechaFormateada = dia + '/' + mes + '/' + anio;

    return fechaFormateada;
 }


configuracionListener('click', 'caja', 'preguntaInicio');
configuracionListener('click', 'segundaCaja', 'segundaPregunta');
configuracionListener('click', 'terceraCaja', 'terceraPregunta');
configuracionListener('click', 'cuartaCaja', 'cuartaPregunta');
configuracionListener('click', 'quintaCaja', 'quintapregunta');

botonFinDeljuego('click', 'botonFin')

let fechaActualizada = fechaActual();


