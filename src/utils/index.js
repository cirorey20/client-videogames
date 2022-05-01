function validationForm(input, allsGame) {
    let errors = {};
    let validationRating = new RegExp(/^[1-9][\.]\d{2}|\d{2}[\.,]\d{2}/);
    
    //comprueba si el nombre existe en la db
    let isNameDb = allsGame.find(el=> el.name === input.name);

    //fecha actual
    let date = new Date().toISOString().split('T')[0];
    if ( isNameDb ) {
        // console.log(allsGame);
        errors.name = `El nombre "${input.name}" Ya existe en la db`;
    }

    else if (!input.name) {
        errors.name = "Name is required"
    }

    else if (!input.description) {
        errors.name = "Description is required"
    }

    else if (!input.released || input.released > date) {
        errors.name = "Publication date required"
    }

    else if ( !validationRating.test(input.rating) || input.rating > 10 || input.rating < 0 ) {
        errors.name = "A value is required"
    }

    return errors
}

module.exports = {
    validationForm,
}