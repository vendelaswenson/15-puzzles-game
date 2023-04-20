import React from 'react';
import PropTypes from 'prop-types';
import "./box.css"

export default function Box({boxNumber,onClick}){
    return <span onClick={onClick} className={!boxNumber?"empty": "board--box"}>{boxNumber || ""}</span>;
}

Box.propTypes = {
    onClick: PropTypes.func.isRequired,
    boxNumber: PropTypes.number.isRequired
};