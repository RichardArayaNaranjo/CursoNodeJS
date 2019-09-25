
var n;
(function index(){

    n=1;
    var interval = setInterval(ejcucionintervalo);
    setTimeout(()=>{
        clearInterval(interval);
        console.log('termino');
    }, 300000);

})();

function ejcucionintervalo()
{
    if(calcularNumeroPrimo(n)){
        console.log(n);
    }   
    n++;
}

function calcularNumeroPrimo(numero) {
    var esprimo = true
    var i = 0;

    for(i=2; i < numero; i++)
    {
        if((numero % i) == 0)
        {
            esprimo = false;
        }
    }    
    return esprimo;
}
