import React, { Fragment, useEffect, useState } from "react";
import Nav from './Nav';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { auth } from '../actions/users';
import { Link } from "react-router-dom";

const Login = () => {

        const userAuth = useSelector((state) => state.userReducer.userAuth);
        const dispatch = useDispatch();
        const history = useHistory();

        const [isPre, setIsPre] = useState(false);
        const pre = <div className='preload'></div>;

        const [input, setinput] = useState({username: "", password: ""})
        function handleChange(e){
            // console.log(input)
            setinput({
                ...input,
                [e.target.name]: e.target.value
            })
        }


        function handleSubmit (e) {
            e.preventDefault();
            dispatch( auth( input ) )
            
            setIsPre(true)
            setTimeout(()=>{
                
                const isUser = localStorage.getItem('payload');
                if(isUser === 'user') {
                    history.push('/dashboard');
                } else {
                    history.push('/register')
                }
            }, 1000)
        }
        useEffect(()=>{
            console.log("HOLA")
        }, [dispatch, userAuth])
    return(
        <Fragment>
            <Nav current="Login"/>
            <div className="d-flex justify-content-center">

            {
                ! isPre ?
                (
            <div>

                <div className='contForm'>
                        

                        <form 
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <br />
                            <div className='containerInput'>

                                <p>Email</p>
                                <input 
                                    onChange={handleChange}
                                    type="email"
                                    name= "username"
                                />
                            </div>

                            <div className='containerInput'>

                                <p>Password</p>
                                <input 
                                    onChange={handleChange}
                                    type='password'
                                    name= "password"
                                />
                            </div>
                            <br />
                            <button type='submit'>Sing In</button>
                            <div className="text-center pb-4">
                                <p className="mt-3" style={{color: '#f0f0f0'}}>OR</p>
                                <Link className="btregister" to={'/register'} style={{ textDecoration: 'none', color: '#f0f0f0' }}>
                                    <p className="pb-3">Register</p>
                                </Link>
                            </div>
                            <br /> <br />

                        </form>
                </div>
            </div>
                )
                :
                (
                    pre
                )
            }
            </div>
        </Fragment>
    )
}

export default Login;