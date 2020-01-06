import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Movie from "./Movie"

class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            budget: 20
        }
    }



    rentingMovies = (movieId) => {
        const allMovies = [...this.props.catalog]
        const movieRented = allMovies.find(movie => {
            if (movie.id === movieId) {
                movie.isRented = !movie.isRented
                if (movie.isRented) {
                    if (this.state.budget >= 3) {
                        this.setState({
                            budget: this.state.budget - 3
                        })
                    } else {
                        alert("Not Enough Money! Please Return Rented Movies!")
                    }
                } else {
                    this.setState({
                        budget: this.state.budget + 3
                    })
                }
            }
        })
        this.props.rentingMovies(allMovies)
    }

    render() {

        const movieArray = this.props.catalog

        const rentedMovies = []
        movieArray.find(movie => {
            if (movie.isRented) {
                rentedMovies.push(movie)
            }
        })
        const moviesSearched = this.props.movieSearched

        return (
            <div>
                <h6>Budget: {this.state.budget}</h6>
                {rentedMovies.length > 0 ? <div><h3>Rented Movies: <div class="catalog-container">{rentedMovies.map(movie => <Movie key={movie.id} movie={movie} rentingMovies={this.rentingMovies} />)}</div></h3></div> : <span></span>}
                {moviesSearched.length > 0 ? <div><h4>Movies For Kids</h4><div className="catalog-container">{moviesSearched.map(movie => <Movie key={movie.id} movie={movie} rentingMovies={this.rentingMovies} />)}</div></div> : <span></span>}
                <hr></hr>
                <div>
                    {moviesSearched.length > 0 ? <span></span> : <div><h4>Movies For Kids</h4> <div className="catalog-container">{movieArray.map(movie => {
                        return (
                            <div key={movie.id} className="blaaaa">
                                {movie.isRented ? <span></span> : <Movie key={movie.id} movie={movie} rentingMovies={this.rentingMovies} />}
                            </div>


                        )
                    })}</div>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Catalog