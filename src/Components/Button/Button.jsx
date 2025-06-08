import { playClickSound } from '../../utils/playSound';
import './Button.css'

export const Button = ({ text, image, position, onClick}) => {
    const handleClick = () => {
        onClick?.();
        playClickSound();
    }
    return (
        <button className={`button ${position}`} onClick={handleClick}>
             {image && <div className='empty'></div>}
            <div className='text'>{text}</div>
            {image && <div className='image'><img src={image} alt='šipka'></img></div>}
             
        </button>


    )
}