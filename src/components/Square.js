const Square = ({ value }) => {
    return (
        <button className="square" onClick={handleClick}>{value}</button>
    )
}

const handleClick = () => {
    console.log('clicked');
}

export default Square
