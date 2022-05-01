import React, {Fragment, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { newGame, getGenres, getVideogames } from '../actions/videogames';

import {useDispatch, useSelector} from 'react-redux';
import SelectorForm from './SelectorForm';
import ErrorsForm from './ErrorsForm';
import Nav from './Nav';
import {validationForm} from '../utils';

const NewGame = () => {

    const allsGames = useSelector((state) => state.videogameReducer.videogames);
    const history = useHistory();
    const dispacht = useDispatch();
    const allsGenres = useSelector((state) => state.videogameReducer.genres);
    
    const token = localStorage.getItem('token')
    
    const [errors, setErrors] = useState({name: " "})

    let currentDate = new Date().toISOString().split('T')[0];
    let dat = "1990-01-01";
    
    const [input, setInput] = useState({
        name: "",
        img: "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "",
        released: "",
        rating: 0.0,
        platforms: [],
        genres: [],
        userId: localStorage.getItem('id')
    })

    //manejador de cambioos
    function handleChangeName (e) { //Poner el nombre con mayuscula
        var nameMayuscula = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        // console.log(nameMayuscula)
        setInput({
            ...input,
            [e.target.name]: nameMayuscula
        });
        
        setErrors(validationForm({...input,[e.target.name]:e.target.value}, allsGames))
        // console.log(input);
    }
    function handleChange (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        
        setErrors(validationForm({...input,[e.target.name]:e.target.value}, allsGames))
        console.log(input);
    }

    //realizador de nuevo videogame
    function handleSubmit (e) {
        e.preventDefault();
        console.log(errors.name)
        if (!errors.name ) {
            dispacht(newGame(input, token));
            alert('created videogame');
            history.push('/home');
        } else {
            history.push('/created');
            alert('Llene los campos correctamente');
        }
        console.log("Enviar")
    }

    useEffect(()=>{
        const isUser = localStorage.getItem('payload');
        if(isUser !== 'user') {
            history.push('/login')
        }

        dispacht(getVideogames());
        dispacht(getGenres());
    }, [dispacht, history])


    return (
        <Fragment>
            <Nav current="New Game"/>
            <div className='formParent'>
                <div className='contForm'>
                    

                    <form 
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <br />
                        <div className='containerInput'>

                            <p>Name</p>
                            <input 
                                onChange={handleChangeName}
                                type="text"
                                name= "name"
                            />
                        </div>

                        <div className='containerInput'>

                            <p>Description</p>
                            <textarea 
                                rows="4" cols="55"
                                onChange={handleChange}
                                type="text"
                                name= "description"
                            />
                        </div>

                        <div className='containerInput'>

                            <p>Released</p>
                            <input 
                                onChange={handleChange}
                                type="date"
                                name= "released"
                                min={dat}
                                max={currentDate}
                            />
                        </div>

                        <div className='containerInput'>

                            <p>Rating</p>
                            <input 
                                onChange={handleChange}
                                type="text"
                                name= "rating"
                                placeholder='1.00 - 10.00'
                            />
                        </div>

                        <div className='containerSelectors'>
                            {/* show genres */}
                            <div className='selecGenrs'>
                                <p>Genrs</p>
                                <SelectorForm
                                    selectors={allsGenres}
                                    input={input}
                                    setInput={setInput}
                                />

                            </div>

                            <div className='selecPlat'>
                                <p>PLaforms</p>
                                <SelectorForm
                                    input={input}
                                    setInput={setInput}
                                />

                            </div>

                        </div>

                        <div className='errors'>
                            <ErrorsForm
                                errors={errors}
                            />
                        </div>

                        <button type='submit'>Created Videogame</button>
                        <br /> <br />

                    </form>
                </div>

            </div>
        </Fragment>
    )
}

export default NewGame;