import React from 'react';
import "./InputSearch.scss";

class InputSearch extends React.Component {
    render () {
        return (
            <div className="container">
            <input className="container__input-text" type='text' name="input-text" placeholder="Search" outline="none"></input>
            </div>
        )
    }
}

export default InputSearch;