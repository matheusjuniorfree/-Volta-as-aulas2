//Mensagem de boas-vindas ao clicar no botão 
document.addEventlistener('DOMContentLoaded',()=>{
    const button=document.querySelector('button');
    button.addEventlistener('click',()=>{
        alert('Estamos animados para começar o ano com vocês!');

    });

//Contador de dias para o inicio das aulas
cont startDate= new Date('2024-08-01');//defina a data de inicio das aulas
const daysleft=Math.ceil(timeDiff/(1000*60*60*24))