import { Fragment, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {getUser, destroyGame, clearData} from '../actions/users';
import {useDispatch, useSelector} from 'react-redux'
import Nav from './Nav';



const Dashboard = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const dataUser = useSelector( (state) => state.userReducer.user );
    const gamesUser = useSelector( (state) => state.userReducer.gamesUser );


    function deletedGame(id) {
        const userId = localStorage.getItem('id');
        const tokenUser = localStorage.getItem('token')
        dispatch( destroyGame(id, tokenUser) );
        
        setTimeout(()=>{
            dispatch(clearData());
        }, 500)
        setTimeout(()=>{
            dispatch(getUser(userId));
        }, 1000)
    }

    
    function editGame(id) {
        localStorage.setItem('idGame', id);
        history.push('/edit');
    }
    
    useEffect(()=>{
        const isUser = localStorage.getItem('payload');
        const userId = localStorage.getItem('id');
        if(isUser !== 'user') {
            return history.push('/login')
        }
        dispatch(getUser(userId));
        setTimeout(()=>{
            
        }, 2000)
       
    }, [dispatch, history])

    return (
        <Fragment>
            <Nav current="Dashboard"/>

            <h2 className='titleDashboard'>Hello {dataUser.name || "user"}, games you have are: {gamesUser.length}</h2>
            <div className='createdDashboard'>
                <Link to='/created' style={{ textDecoration: 'none' }}>
                    <h3>Created</h3>
                </Link>
            </div>
            <div className='contentUserGame'>
            {
                gamesUser?.map((el,i)=>{
                return(
                    <div key={i} className="containerGameDash">
                        <p>{el.name}</p>
                        <img src={el.img} alt="not-found" />
                        <div className='buttonDash'>
                            <button  onClick={()=>deletedGame(el.id)}>Deleted</button>
                            <button  onClick={()=>editGame(el.id)}>Edit</button>
                        </div>
                    </div>
                )
                })
            }
            </div>
        </Fragment>
    )

}

export default Dashboard;