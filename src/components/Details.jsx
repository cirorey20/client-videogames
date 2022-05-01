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
                        <div className='containerDetails'>
                            <div className='detailsData'>
                                <h1>{details.name}</h1>
                                <div>{details.description}</div> <br />
                                <div><strong>Released:</strong> {details.released}</div>
                                <div><strong>Rating:</strong> {details.rating}</div>
                                <div><strong>Platforms:</strong> {details.platforms}</div>
                            </div>
                            <div className='detailsImg'>
                                <img src={details.img} alt="NOT_FOUND" />
                            </div>
                        </div>
                    )
                }
        </Fragment>
    )
}

export default Details;