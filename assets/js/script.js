const dinossauro = document.querySelector('.dino');
const background = document.querySelector('.fundoTela');
let estaPulando = false;
let posicao = 0;     

document.addEventListener('keyup', usarKeyUp);
//keyup identifica se apertou em uma tecla e soltou

function usarKeyUp(event){
    if(event.keyCode === 32){
        //console.log('pressionou espaço')
        if(!estaPulando){
            pular();
        }
    }
}

function pular(){
    estaPulando = true;

    let pulo = setInterval(() =>{
        if(posicao >= 150){
            clearInterval(pulo);

            //descendo
            let descer = setInterval(() => {
            if(posicao <= 0){
                clearInterval(descer);
                estaPulando = false;
            }else{
                posicao -= 20
                dinossauro.style.bottom = posicao + 'px';
            }
        }, 20);
        }else{
            //subindo
            posicao += 20;
            dinossauro.style.bottom = posicao + 'px';
        }
    }, 20);
}

function criarCacto(){
    const cacto = document.createElement('div');
    let posicaoCacto = 1000;
    let randomTime = Math.random() * 6000;
    //console.log(randomTime);

    cacto.classList.add('cacto');
    cacto.style.left = posicaoCacto + 'px';
    background.appendChild(cacto);

    let intervalEsq = setInterval(() => {
        if(posicaoCacto < -60){
            //saiu da tela
            clearInterval(intervalEsq);
            background.removeChild(cacto);
        }else if(posicaoCacto > 0 && posicaoCacto < 60 && posicao < 60){
            //fim de jogo
            clearInterval(intervalEsq);
            document.body.innerHTML = '<h1 class="game-over">FIM DE JOGO</h1>';
        }else{
            posicaoCacto -= 10;
            cacto.style.left = posicaoCacto + 'px';
        }
    }, 20);

    setTimeout(criarCacto, randomTime);
}

criarCacto();