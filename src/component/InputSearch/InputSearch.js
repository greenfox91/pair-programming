import React from 'react';
import "./InputSearch.scss";
import ImageShow from './ImageShow/ImageShow'
import axios from 'axios'

class InputSearch extends React.Component {
    
    state = {
        value: '',
        arrayOfBoth: []
    }

	controller() {
		if (!this.state.arrayOfBoth) {
			return (<h1>Write some text</h1>)
		} else {
			return (
				this.state.arrayOfBoth.map(pair =>
					<ImageShow text={pair.word} img={pair.gif} />
				)
			)
		}
	}
		

    getLastWord(words) {
        let lastWord = words.split(" ");
        return lastWord[lastWord.length - 1];
    }


    getGif = (query) => {

        axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=zWS7ncjDFvqSpOLG4eBDuOVjTDz9RyER`)
            .then(resp => {

                console.log(resp.data)
                let lastWord = this.getLastWord(query)

                let bothToStore = this.state.arrayOfBoth

                bothToStore.push({
                    word: lastWord,
                    gif: resp.data.data[0].images.original.url
                })

                this.setState({ arrayOfBoth: bothToStore })
            })
    }

    onChange = (event) => {
        this.setState({ value: event.target.value })

    }

    onSpace = (event) => {
        if (event.which === 32) {
            this.getGif(this.state.value)
        }
        if (event.which === 13) {

            this.getGif(this.state.value)

            this.setState({ value: '' })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }
    
    
    
    
    render () {
        return (
            <>
            <div className="container">
            <input className="container__input-text" type='text' name='inputText' value={this.state.value} onChange={this.onChange} onKeyDown={this.onSpace} placeholder="Search" outline="none" />

            </div>
            <div>
            {
								this.state.arrayOfBoth.map(pair =>
									<ImageShow text={pair.word} img={pair.gif} />)
            }
            </div>
            </>
        )
    }
}

export default InputSearch;