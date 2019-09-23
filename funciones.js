
setTimeout(function(){
    console.log("Esperamos 5 segundos antes de mostrar esto");
}, 5000);

function funcionQueEsperaEjecucion()
{
    console.log("funcionQEsperaEjecución 3 "+
    "segundos antes de mostrar esto ");
}

setTimeout(funcionQueEsperaEjecucion, 3000);