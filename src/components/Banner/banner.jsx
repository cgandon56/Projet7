
function Banner(props) { // props pour récupérer les images et le texte
    return(
        <div className="Section_banner">
			<img className="banner-img" src={props.img} alt="Bannière"/>
			<div className="Background"></div> 
			<div className="banner-text">{props.text}</div>
            </div>   
    );
}

export default Banner;


