import {React, Fragment} from 'react';

const Paged = ({gamesDePagina, allVideogames, paged}) => {

    const pageNumbers = []

    for(let i=1; i<=Math.ceil(allVideogames/gamesDePagina); i++) {
        // console.log(i);
        pageNumbers.push(i);
    }

    return (
        <Fragment>
            <div className="d-flex justify-content-center containerParentPagedd">
            <ul className='pagination'>
                {
                    pageNumbers?
                    pageNumbers.map((num, index) => (
                        <li className='page-item' key={index}>
                            <a className="page-link" href={'#'+num} onClick={()=>paged(num)}>{num}</a>
                        </li>
                    ))
                    :
                    <span></span>
                }
            </ul>
           </div>
        </Fragment>
    )
}

export default Paged;