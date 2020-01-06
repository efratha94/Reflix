import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../src/App.css';
import Landing from "./components/Landing"
import Catalog from "./components/Catalog"
import MovieDetail from "./components/MovieDetail"
import Movie from "./components/Movie"



class App extends Component {
  constructor() {
    super();
    this.state = {
      catalog: [
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://images-na.ssl-images-amazon.com/images/I/91lvaXlbRyL._SL1500_.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 5, isRented: false, title: "Shrek", year: 2001, img: "https://upload.wikimedia.org/wikipedia/en/3/39/Shrek.jpg", descrShort: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back."},
        { id: 6, isRented: false, title: "Madagascar", year: 2005, img: "https://s1.bukalapak.com/img/13505636801/w-1000/MV5BN2I5YzFlYWEtZjRhNy00ZmQzLWJhNTktZGIwYjFjODdmNDgxXkEyXkFq.jpg", descrShort: "A group of animals who have spent all their life in a New York zoo end up in the jungles of Madagascar, and must adjust to living in the wild."}
    ],
    searchInput: "",
    movieSearched: []
    }
  }

  rentingMovies = (array) =>{
    const updatedRentingMovieArray = [...array]
    this.setState({
      catalog: updatedRentingMovieArray
    })
  }

  search = (event) => {
    let inputValue = event.target.value
    this.setState({
      searchInput: inputValue
    })
  }

  displaySearchMatches = () => {
    let movieInput = this.state.searchInput.toLowerCase()
    let catalog = [...this.state.catalog]
    let movieMatches = catalog.filter(movie => {
      let movieLower = movie.title.toLowerCase()
      return movieLower.includes(movieInput)
    })
    this.setState({
      movieSearched: movieMatches,
      searchInput: ""
    })
  }
  
  keypress = (event) => {
    if (event.key === "Enter"){
      this.displaySearchMatches()
      this.setState({
        searchInput: ""
      })
    }
  }
render() {
  return (
    <Router>
      <div className="App">
        <div id="main-links">
          <Link to="/" className="link">Home  </Link>
          <Link to="/catalog" className="catalog-container" onClick={this.displaySearchMatches} className="link">Catalog</Link>
        </div>
        <div><input type="text" value={this.state.searchInput} onChange={this.search} onKeyPress={this.keypress} className="search-input"/> <button className="submit-button" type="submit" onClick={this.displaySearchMatches} >Submit</button> </div>
        <Route path="/" exact component={Landing} />
        <Route path="/catalog" exact render={({ match }) => <Catalog match={match} catalog={this.state.catalog} rentingMovies={this.rentingMovies} movieSearched={this.state.movieSearched} className="catalog-container"/>} />
        <Route path="/movies/:id" exact render={({match}) => <MovieDetail match={match} catalog={this.state.catalog}/>}/>
      </div>
    </Router>
  )

}
}

export default App;
