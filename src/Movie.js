import React from 'react';

function Movie(props) {
    const itemm = props.movies.map(item => {
        return <li key={item.id}>{item.title}, {item.year}г.</li>
    });

    return (
        <div>
            <ul>
                {itemm}
            </ul>
        </div>
    )
}

export default Movie;