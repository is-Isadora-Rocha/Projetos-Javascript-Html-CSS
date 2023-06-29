const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const banzai = document.querySelector('.banzai');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const banzaiPosition = banzai.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        clouds.style.animationPlayState = 'paused';
        banzai.style.animationPlayState = 'paused';

    }

    if (banzaiPosition <= 100 && banzaiPosition > 0 && marioPosition < 80) {
        banzai.style.animation = 'none';
        banzai.style.left = `${banzaiPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        clouds.style.animationPlayState = 'paused';
        pipe.style.animationPlayState = 'paused';
    }

}, 10);

document.addEventListener('keydown', jump);