import React, { Fragment, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
    const [preload, setPreload] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setPreload(true)
        }, 3000)
    },[])
    return (
        <Fragment>
              
            {
                preload === false ?
                (
                    <div className='landPre'>
                        <div className='preload'></div>
                    </div>
                )
                :
                (
                    <div className="containerLand">
                                            
                        <div className="landing">
                            <h1>VideogamesApp</h1>
                            <Link to ='/home'>
                                <button className="btnLand">Ingresar</button>
                            </Link>
                        </div>                

                    </div>

                )
            }
        </Fragment>
    )
}

export default Landing;