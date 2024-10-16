
import React from 'react';
import '../components/result.css'; 

export default function Result(props) {
    const boxes = props.movies.map(
        (item, index) => {
            return <Box key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average} />
        }
    );
    return (
        <div className="result-container">
            {boxes}
        </div>
    );
}

const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className="box">
            <img src={IMGPATH + props.image} alt="" className="box-image" />
            <div className="box-content">
                <span className="box-title">{props.title}</span>
                <span className="box-rating">{props.rating}</span>
            </div>
        </div>
    );
};
