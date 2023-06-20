let intervalo;
let tiempoRestante = 30;

function buscarPorId(nombreID){
    return document.getElementById(nombreID);
}

window.onload = function inicioCuentaRegesiva(){
    let miBody = document.getElementsByTagName('body');
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
    }

      console.log('funciona')
}

