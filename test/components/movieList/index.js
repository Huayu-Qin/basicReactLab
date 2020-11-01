import MovieCard from "../movieCard";

const MovieList = ({ movies }) => {
    {
        movies.map((movie, index) => {
            return (
                <React.Fragment>
                    <MovieCard movie={movie} class="col-3" />
                </React.Fragment>
            )
        })
    }

}

export default MovieList