function Card(props) { // récupération des images et des titres
    return (
        <div className = 'Card'>
            <img className ="picture_Card" src={props.cover} alt="location" />
            <div className = "picture_Title">
                <p className = "Title" >{props.title}</p>
            </div>
            <div className = "rectangle">
            </div>
        </div>    
)
}

export default Card

