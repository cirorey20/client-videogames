import {React, Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
const Nav = ({current}) => {

    const [isLog, setIsLog] = useState('Login')

    const history = useHistory();
    function out(e) {
        e.preventDefault();
        if(isLog === "Login/Register"){
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
                    
                    <div className='' >
                        <ul className=''>
                        <li className=''>
                            {
                                isLog === 'Logout' ?
                                (
                                    <span className="dropdown">
                                        <h3 className="color-nav dropdown-toggle"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            User
                                        </h3>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <Link className='dropdown-item' to='/dashboard' style={{ textDecoration: 'none' }}>
                                                <p className=''>Content</p>
                                            </Link>
                                            <Link className='dropdown-item' to='' style={{ textDecoration: 'none' }}>
                                                <p className='' onClick={out}>{isLog}</p>
                                            </Link>
                                        </ul>
                                    </span>
                                )
                                :
                                (
                                    <span className=''>
                                        <Link to='' style={{ textDecoration: 'none' }}>
                                            <h3 className='color-nav' onClick={out}>{isLog}</h3>
                                        </Link>
                                    </span>
                                )
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