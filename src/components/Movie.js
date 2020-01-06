import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import MovieDetail from "./MovieDetail"
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

class Movie extends Component{
    constructor(){
        super();
        this.state = {
        }
    }

    rentingMovie = () => {
        this.props.rentingMovies(this.props.movie.id)
    }

    render(){
        const movie = this.props.movie

        return (
            <div className="movie-container">
                <Link to={`/movies/${movie.id}`} key={movie.id+movie.year}><img src={movie.img} className="movie-image"/>
                </Link>
                {movie.isRented ? <span key={movie.id} onClick={this.rentingMovie}><FaMinusCircle className="minus" /></span> : <span key={movie.id} onClick={this.rentingMovie}><FaPlusCircle className="plus"/></span>}
               
            </div>
        )
    }
}

export default Movie