import React from 'react';
import axios from 'axios';

import MovieList from '../Components/MovieList';
import SearchPanel from '../Components/SearchPanel';

import './Home.scss';



class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        movies: [],
        term: ''
      };
    }
    
    getMovies = async () => {
      const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
      this.setState({movies: movies, isLoading: false});
    }
  
    componentDidMount() {
      this.getMovies();
    }

    searchMovie = (items, term) => {
      if(term === 0) {
        return items;
      }

      return items.filter(item => {
        return item.title.indexOf(term) > -1
      })
    }

    onUpdateSearch = (term) => {
      this.setState({term})
    }
  
    render() {
      const {isLoading, movies, term} = this.state;
      const visibleData = this.searchMovie(movies, term)
      return (
        <section className='container'>
          {isLoading 
          ? <div className='loader'>
              <span className='loader__text'>Загрузка...</span>
            </div> 
          : <div>
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <MovieList data={visibleData}/>
          </div>
          }
        </section>
      )
      
    }
  }

  export default Home;