import './App.css';
import {Component, useState} from 'react';
import Photo from './Me.jpg';
import Header from './components/Header';

class App extends Component {
  
  constructor(){
    super(useState);
    this.state = {
      fullName: "El Mahdi Bel mamoun",
      bio: "Je suis passionné de l'outils informatique",
      photo: {Photo},
      profession: "Developper Full-stack",
      show: false,
      
    }
  }
  render() {
    
    return <div className='app'>
      <Header />
      <div className='content'>
        <h1>Je m'appelle {this.state.fullName}</h1>
        <p>{this.state.bio}</p>
        <img src={Photo} alt="" />
      </div>
      
    </div>
  }
}



export default App;
