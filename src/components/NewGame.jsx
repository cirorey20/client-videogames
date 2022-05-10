import React, {Fragment, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { newGame, getGenres, getVideogames } from '../actions/videogames';

import {useDispatch, useSelector} from 'react-redux';
import SelectorForm from './SelectorForm';
import ErrorsForm from './ErrorsForm';
import Nav from './Nav';
import TutorialGif from './TurorialGif';
import {validationForm} from '../utils';

const NewGame = () => {

    const allsGames = useSelector((state) => state.videogameReducer.videogames);
    const history = useHistory();
    const dispacht = useDispatch();
    const allsGenres = useSelector((state) => state.videogameReducer.genres);
    
    const token = localStorage.getItem('token')
    
    const [errors, setErrors] = useState({name: " "})
    const [img, setImg] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC7CAMAAACjH4DlAAAAXVBMVEUpMTRnjLEiJiNcfJxrkbgkKSgoLzEmLS5EWWxXdpM0QkxAVGUuOT9kiKslKytSbohPaYJggqM+UF8wO0I6SldIX3Q2RE9LY3oyP0crNDk+UWFWdJA7S1lPaH9jhacMRR/OAAADlElEQVR4nO3c7XKqMBSFYSi4CSCB8CGkKvd/mUfAVoNgHUiPdbuef51aprwDAQLiOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6NAbiySAT17jVYIZFNloUVZ1cjg2Wu1WJypxLUqUVn87LVaiLbKtxuj46vti+4wwvKmMUjEs9drkaBSv1HDdVX1isOHPA45fIuGHLV89rot8DH8861oIksa0Q6BP569bgucc3gbsmbjMchhb5HIYeCWo9/kly+SVQ4K9GlU3RXLT7M55dBNlXbXHfu6WrqBMMpBTfx1zq6KhT3Y5CAdeZcLmHa37LqDTY5tap5o74sli2ScY8nmwSVHUI0uw/wqWtCDTY56PPNRl/M5Zs9NuOSQ2aiGG4r5s4/oc2ZXYpMjHefw5ictxN7NDpM93jAH6dM6t+nklPn75aAy7H+fTu0vXHLcHFnmdgfKz2Nu0k4cetjkEKMavmimclBwmW0Ob2cGuOSgnWfmULvJv9nGV58pb3YnLjkcKcxpdTG5bezMZDeXemxyUCSSy5mYX01tHAGZI0ySCGn2YJPDISevPZWctF74OTmM5sfxbSpVlcYn+OQ4BZFadNM/x6aYOsaSbt0bbWh8lFMOx9GlOPkstlMf11O3MBOVX/fgleN0HD2ZPt8o5+5uX4+nzHLMIhnP1EhUeVnAu+TQ4Z1HH7LvJTDNMdpf6HNiFL0S7s5/wDMHRdr4udjfreG2mR56sMxBjrfPrzYQEd6v0e0vh/4AwzGHLivfVeXXBhLE9/eUgddfADPMQU3abQ3ZefvQdDMVMqmfHmGYQ59nkVXe/USifuwBsrR74odhju9L/bS7Exf8PG4wzkEkLvcms1LK+NFHLVnmOJinW573aA2OOUgezEmg5PEHT/nloObeqfi75SA5e9X6hjkoEt699X2vHNtov+p5fV45qBHrvr3AKseqUZRfDpmt/WYLrxyPXachB3IgB3Ighwk5DMhhMHOsPO/weeXIkpUyTjkcvV2pvw/BJoez9kuS/UL45LACOQwMcqhSB5boUr1wjuEQmWQitkRk55n3V8zx9UoCi+8kGJanjq/4SgLK10wV3+HlL/k+k039Ozlqi4Pz/xQcbh6cXS05Hl7xZSYdKoTVl5n0w4dY+p3kv6DIhVX5ou/f/hlEtk46Bmve7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj/wCGXEuzlUGJPAAAAABJRU5ErkJggg==');
    

    let currentDate = new Date().toISOString().split('T')[0];
    let dat = "1990-01-01";
    
    const [input, setInput] = useState({
        name: "",
        img: "",
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
        // console.log(input);
    }

    //realizador de nuevo videogame
    function handleSubmit (e) {
        e.preventDefault();
        // console.log(errors.name)
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
    function buttonLinkImg(e){
        e.preventDefault()
        setImg(input.img)
        console.log('mostrare')
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
                    
            <div className="container mt-4">
                <div className="row d-flex justify-content-center">
                    <div className='col-md-7'>

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
                            <hr/>
                            <div className='containerInput rounded-3 border border-secondary border-3 p-4'>

                                <p>Link-Img</p>
                                <div className='text-center'>
                                    <TutorialGif/>
                                </div>
                                <input 
                                    onChange={handleChange}
                                    type="text"
                                    name= "img"
                                    placeholder={"img"}
                                /><br/>
                                <button className='btn btn-secondary btn-sm' onClick={buttonLinkImg}>
                                    upload image
                                </button>
                                {/* <input type="checkbox" name="Show" id="" /> */}
                                <div className="containerGame m-4">
                                    <img className='w-50 rounded mx-auto d-block' src={img} alt="this-image-link-does-not-work" />
                                </div>
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
                                    <p>Platforms</p>
                                    <SelectorForm
                                        input={input}
                                        setInput={setInput}
                                    />

                                </div>

                            </div>
                            <div className='float-end'>
                                <div className='errors'>
                                    <ErrorsForm
                                        errors={errors}
                                    />
                                </div>

                                <button className='btn btn-secondary' type='submit'>Created Videogame</button>
                                <br /> <br />
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default NewGame;