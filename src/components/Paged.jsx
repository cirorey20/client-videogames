import {React, Fragment} from 'react';

const Paged = ({gamesDePagina, allVideogames, paged}) => {

    const pageNumbers = []

    for(let i=1; i<=Math.ceil(allVideogames/gamesDePagina); i++) {
        // console.log(i);
        pageNumbers.push(i);
    }

    return (
        <Fragment>
            {/* <div className=""> */}
            <ul>
                {
                    pageNumbers?
                    pageNumbers.map((num, index) => (
                        <li key={index}>
                            <a href={'#'+num} onClick={()=>paged(num)}>{num}</a>
                        </li>
                    ))
                    :
                    <span></span>
                }
            </ul>
           {/* </div> */}
        </Fragment>
    )
}

export default Paged;