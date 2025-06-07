import './Button.css'

export const Button = ({ text, image, position }) => {
    return (
        <button className={`button ${position}`}>
             {image && <div className='empty'></div>}
            <div className='text'>{text}</div>
            {image && <div className='image'><img src={image} alt='šipka'></img></div>}
             
        </button>


    )
}