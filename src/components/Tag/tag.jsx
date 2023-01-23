function Tags (props) { //props pour récupérer les tags
    return (
      <div className="tag">
        <p className="tag_Title">{props.tag}</p>
      </div>
    );
  };
  
  export default Tags;