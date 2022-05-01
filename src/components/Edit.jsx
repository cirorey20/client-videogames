import React, {Fragment, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { uploadGame, getUser, clearData } from '../actions/users';
import {useDispatch, useSelector} from 'react-redux';
import Nav from './Nav';

const Edit = () => {

    const history = useHistory();
    const dispacht = useDispatch();

    const videogames = useSelector((state)=> state.userReducer.gamesUser);
    const [game, setGame] = useState('nada');
    const [img, setImg] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC7CAMAAACjH4DlAAAAXVBMVEUpMTRnjLEiJiNcfJxrkbgkKSgoLzEmLS5EWWxXdpM0QkxAVGUuOT9kiKslKytSbohPaYJggqM+UF8wO0I6SldIX3Q2RE9LY3oyP0crNDk+UWFWdJA7S1lPaH9jhacMRR/OAAADlElEQVR4nO3c7XKqMBSFYSi4CSCB8CGkKvd/mUfAVoNgHUiPdbuef51aprwDAQLiOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6NAbiySAT17jVYIZFNloUVZ1cjg2Wu1WJypxLUqUVn87LVaiLbKtxuj46vti+4wwvKmMUjEs9drkaBSv1HDdVX1isOHPA45fIuGHLV89rot8DH8861oIksa0Q6BP569bgucc3gbsmbjMchhb5HIYeCWo9/kly+SVQ4K9GlU3RXLT7M55dBNlXbXHfu6WrqBMMpBTfx1zq6KhT3Y5CAdeZcLmHa37LqDTY5tap5o74sli2ScY8nmwSVHUI0uw/wqWtCDTY56PPNRl/M5Zs9NuOSQ2aiGG4r5s4/oc2ZXYpMjHefw5ictxN7NDpM93jAH6dM6t+nklPn75aAy7H+fTu0vXHLcHFnmdgfKz2Nu0k4cetjkEKMavmimclBwmW0Ob2cGuOSgnWfmULvJv9nGV58pb3YnLjkcKcxpdTG5bezMZDeXemxyUCSSy5mYX01tHAGZI0ySCGn2YJPDISevPZWctF74OTmM5sfxbSpVlcYn+OQ4BZFadNM/x6aYOsaSbt0bbWh8lFMOx9GlOPkstlMf11O3MBOVX/fgleN0HD2ZPt8o5+5uX4+nzHLMIhnP1EhUeVnAu+TQ4Z1HH7LvJTDNMdpf6HNiFL0S7s5/wDMHRdr4udjfreG2mR56sMxBjrfPrzYQEd6v0e0vh/4AwzGHLivfVeXXBhLE9/eUgddfADPMQU3abQ3ZefvQdDMVMqmfHmGYQ59nkVXe/USifuwBsrR74odhju9L/bS7Exf8PG4wzkEkLvcms1LK+NFHLVnmOJinW573aA2OOUgezEmg5PEHT/nloObeqfi75SA5e9X6hjkoEt699X2vHNtov+p5fV45qBHrvr3AKseqUZRfDpmt/WYLrxyPXachB3IgB3Ighwk5DMhhMHOsPO/weeXIkpUyTjkcvV2pvw/BJoez9kuS/UL45LACOQwMcqhSB5boUr1wjuEQmWQitkRk55n3V8zx9UoCi+8kGJanjq/4SgLK10wV3+HlL/k+k039Ozlqi4Pz/xQcbh6cXS05Hl7xZSYdKoTVl5n0w4dY+p3kv6DIhVX5ou/f/hlEtk46Bmve7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj/wCGXEuzlUGJPAAAAABJRU5ErkJggg==');
    
    const [input, setInput] = useState({
        name: "",
        img: "",
        description: "",
        rating: "",
        userId: localStorage.getItem('id')
    })
    
    function handleChange (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        console.log(input)
        // console.log(e);
    }
    
    //realizador de nuevo videogame
    function handleSubmit (e) {
        e.preventDefault();
        const token = localStorage.getItem('token')
        const idGame = localStorage.getItem('idGame')
        const userId = localStorage.getItem('id')
        let n = game ? game.name : "cle";
        let d = game ? game.description : "cle";
        let i = game ? game.img : "cle";
        let r = game ? game.rating : "cle";
        let data = {
            name: input.name === ''? n : input.name,
            description: input.description === ''? d : input.description,
            img: input.img === ''? i : input.img,
            rating: input.rating === ''? r : input.rating,
        }
        console.log(data);
        console.log("Enviar")
        dispacht( uploadGame(idGame, data, token) );
        setTimeout(()=>{
            dispacht(clearData());
            localStorage.removeItem('idGame')
        }, 200)
        setTimeout(()=>{
            dispacht(getUser(userId));
        }, 500)
        history.push('/dashboard')
    }

    function buttonLinkImg(e){
        e.preventDefault()
        setImg(input.img)
        console.log('mostrare')
    }

    useEffect(()=>{
        const isUser = localStorage.getItem('payload');
        const idGame = localStorage.getItem('idGame');
        // console.log(videogames)
        if(isUser !== 'user' && !idGame) {
            return history.push('/login')
        } else {
            const idG = localStorage.getItem('idGame');
            const filterGame = videogames.filter(el => el.id === idG)
            let g = filterGame.map((el)=>{
                return {
                    id: el.id,
                    name: el.name,
                    description: el.description,
                    rating: el.rating,
                    img: el.img
                }
            })
            setGame(g[0])
            
        }
    }, [dispacht, history, videogames])


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
                                onChange={handleChange}
                                type="text"
                                name= "name"
                                placeholder={
                                    game?
                                    game.name
                                    :
                                    "name"
                                }
                            />
                        </div>

                        <div className='containerInput'>

                            <p>Description</p>
                            <textarea 
                                rows="4" cols="55"
                                onChange={handleChange}
                                type="text"
                                name= "description"
                                placeholder={
                                    game?
                                    game.description
                                    :
                                    "description"
                                }
                            />
                        </div>

                        <div className='containerInput'>

                            <p>Link-Img</p>
                            <input 
                                onChange={handleChange}
                                type="text"
                                name= "img"
                                placeholder={
                                    game?
                                    game.img
                                    :
                                    "img"
                                }
                            />
                            <button onClick={buttonLinkImg}>Show</button>
                            {/* <input type="checkbox" name="Show" id="" /> */}
                            <div className="containerGame">
                                <img src={img} alt="" />
                            </div>
                        </div>

                        <div className='containerInput'>

                            <p>Rating</p>
                            <input 
                                onChange={handleChange}
                                type="text"
                                name= "rating"
                                placeholder={
                                    game?
                                    game.rating
                                    :
                                    "rating"
                                }
                            />
                        </div>
                        <button type='submit'>Save</button>
                        <br /> <br />

                    </form>
                </div>

            </div>
        </Fragment>
    )
}

export default Edit;