import { Fragment, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getUser, destroyGame, clearData } from '../actions/users';
import { useDispatch, useSelector } from 'react-redux'
import Nav from './Nav';



const Dashboard = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const dataUser = useSelector((state) => state.userReducer.user);
    const gamesUser = useSelector((state) => state.userReducer.gamesUser);


    function deletedGame(id) {
        const userId = localStorage.getItem('id');
        const tokenUser = localStorage.getItem('token')
        dispatch(destroyGame(id, tokenUser));

        setTimeout(() => {
            dispatch(clearData());
        }, 500)
        setTimeout(() => {
            dispatch(getUser(userId));
        }, 1000)
    }


    function editGame(id) {
        localStorage.setItem('idGame', id);
        history.push('/edit');
    }

    useEffect(() => {
        const isUser = localStorage.getItem('payload');
        const userId = localStorage.getItem('id');
        if (isUser !== 'user') {
            return history.push('/login')
        }
        dispatch(getUser(userId));
        setTimeout(() => {

        }, 2000)

    }, [dispatch, history])

    return (
        <Fragment>
            <Nav current="Dashboard" />

            <h2 className='titleDashboard mt-5'>Hello {dataUser.name || "user"}, games you have are: {gamesUser.length}</h2>
            <div className='createdDashboard mt-5'>
                <Link to='/created' style={{ textDecoration: 'none' }}>
                    <button className='btn btn-success mb-5'>Created</button>
                </Link>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-8 col-sm-10'>

                    <table className='table table-dark table-striped'>
                        <thead>
                            <tr>
                                <th scope="col">Quantity</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Deleted</th>
                            </tr>
                        </thead>
                        {
                            gamesUser?.map((el, i) => {
                                return (
                                    <tbody key={i}>
                                        <tr >
                                            <th scope="row">{i=i+1}</th>
                                            <td>{el.name}</td>
                                            <td className='w-25'>
                                                <img style={{ height: '5vh' }} src={el.img} alt="not-found" />
                                            </td>
                                            <td><button className='btn btn-outline-warning m-2' onClick={() => editGame(el.id)}>Edit</button></td>
                                            <td><button className='btn btn-outline-danger m-2' onClick={() => deletedGame(el.id)}>X</button></td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                    </div>
                </div>
            </div>

            {/* <div className='row d-flex justify-content-center'>
                {
                    gamesUser?.map((el,i)=>{
                    return(
                        <div key={i} className='col-md-2 col-sm-6'>
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
            </div> */}
        </Fragment>
    )

}

export default Dashboard;