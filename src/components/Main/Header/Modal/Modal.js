import React from 'react';

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h3>hello</h3>
            </div>
        </div>
    );
};

export default Modal;