import clickSound from '../sounds/tap3.mp3';
import succesSound from '../sounds/fanfare.mp3';
import failSound from '../sounds/fail.mp3';

export const playClickSound = () => {
    if (localStorage.getItem('sound') === 'on') {
        const audio = new Audio(clickSound);
        audio.playbackRate = 1.5;
        audio.play();
    }
}

export const playSuccesSound = () => {
    if (localStorage.getItem('sound') === 'on') {
        const audio = new Audio(succesSound);
        audio.playbackRate = 1.5;
        audio.play();
    }
}

export const playFailSound = () => {
    if (localStorage.getItem('sound') === 'on') {
        const audio = new Audio(failSound);
        audio.playbackRate = 1.5;
        audio.play();
    }
}