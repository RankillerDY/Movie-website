import React, { useState } from 'react'

export default function PresenComp({ Props }) {
    const [Movie, getMovie] = useState([]);
    return (
        <div className='container-fluid'>
            <div className='body_nav'>
                <h2>Recommended</h2>
                <div className='recom_option'>
                    <div>Movies</div>
                    <div>TV Show</div>
                    <div>Trending</div>
                </div>
            </div>
            <div className='card_container'>
            {Props.map((Movie) => (
                <div className='column'>
                    <div className='card'>
                        <img src={Movie.Card_Img} />
                        <h3>{Movie.Title}</h3>
                        <p className='Year'>{Movie.Year}</p>
                        <p className='Nation'>{Movie.Nation} </p>
                        <p>
                            <button onClick={() => { getMovie(Movie) }}><a href='#popup1' id='openPopUp'>Detail</a></button>
                        </p>
                    </div>
                </div>
            ))}
            </div>
            
            <div id="popup1" className='overlay'>
                <div className='popup'>
                    <img src={Movie.Card_Img}></img>
                    <h2>{Movie.Title}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {Movie.details}
                    </div>
                </div>
            </div>
        </div>
    )
}
