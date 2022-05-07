import React, { Fragment, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {detailGame} from '../actions/videogames';
import Nav from './Nav';

const Details = (props) => {
    const dispatch = useDispatch();
    const details = useSelector((state)=> state.videogameReducer.game)
    let gameId = props.match.params.id
    let current = details? details.name : "Videogames - App"
    useEffect(()=> {
        dispatch(detailGame(gameId))
    },[dispatch, gameId])
    return (
        <Fragment>
            <Nav current={current}/>
                {
                    details.length <= 0 ?
                    (
                        <div className='preloadDetails'></div>
                    )
                        
                    :
                    (
                        <div>
                            <h1 className='text-muted text-center mb-4'>{details.name}</h1>
                            <br />
                            <div className=' containerDetails'>
                                <div className='col'>
                                <div className="card mb-3">
                                    <img className='card-img-top' src={details.img} alt="NOT_FOUND" />
                                    <div className="card-body">
                                        <h5 className="card-title">Rating: {details.rating}</h5>
                                        <p className="card-text">{details.description}</p>
                                        <p className="card-text">Platforms: <small className="text-muted">{details.platforms}</small></p>
                                        <p className="card-text">Released: <small className="text-muted">{details.released}</small></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                }
        </Fragment>
    )
}

export default Details;