
(function(e){ //IIFE - Imediately Invoked Function Execution (para fugir do escopo global)

    
    const btnIgual = document.querySelector('.btnIgual');
    const inputCalculadora = document.querySelector('.inputCalculadora');
    const resultado = document.querySelector('.resultado');
    const btnSomar = document.querySelector('.btnSomar');
    const btnSubtrair = document.querySelector('.btnSubtrair');
    const btnDividir = document.querySelector('.btnDividir');
    const btnMultiplicar = document.querySelector('.btnMultiplicar');
    const btnLimpar = document.querySelector('.btnLimpar');

    let operador;
  
    const calculadora = (operador, total = 0, ...numeros) => { //Factory Function
        return {
            operador,
            get calcula(){
                for(let numero of numeros) {
                    if (this.operador === '+') total += numero;
                    if (this.operador === '-') total -= numero;
                    if (this.operador === '/') total /= numero;
                    if (this.operador === '*') total *= numero;
                }
                
                return resultado.innerText = total;
            }
        }
    }

    
    document.addEventListener('click', function(e) {
        const el = e.target;

        if(el.classList.contains('btnNum')){
            doBotaoParaInput(el.innerText);
        }
    })

    const doBotaoParaInput = (texto) => {
        inputCalculadora.value += texto;
    }

    btnSomar.addEventListener('click', function(e) {
        const el = e.target;

        if(el.classList.contains('btnSomar')){
            doBotaoParaInput(el.innerText);
        }

        operador = '+';
        console.log('soma clicado. operador: +')
        
        return operador;
    })

    btnSubtrair.addEventListener('click', function(e) {
        const el = e.target;

        if(el.classList.contains('btnSubtrair')){
            doBotaoParaInput(el.innerText);
        }

        operador = '-';
        console.log('subtrair clicado. operador: -')
        return operador;
    })

    btnDividir.addEventListener('click', function(e) {
        const el = e.target;

        if(el.classList.contains('btnDividir')){
            doBotaoParaInput(el.innerText);
        }

        operador = '/';
        console.log('dividir clicado. operador: /')
        return operador;
    })

    btnMultiplicar.addEventListener('click', function(e) {
        const el = e.target;

        if(el.classList.contains('btnMultiplicar')){
            doBotaoParaInput(el.innerText);
        }

        operador = '*';
        console.log('multiplicar clicado. operador: *')
        return operador;
    })

    btnLimpar.addEventListener('click', function(e) {
        inputCalculadora.value = '';
    })

    inputCalculadora.addEventListener('keypress', function(e) {
        if(e.keyCode === 13){
            console.log('enter pressionado: ', e);
            if(eval(inputCalculadora.value) === undefined || NaN){
                throw new Error('Utilize números corretos, por favor.')
            }
            else{
                resultado.innerHTML = eval(inputCalculadora.value);
            }
        }
    })
     
    btnIgual.addEventListener('click', function(e) {      
        return resultado.innerHTML = eval(inputCalculadora.value);
    })
    


})()

