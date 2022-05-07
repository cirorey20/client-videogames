import {React, Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
const Nav = ({current}) => {

    const [isLog, setIsLog] = useState('Login')

    const history = useHistory();
    function out(e) {
        e.preventDefault();
        if(isLog === "Login/Resgister"){
            history.push('/login');    
        } else{
            localStorage.clear();
            history.push('/home');
        }
    }
    useEffect(()=>{
        const isUser = localStorage.getItem('payload');
        if(!isUser){
            setIsLog('Login/Register');
        } else {
            setIsLog('Logout');
        }
    }, [history])

    return (
        <Fragment>
            <div className='navbar navbar-expand-lg'>

                <div className='container-fluid'>
                    <div className='navbar-brand' >
                        <Link to='/home' style={{ textDecoration: 'none' }}>
                            <h3 className='color-nav'>VideoGames</h3>
                        </Link>
                    </div>
                    {/* <div className=''>
                        <h1>{current}</h1>
                    </div> */}
                    <div className='' >
                        <ul className=''>
                        <li className=''>
                            <span className=''>
                                <Link to='' style={{ textDecoration: 'none' }}>
                                    <h3 className='color-nav' onClick={out}>{isLog}</h3>
                                </Link>
                            </span>
                            {
                                isLog === 'Logout' ?
                                (
                                    <span className=''>
                                        <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                                            <h3 className='color-nav'>Dashboard</h3>
                                        </Link>
                                    </span>
                                )
                                :
                                <span></span>
                            }
                        </li>
                        </ul>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Nav;