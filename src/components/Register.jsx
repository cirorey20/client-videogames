import React, { Fragment, useEffect, useState } from "react";
import Nav from './Nav';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { register } from '../actions/users';

const Register = () => {

        // const userAuth = useSelector((state) => state.userReducer.userAuth);
        const dispatch = useDispatch();
        const history = useHistory();

        const [isPre, setIsPre] = useState(false);
        const pre = <div className='preload'></div>;

        const [input, setinput] = useState({name: "", email:"", password: ""})
        function handleChange(e){
            setinput({
                ...input,
                [e.target.name]: e.target.value
            })
            console.log(input)
        }


        function handleSubmit (e) {
            e.preventDefault();
            dispatch( register( input ) )
            
            setIsPre(true)
            setTimeout(()=>{

                const isUser = localStorage.getItem('payload');
                if(isUser === 'user') {
                    history.push('/dashboard');
                } else {
                    history.push('/login')
                }
            }, 3000)
        }
        useEffect(()=>{
            console.log("HOLA")
        }, [dispatch])
    return(
        <Fragment>
            <Nav current="Register"/>
            {
                ! isPre ?
                (

                <div className='contForm'>
                        

                        <form 
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <br />
                            <div className='containerInput'>

                                <p>Name</p>
                                <input 
                                    onChange={handleChange}
                                    type="text"
                                    name= "name"
                                />
                            </div>

                            <div className='containerInput'>

                                <p>Email</p>
                                <input 
                                    onChange={handleChange}
                                    type="email"
                                    name= "email"
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
                            <button type='submit'>Register</button>
                            <br /> <br />

                        </form>
                </div>
                )
                :
                (
                    pre
                )
            }
        </Fragment>
    )
}

export default Register;