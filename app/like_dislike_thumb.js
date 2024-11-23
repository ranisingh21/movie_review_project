const Like_dislike_thumb = ({ onclick, handleDislike, handleLike, likes }) => {
    return (
      <div className="like-container">
        <div>
          <img className="likethumb" src="Vector (2).png" onClick={handleLike} alt="Like" />
        </div>
        <div className="circle">
          <div className="like-count">{likes}</div>
        </div>
        <div>
          <img className="dislikethumb" src="Icon - Like.png" onClick={handleDislike} alt="Dislike" />
        </div>
        <div>
          <img className="delete" src="delete.png" onClick={onclick} alt="Delete" />
        </div>
      </div>
    );
  };
  
  export default Like_dislike_thumb;
  