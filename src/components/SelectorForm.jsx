import React, { Fragment } from 'react';

const SelectorForm = ({selectors, input, setInput}) => {
    const platforms = [
        "Xbox One",
        "Xbox Series S/X",
        "Xbox 360",
        "PlayStation 3",
        "PlayStation 4",
        "PlayStation 5",
        "PS Vita",
        "Nintendo Switch",
        "PC",
        "Linux",
        "macOS",
        "iOS",
        "Android"
    ];

    function handleSelectGenres(e) {
        if ( input.genres.includes(e.target.value) ) {
            let gen = input.genres.filter(el=> el !== e.target.value)
            console.log("Saco el ",e.target.value)
            setInput({
                ...input,
                genres: gen
            })
        } else {
            setInput({
                ...input,
                genres: [...input.genres, e.target.value],
            })
        }
    }
    function handleSelectPlatforms(e) {
        if(input.platforms.includes(e.target.value)){
            let plat = input.platforms.filter(el=> el !== e.target.value)
            console.log("Saco el ",e.target.value)
            setInput({
                ...input,
                platforms: plat
            })
        } else {
            setInput({
                ...input,
                platforms: [...input.platforms, e.target.value]
            })
        }
    }

    return (
        <Fragment>
            {
                selectors ?
                (
                    selectors.map((item, i) => {
                        return (
                            
                            <div className='gen'  key={i}>
                                <label>
                                    <input 
                                        type="checkbox"
                                        value={item.name}
                                        name="genres"
                                        onChange={(e) => handleSelectGenres(e)}
                                    />
                                        {"  "+item.name}
                                    </label>
                                </div>
    
                        )
                    })
                )
                :
                (
                    platforms.map((item, i) => {
                        return (
                            
                            <div className='plat'  key={i}>
                                <label>
                                    <input 
                                        type="checkbox"
                                        value={item}
                                        name="platforms"
                                        onChange={(e) => handleSelectPlatforms(e)}
                                    />
                                        {"  "+item}
                                    </label>
                                </div>
    
                        )
                    })
                )
            }
        </Fragment>
    )
}

export default SelectorForm;