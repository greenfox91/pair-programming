import React from 'react';
import './ImageShow'

class ImageShow extends React.Component {
    render () {
        return (
           <>
            <p className="text-output">{this.props.text}</p>
            <img src={this.props.img} />
           </>
        )
    }
}

export default ImageShow;