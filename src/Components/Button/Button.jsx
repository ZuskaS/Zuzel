import './Button.css'

export const Button = ({ text, image, position, onClick}) => {
    return (
        <button className={`button ${position}`} onClick={onClick}>
             {image && <div className='empty'></div>}
            <div className='text'>{text}</div>
            {image && <div className='image'><img src={image} alt='šipka'></img></div>}
             
        </button>


    )
}