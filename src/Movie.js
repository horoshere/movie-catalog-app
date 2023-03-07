import React from 'react';

function Movie({id, title, year}) {
    return (
        <div>
            <ul>
                <li key={id}>{title}, {year}г.</li>
            </ul>
        </div>
    )
}

export default Movie;