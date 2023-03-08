import React from 'react';
import axios from 'axios';
import Movie from './Movie';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        movies: []
      };
    }
    
    getMovies = async () => {
      const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
      this.setState({movies: movies, isLoading: false});
    }
  
    componentDidMount() {
      this.getMovies();
    }
  
    render() {
      const {isLoading, movies} = this.state
      return (
        <section className='container'>
          {isLoading 
          ? <div className='loader'>
              <span className='loader__text'>Загрузка...</span>
            </div> 
          : movies.map(item => {
              return (
                <div className='movies'>
                  <Movie 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    year={item.year}
                    summary={item.summary}
                    poster={item.medium_cover_image}
                  />
                </div>
              )
          })}
      </section>
      )
      
    }
  }

  export default App;