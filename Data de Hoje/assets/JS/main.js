//Funcao que retorna o nome dos dias da semana
function Hoje(Hojedia){
    let retornoDia;
    switch(Hojedia){
        case 0: retornoDia = 'Domingo';
        return retornoDia;
        case 1: retornoDia = 'Segunda-Feira';
        return retornoDia;
        case 2: retornoDia = 'Terça-Feira';
        return retornoDia;
        case 3: retornoDia = 'Quarta-Feira';
        return retornoDia;
        case 4: retornoDia = 'Quinta-Feira';
        return retornoDia;
        case 5: retornoDia = 'Sexta-Feira';
        return retornoDia;
        case 6: retornoDia = 'Sabado';
        return retornoDia;
    }
}

//Funcao que retorna o mes
function hojeMes(mes){
    let retornoMes;
    switch(mes){
        case 0: retornoMes = 'Janeiro';
        return retornoMes;
        case 1: retornoMes = 'Fevereiro';
        return retornoMes;
        case 2: retornoMes = 'Março';
        return retornoMes;
        case 3: retornoMes = 'Abril';
        return retornoMes;
        case 4: retornoMes = 'Maio';
        return retornoMes;
        case 5: retornoMes = 'Junho';
        return retornoMes;
        case 6: retornoMes = 'Julho';
        return retornoMes;
        case 7: retornoMes = 'Agosto';
        return retornoMes;
        case 8: retornoMes = 'Setembro';
        return retornoMes;
        case 9: retornoMes = 'Outubro';
        return retornoMes;
        case 10: retornoMes = 'Novembro';
        return retornoMes;
        case 11: retornoMes = 'Dezembro';
        return retornoMes;
    }
}

//Parte do codigo que acessa o horario
const dataEscrita = document.getElementById('Data');
const dataHoje = Date.now();
const data = new Date(dataHoje);
const diaHoje = data.getDay();
const mesHoje = data.getMonth();

//Funcao que adiciona o numero 0 ao final de horarios terminados em 0
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

//Funcao que organiza os dados para a impressao
function dataFinal(Data){
    const nomeDia = Hoje(diaHoje);
    const nomeMes = hojeMes(mesHoje);

    return(
        `${nomeDia}, ${data.getDate()} de ${nomeMes} de` +
        ` ${data.getFullYear()} <br> ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

//Funcao que imprime os dados na pagina HTML
dataEscrita.innerHTML = dataFinal(Data);