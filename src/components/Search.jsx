import {React, Fragment, useState} from 'react';
import { searchGame } from '../actions/videogames'
import {useDispatch} from 'react-redux';


const Search = ({setPaginaActual}) => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState("");

    function handlerGame(e) {
        e.preventDefault();
        setPaginaActual(1)
        setSearch(e.target.value);
        console.log(search);
    }
    
    function handlerSubmit (e) {
        e.preventDefault()
        dispatch(searchGame(search))
        console.log("clik button buscar")
        setSearch("")
    }


    return (
        <Fragment>
            <div className='search'>
                <form action="" onSubmit={(e)=>handlerSubmit(e)}>
                    <input type="text" value={search} onChange={(e)=>handlerGame(e)}/>
                    <button>Search</button>
                </form>
            </div>
        </Fragment>
    )
}

export default Search;