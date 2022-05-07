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
            setIsLog('Login/Resgister');
        } else {
            setIsLog('Logout');
        }
    }, [history])

    return (
        <Fragment>
            <div className='fixed'>

                <div className='containerParentNav'>
                    <div className='logoNav'>
                        <Link to='/home' style={{ textDecoration: 'none' }}>
                            <h3>VideoGames</h3>
                        </Link>
                    </div>
                    <div className='titleNav'>
                        <h1>{current}</h1>
                    </div>
                    <span className='createdNav'>
                        <span>
                            <Link to='' style={{ textDecoration: 'none' }}>
                                <h3 onClick={out}>{isLog}</h3>
                            </Link>
                        </span>
                        {
                            isLog === 'Logout' ?
                            (
                                <span>
                                    <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                                        <h3 >Dashboard</h3>
                                    </Link>
                                </span>
                            )
                            :
                            <span></span>
                        }
                    </span>
                </div>
            </div>
        </Fragment>
    )
}

export default Nav;