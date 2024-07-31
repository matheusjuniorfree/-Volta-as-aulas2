//Mensagem de boas-vindas ao clicar no botão 
document.addEventlistener('DOMContentLoaded',()=>{
    const button=document.querySelector('button');
    button.addEventlistener('click',()=>{
        alert('Estamos animados para começar o ano com vocês!');

    });

//Contador de dias para o inicio das aulas
cont startDate= new Date('2024-08-01');//defina a data de inicio das aulas
const daysleft=Math.ceil(timeDiff/(1000*60*60*24));

const countdownElement=document.createElement('p');
countdownElement.textcontent='faltam ${daysLeft}dias para o inicio das aulas!';
document.querySelector('.card').appendChild(countdownElement);

//Alterar a imagem ao clicar
const image=document.querySelector('img');
image.addEventlistener('click',()=>{
    image.src=voltaaaulas.jpg;
});

//Mostrar uma mensagem de boas-vindas com animação
const card=document.querySelector('.card');
card.style.opacity=D;
card.style.transition='opacity 2s';

setTimeout(()=>{
    card.style.opacity=1;
},100);
});