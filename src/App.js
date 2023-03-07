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
        <div>
          {isLoading ? 'Загрузка' : movies.map(item => {
            return (
              <Movie 
              key={item.id}
              title={item.title}
              year={item.year}
              />
            )
          })}
      </div>
      )
      
    }
  }

  export default App;