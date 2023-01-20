
function Host(props) {
    return (
        <div className = "host">
            <div className = "host_Name">
                <p className= "name_Text">{props.hostname}</p>
            </div>
            <div className ="host_Figure">
                <img className="Figure" src={props.hostpicture} alt = {props.hostname}/>
            </div>
        </div>
    )
}

export default Host;