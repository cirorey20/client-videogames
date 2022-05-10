import React, {Fragment} from 'react';
import tutorial from '../files/gif/tutorial.gif';

const TutorialGif = () => {

    return (
        <Fragment>
            <button type="button" className="btn btn-outline-secondary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                how to load image?
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-body">
                        <img src={tutorial} alt="" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TutorialGif;