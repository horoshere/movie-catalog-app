import React from "react";
import './Detail.scss'

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const {location} = this.props;
        // const genre = location.state.genre.map((item, index) => {
        //     return <li key={index} className='movie__genres-item'>{item}</li>
        // });
        if (location.state) {
            const genre = location.state.genres.map((item, index) => {
                return <li key={index} className='detail__genre-item'>{item}</li>
            })
            return(
                <div className="container">
                    <div className="detail">
                        <div className="detail__poster">
                            <img src={location.state.poster} alt={location.state.title} />
                        </div>
                        <div className="detail__column">
                            <h1 className="detail__title">{location.state.title}</h1>
                            <h3 className="detail__year">{location.state.year}</h3>
                            <h3 className="detail__genre">{genre}</h3>
                            <p className="detail__summary">{location.state.summary}</p>
                            <div className="detail__rating">
                                <div className="detail__rating-img">
                                    <img src="https://img.icons8.com/color/256/filled-star--v1.png" alt="star" />
                                </div>
                                <div className="detail__rating-number">
                                    {location.state.rating} / 10
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {return null}
        
    }
}

export default Detail;