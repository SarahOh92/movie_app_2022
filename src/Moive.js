import React from 'react';
import PropTypes from 'prop-types';

function Movie(){
    return <h1></h1>
}
// title, summery,medium_cover_image => poster
Movie.PropTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summery:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
};

export default Movie;