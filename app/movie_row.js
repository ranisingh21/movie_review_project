import Like_dislike_thumb from "./like_dislike_thumb.js";

const Movie_row = ({ movie_data, onDelete, handleLike, handleDislike, likes }) => {
  const posterPath = movie_data.poster_path;
  const imageUrl = posterPath ? `https://image.tmdb.org/t/p/w185${posterPath}` : movie_data.imageUrl;
  
  return (
    <div className="movie_box">
      <div className="image_row">{imageUrl && <img src={imageUrl} alt={movie_data.title} />}</div>
      <div className="movie_row">
        <div className="movie_details_row">
          <p>{movie_data.title}</p>
          <h3></h3>
          <p>{movie_data.director}</p>
          <p>{movie_data.genre}</p>
          <p>{movie_data.duration}</p>
          <p>{`${movie_data.release_date.slice(0, 4)}/${movie_data.hour}/${movie_data.min}`}</p>
          <p>{movie_data.overview}</p>
        </div>
        <div className="like_dislike_row">
          <Like_dislike_thumb
            onclick={onDelete}
            handleLike={handleLike}
            handleDislike={handleDislike}
            likes={likes}
          />
        </div>
      </div>
    </div>
  );
};

export default Movie_row;
