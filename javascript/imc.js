
// Constantes
const nome = document.getElementById( 'nome' );
const altura = document.getElementById( 'altura' );
const peso = document.getElementById( 'peso' );
const calcular = document.getElementById( 'calcular' );
const resultado = document.getElementById( 'resultado' );


// Função do IMC 
function imc () {
    const nome = document.getElementById( 'nome' ).value;
    const idade = document.getElementById( 'idade' ).value;
    const altura = document.getElementById( 'altura' ).value;
    const peso = document.getElementById( 'peso' ).value;
    const resultado = document.getElementById( 'resultado' );

    // Verificação do Resultado do IMC
    if (nome !== '' && altura !== '' && peso !== '') {
        const valor_imc = (peso / (altura * altura)).toFixed(1);

        let classificacao_para_adultos = '';
        let classificacao_para_idosos = '';


        // IMC dos Adultos
        if (idade >= 18 && idade <= 59) {
            if (valor_imc < 18.5) {
                classificacao_para_adultos = 'Abaixo do peso.';
            } else if (valor_imc > 18.5 && valor_imc <= 24.9) {
                classificacao_para_adultos = 'Com o peso ideal.';
            } else if (valor_imc > 24.9 && valor_imc <= 29.9) {
                classificacao_para_adultos = 'Levemente acima do peso.';
            } else if (valor_imc > 30 && valor_imc <= 34.9) {
                classificacao_para_adultos = 'Com obesidade de grau I';
            } else if (valor_imc > 34.9 && valor_imc <= 40) {
                classificacao_para_adultos = 'Com obesidade de grau II';
            } else {
                classificacao_para_adultos = 'Com obesidade de grau III.';
            }

        }

        
        // IMC dos Idosos
        if (idade >= 60) {
            if (valor_imc < 22) {
                classificacao_para_idosos = 'Abaixo do peso.';
            }else if (valor_imc > 22 && valor_imc <= 27) {
                classificacao_para_idosos = 'Adequado ou Eurotrófico';
            }else {
                classificacao_para_idosos = 'Sobrepeso';
            }
        
        }

        if (classificacao_para_adultos) {
            resultado.textContent = `${nome} seu imc é ${valor_imc} e você está ${classificacao_para_adultos}`;
        } else if (classificacao_para_idosos) {
            resultado.textContent = `${nome} seu imc é ${valor_imc} e você está ${classificacao_para_idosos}`;
        }

    }else {
        resultado.textContent = 'Preencha Todos Os Campos!!';
    }
}

calc.addEventListener('click', imc);

