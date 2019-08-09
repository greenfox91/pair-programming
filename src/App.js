import React from 'react';
import './App.css';
import InputSearch from "./component/InputSearch/InputSearch"
import ImageShow from "./component/ImageShow/ImageShow"
class App extends React.Component {
  render() {
    return (
      <>
      <InputSearch />
      <ImageShow />
      </>
    )
  }
}

export default App;
