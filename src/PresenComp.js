import { Popover } from 'bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function PresenComp({ Props }) {
    const [Movie, popMovie] = useState(null);
    const OpenPopOver = (event) => {
        popMovie(event.currentTarget.id)
    }

    useEffect(() => {
        console.log(Props)
    }, [])

    return (
        <div className='container-fluid' >
            <div className='body_nav'>
                <h2>Recommended</h2>
                <div className='recom_option'>
                    <div>Movies</div>
                    <div>TV Show</div>
                    <div>Trending</div>
                </div>
            </div>
            <div className='body-container'>
                <div className='card_container'>
                    {Props?.map((Movie) => (
                        <div className='column'>
                            <Link to={`/Detail/${Movie.id}`}>
                                <div className='card' id={Movie.id} onMouseOver={OpenPopOver}>
                                    <img src={Movie.Card_Img} />
                                    <div className='info'>
                                        <h3>{Movie.Title}</h3>
                                    </div>
                                    <hr></hr>
                                    <div className='meta'>
                                        <p className='year'>{Movie.Year}</p>
                                        <p className='nation'>{Movie.Nation} </p>
                                    </div>

                                    {/* <p>
                            <button onClick={() => { getMovie(Movie) }}><a href='#popup1' id='openPopUp'>Detail</a></button>
                        </p> */}
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>
                <div className='sector-container'>
                    <div className='sector'>
                        <h3>Recently Updated</h3>
                        {Props.map((Movie) => (
                            <div>
                                <Link to={`/Detail/${Movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className='sector-header'>
                                        <img src={Movie.Card_Img}></img>
                                        <div className='sector-info'>
                                            <div> {Movie.Title} </div>
                                            <small>HD</small>
                                        </div>
                                    </div>
                                </Link>
                                <hr className='hr'></hr>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div id="popup1" className='overlay'>
                <div className='popup'>
                    <img src={Movie.Card_Img}></img>
                    <h2>{Movie.Title}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {Movie.details}
                    </div>
                </div>
            </div> */}

            {/* <Popover
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open = {Boolean(Movie)}
            >
                The content of the Popover.
            </Popover> */}


        </div>
    )
}
