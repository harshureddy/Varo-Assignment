import React from 'react';

const Movies = () => {
    const { data: quote, loading, error } = useFetch('http://localhost:8080/movies/nowPlaying')
    return (
        <div>
            
        </div>
    );
};

export default Movies;