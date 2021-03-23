import React from 'react';

const TagLink = (props) => {
    return (
        <a className="btn btn--svg js-animated-button" href="#project"><span className="btn--svg__label">#{props.children}</span>
            <svg className="btn--svg__circle" width="190" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60">
                <circle className="js-discover-circle" fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
            </svg>
            <svg className="btn--svg__border" x="0px" y="0px" preserveaspectratio="none" viewBox="2 29.3 56.9 13.4" enable-background="new 2 29.3 56.9 13.4" width="190">
                <g className="btn--svg__border--left js-discover-left-border" id="Calque_2">
                    <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"></path>
                </g>
                <g className="btn--svg__border--right js-discover-right-border" id="Calque_3">
                    <path fill="none" stroke="#FFF" stroke-width="0.5" stroke-miterlimit="1" d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"></path>
                </g>
            </svg>
        </a>
    );
};

export default TagLink;