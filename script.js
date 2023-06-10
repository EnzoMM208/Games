const personagem= document.querySelector('.run')
const obstaculo= document.querySelector('.obstaculo')
const score= document.querySelector('.points')
//console.log(obstaculo)
const jump= ()=>{
    personagem.classList.add('jump')
    setTimeout(()=>{
    personagem.classList.remove('jump')
    },2000)
}
let points=1;
let pointsUser=0;
const loop=setInterval(()=>{
    const personagemPosition=+window.getComputedStyle(personagem).bottom.replace('px', '')
    const obstaculoPosition=obstaculo.offsetLeft; 
    //console.log(personagemPosition)
    if(obstaculoPosition<=250 && obstaculoPosition>0 && personagemPosition<=120){

        obstaculo.style.animation='none';
        obstaculo.style.left=`${obstaculoPosition}px`;

        personagem.style.animation='none';
        personagem.style.bottom=`${personagemPosition}px`;

        personagem.src='esplosao.gif';
        personagem.style.width='250px';
        personagem.style.marginleft='-10px';

        clearInterval(loop)
    }else{
        pointsUser++;
        if(pointsUser>100){ 
            score.innerHTML= points ++;
            pointsUser=0
        }
    }
},10)


document.addEventListener('keydown',jump)
