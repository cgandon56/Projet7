function Card(props) { // récupération des images et des titres
    return (
        <div className = 'Card'>
            <img className ="picture_Card" src={props.cover} alt={props.title} />
            <div className = "rectangle">
                <div className = "picture_Title">
                <p className = "Title" >{props.title}</p>
                </div>
            </div>
        </div>    
    )
}

export default Card

