import React, { Fragment, useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {clearData, getVideogames, filterGenres, filterCreated, orderName, orderRating, getGenres} from '../actions/videogames';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import Search from './Search';
import Filter from './Filter';
import Paged from './Paged';


const Home = () => {

    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.videogameReducer.videogames)
    const allGenres = useSelector((state) => state.videogameReducer.genres)

    //paginado
    const [paginaActual, setPaginaActual] = useState(1)
    const [gamesDePagina] = useState(15)
    const iUltima = paginaActual * gamesDePagina
    const iPrimera = iUltima - gamesDePagina
    const gamesActuales = allVideogames.slice(iPrimera, iUltima)

    const paged = (numPagina) => {
        setPaginaActual(numPagina);
    }

    //filter order
    const [orden, setOrden] = useState('');
    
    function handleGenres(e) {//por generos
        dispatch(filterGenres(e.target.value));
        setPaginaActual(1);
        setOrden(`Ordenado ${e.target.value}`);
        console.log(orden);
    }
    function handleCreated(e) { //creado por mi o no
        dispatch(filterCreated(e.target.value));
        setPaginaActual(1); 
        setOrden(`Ordenado ${e.target.value}`);
        console.log(orden);
    }
    function handleSortAlpha(e) {//por nombre A/Z
        dispatch(orderName(e.target.value));
        setPaginaActual(1);
        // document.ready = e.target.value = 'DEFAULT'
        setOrden(`Ordenado ${e.target.value}`);
        console.log(orden);
    }
    function handleFilterRating(e){//por rating
        dispatch(orderRating(e.target.value)) 
        setPaginaActual(1)
        setOrden(`Ordenado ${e.target.value}`);
        console.log(e.target.value);
    }


    useEffect(() => {
        dispatch(getVideogames())
        dispatch(getGenres())
        dispatch(clearData())
    }, [dispatch])

    return (
        <Fragment>
            <Nav current="Videogames"/>
            <div className='searchFilterParent mb-4'>
                <Search 
                    setPaginaActual={setPaginaActual}
                /><br/>
                <Filter 
                    handleGenres={handleGenres}
                    handleSortAlpha={handleSortAlpha}
                    handleCreated={handleCreated}
                    handleFilterRating={handleFilterRating}
                    allGenres={allGenres}
                />
            </div>
            <div className='Page navigation example'>
                <Paged 
                    gamesDePagina={gamesDePagina}
                    allVideogames={allVideogames.length}
                    paged={paged}
                />
            </div>   
            <div className='container-fluid '>
                <div className='row d-flex justify-content-center'>

                    {
                    allVideogames.length <= 0 ?
                    
                        <div className='preload'></div>
                    :
                    gamesActuales.map((el, index) => {
                    return (
                        
                        <div key={index} className='col-md-3 col-sm-6 '>
                            
                            <div  className='card m-2'>
                                <h3>{el.name}</h3>
                                <Link to={'/videogame/'+el.id} style={{ textDecoration: 'none' }}>
                                    
                                    <img src={el.img} className='card-img-top' alt="NOT-FOUND" />
                                    
                                </Link>
                                <div className='card-body text-center'>
                                    {
                                        el.genres?.map((e,i)=>{
                                            return<p key={i}><em>{e}</em></p>
                                        })
                                    }
                                    <p><strong>{el.rating?el.rating:null}</strong></p>
                                </div>
                            </div>
                        </div>
                        
                    )
                    }) 

                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Home;