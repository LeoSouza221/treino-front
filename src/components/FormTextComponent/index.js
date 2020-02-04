import React from 'react'
import './styles.css'

function FormText(props) {
    const labelName = props.label;
    const type = props.type;

    return(
        <div className="input-block">
            <label>{labelName}</label>
            <input value="" type={type}></input>
        </div>
    );
}

export default FormText;
