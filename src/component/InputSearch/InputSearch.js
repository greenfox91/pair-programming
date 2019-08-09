import React from 'react';
import "./InputSearch.scss";
import ImageShow from './ImageShow/ImageShow'
import axios from 'axios'

class InputSearch extends React.Component {
	
	state = {
		value: '',
		arrayOfBoth: []
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
				
				let urlToStore = resp.data.data[0].images.original.url
								let idToStore = resp.data.data[0].id

				bothToStore.push({
					word: lastWord,
					gif: urlToStore,
										id: idToStore
				})

				this.setState({ arrayOfBoth: bothToStore })
			}).catch(error => console.log(error))
	}

	onChange = (event) => {
		this.setState({ value: event.target.value })

	}

	onKeyEvent = (event) => {
		if (event.which === 32) {
			this.getGif(this.state.value)
		}
		if (event.which === 13) {

			this.getGif(this.state.value)

			this.setState({ value: '' })
			if (document && document.activeElement) document.activeElement.blur()
		}
	}

	handleFocus = (event) => {
		this.setState({ value: '', arrayOfBoth: [] })
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}
	
	
	
	
	render () {
		return (
			<>
			<div className="container">
			<input className="container__input-text" 
					type='text' 
					name='inputText' 
					placeholder="Search" 
					outline="none" 
					value={this.state.value} 
					onChange={this.onChange} 
					onKeyDown={this.onKeyEvent} 
					onFocus={this.handleFocus} 
			/>

			</div>
			<ul className="gif-wrapper">
			{
			this.state.arrayOfBoth.map((pair, index) =>
				<ImageShow key={index} text={pair.word} img={pair.gif} />
				
				)
			}
			</ul>
			</>
		)
	}
}

export default InputSearch;