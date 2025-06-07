import './Grid.css'

export const Grid = ({size}) => {
    return (
        <div className='grid'style={{gridTemplateColumns: `repeat(${size}, 1fr)`, gridTemplateRows: `repeat(${size}, 1fr)`}}
    >
            {Array.from({ length: size * size }, (_, index) => (
                <div className="cell" key={index}>
                </div>
            ))}
        </div>
    )
}