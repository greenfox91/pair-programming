import React from 'react';
import axios from 'axios'


class Main extends React.Component {

  state = {
    arrayOfGifs: [],
    value:'',
    arrayOfWords: [],
    arrayOfBoth: []
  }

  getLastWord(words) {
    let lastWord = words.split(" ");
    return lastWord[lastWord.length - 1];
  }


  getGif = (query) => {

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=zWS7ncjDFvqSpOLG4eBDuOVjTDz9RyER`)
    .then(resp => {

      console.log(resp)
      let lastWord = this.getLastWord(query)

      let bothToStore = this.state.arrayOfBoth

      bothToStore.push({
        word: lastWord,
        gif: resp.data.data[0].embed_url
      })

      this.setState({ arrayOfBoth: bothToStore })
    })
  }

  onChange = (event) => {
    this.setState({value: event.target.value})

  }
 
 onSpace = (event) => {
   if (event.which === 32) {
    //  let wordsToStore = this.state.arrayOfWords
     
    //  let lastWord = this.getLastWord(this.state.value)
    //  wordsToStore.push(lastWord)

    //  this.setState({arrayOfWords: wordsToStore})

     this.getGif(this.state.value)
   }
   if (event.which === 13) {
     
     this.getGif(this.state.value)

     this.setState({ value: '' })
   }
 }

 handleSubmit=(event) => {
   event.preventDefault()
 }

  render() {
    console.log(this.state)


    return (
      <>
      <h1>Main</h1>
      <input type='text' name='inputText' value={this.state.value} onChange={this.onChange} onKeyDown={this.onSpace}/>
      </>
    );
  }
}

export default Main;
