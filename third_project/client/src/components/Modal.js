import React from 'react';
import ReactDom from 'react-dom';


const Modal = props => {
    console.log('you call me');
    return ReactDom.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="modal-dialog" style={{width:'40%'}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.content.title}</h5>
                    </div>
                    <div className="modal-body">
                        <p>{props.content.content}</p>
                    </div>
                    <div className="modal-footer">
                        {props.actions()}
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export default Modal;