import clickSound from '../sounds/tap3.mp3';


export const playClickSound = () => {
    if (localStorage.getItem('sound') === 'on') {
        const audio = new Audio(clickSound);
        audio.playbackRate = 1.5;
        audio.play();
    }
}