function calcularValores(evento){
    evento.preventDefault();

    const elementosInput = document.querySelectorAll('input');

    const valorResposta = document.querySelector('.resposta')

    let valorTensao;
    let valorCorrente;
    let valorResistencia;

    elementosInput.forEach((input) => {
        if (input.id === 'tensao' && input.value){
            valorTensao = input.value;
            
        } else if (input.id === 'corrente' && input.value){
            valorCorrente = input.value;

        } else if (input.id === 'resistencia' && input.value){
            valorResistencia = input.value;
        };
    });

    if (valorTensao && valorCorrente && valorResistencia){
        valorResposta.textContent = 'Seu porra'

    } else if (valorTensao && valorCorrente){
        valorResposta.textContent = `${valorTensao / valorCorrente} Ohms`

    } else if (valorCorrente && valorResistencia){
        valorResposta.textContent = `${valorResistencia * valorCorrente} V`

    } else if (valorTensao && valorResistencia){
        valorResposta.textContent = `${valorTensao / valorResistencia} A`
    }
}