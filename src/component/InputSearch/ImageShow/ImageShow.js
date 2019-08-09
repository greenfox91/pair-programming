import React from 'react';
import './ImageShow.scss'

class ImageShow extends React.Component {
    
    render () {
        console.log(this.props.img)
        return (
           <li className='wrapper'>
            <h1 className="text-output">{this.props.text}</h1>
            <img className="image-output" src={`${this.props.img}`} alt='new' />
           </li>
        )
    }
}

export default ImageShow;