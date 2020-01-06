import React, { Component } from 'react';
import Movie from "./Movie"

class MovieDetail extends Component {
    constructor() {
        super();
        this.state = {
        }
    }


    render() {
        const movieCatalog = [...this.props.catalog]
        const match = this.props.match
        const movieId = match.params.id
        let movieToShow = movieCatalog.find(movie => movie.id == movieId)
        // console.log(movieToShow)

        return (
            <div id="movie">
                <img src={movieToShow.img} className="movie-image" />
                <h4>{movieToShow.title}</h4>
                <h6>{movieToShow.year}</h6>
                <p>{movieToShow.descrShort}</p>

            </div>
        )
    }
}

export default MovieDetail