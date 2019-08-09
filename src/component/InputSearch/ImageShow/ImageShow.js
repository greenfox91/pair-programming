import React from 'react';
import './ImageShow'

class ImageShow extends React.Component {
    
    render () {
        console.log(this.props.img)
        return (
           <>
            <p className="text-output">{this.props.text}</p>
            <img src={`${this.props.img}`} alt='new' />
           </>
        )
    }
}

export default ImageShow;