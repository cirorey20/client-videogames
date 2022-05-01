import {React, Fragment} from 'react';

const ErrorsForm = ({errors}) => {
    return (
        <Fragment>
            {
                errors ?
                (
                    <p className='errorsValidation'>{errors.name}</p>
                )
                :
                (
                    <span></span>
                )
            }
        </Fragment>
    )
}

export default ErrorsForm;