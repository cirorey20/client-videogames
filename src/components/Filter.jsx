import {React, Fragment} from 'react';


const Filter = ({allGenres, handleGenres, handleSortAlpha, handleCreated, handleFilterRating}) => {
    
    // console.log(allGenres)

     function handleFilters(e) {
        console.log(e.target.value)
        if (e.target.value === "asc" || e.target.value === "desc") {
            handleSortAlpha(e)
        }
        else if( e.target.value === "menor" || e.target.value === "mayor" ) {
            handleFilterRating(e)
        }
        else if( e.target.value === "created" || e.target.value === "existing" ) {
            handleCreated(e)
        } else{
            handleGenres(e)
        }
    }

    return (
        <Fragment>
            {/* Filtros */}
            <div className='selectors'>
                <select defaultValue={'DEFAULT'} onChange={e => handleFilters(e)}>
                    <option value="DEFAULT"  disabled hidden>OrderBy</option>
                    <optgroup label='Alphabetically'>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </optgroup>

                    <optgroup label='Rating'>
                        <option value="menor">minor</option>
                        <option value="mayor">major</option>
                    </optgroup>
                </select>
                <select defaultValue={'DEFAULT'} onChange={e=>handleFilters(e)}>
                    <option value="DEFAULT" disabled hidden> FilterBy</option>
                    <optgroup label='Created/Existing'>
                        <option value="created">Created</option>
                        <option value="existing">Existing</option>
                    </optgroup>

                    <optgroup label='Genres'>
                        <option value="All">All</option>
                        {
                            allGenres ?
                            (
                                allGenres.map((el, index)=>{
                                    return(

                                        <option key={index} value={el.name}>{el.name}</option>
                                    )
                                })
                            )
                            :
                            (
                                <span></span>
                            )
                        }                
                    </optgroup>
                </select>
            </div>
        </Fragment>
    )
}

export default Filter;