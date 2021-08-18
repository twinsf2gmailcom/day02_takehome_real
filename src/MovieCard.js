import React from 'react';

export const MovieCard = (props) => {
    return (
        <div className="movie-card" >
            <img src={props.posterUrl} alt={props.title} className="movie-card-poster" />
            <h2 className="movie-card-title">{props.title}</h2>
            <span className="movie-card-type">{props.type}</span>
        </div>
        )
}