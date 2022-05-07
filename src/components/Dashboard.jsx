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
                    <button className='btn btn-success m-2'>Created</button>
                </Link>
            </div>
            <div className='row d-flex justify-content-center container-fluid'>
            {
                gamesUser?.map((el,i)=>{
                return(
                    <div key={i} className='col-md-3 col-sm-6'>
                        <div  className="card">
                            <p>{el.name}</p>
                            <img src={el.img} alt="not-found" />
                            <div className='text-center '>
                                <button className='btn btn-outline-danger m-2' onClick={()=>deletedGame(el.id)}>Deleted</button>
                                <button className='btn btn-outline-warning' onClick={()=>editGame(el.id)}>Edit</button>
                            </div>
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