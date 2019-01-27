import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const URL = 

class App extends Component {

  state = {temperature: null}



    // *********** TECHNIQUE DU FETCH ***********

    // componentDidMount() {
    // afficher la meteo dès le chargement de la page
    // fetch('url')
    // si on fait un console log de fetch la... on voit promise
    // donc la il n'y a pas la donnée car fetch retourne un promesse pas une donnée

    // on lui ajoute un .then()
    // ce .then() attend une fonction genre
    // .then((response)=> response.json()) ... qui permet de transformer la promesse en format json
    //  response.json() est lui aussi asynchrone est renvoie aussi une promesse
    // donc on lui met aussi un .then
    // .then((data) => {
    //   this.setState({temperature: data.query.results.channel.item.condition.temp})
    // })

    // la donnée que nous allons chercher nous la mettons dans un state

    // ensuite après la chaine de promesse
    // on peut mettre un .catch()
    // .catch((error) => {
    //   console.log(error)
    // })
    // on peut aussi mettre un cas par défaut par exemple dans ce catch, genre
    // .catch((error) => {
    //   this.setState({temperature: 0})
    // })



     // *********** TECHNIQUE DU ASYNC AWAIT ***********
    
    // async componentDidMount() {


    // } catch(error) {
    //   //   this.setState({temperature: 0})
    // }
    // try {
      // const response = await fetch(URL) // la c'est comme si on faisait le premier then
      // const data =  await response.json(); la c'est comme si on faisait le 2eme then
    //   this.setState({temperature: data.query.results.channel.item.condition.temp})
    // } catch(error) {
    //   //   this.setState({temperature: 0})
    // }

    // on lui ajoute un .then()
    // ce .then() attend une fonction genre
    // .then((response)=> response.json()) ... qui permet de transformer la promesse en format json
    //  response.json() est lui aussi asynchrone est renvoie aussi une promesse
    // donc on lui met aussi un .then
    // .then((data) => {
    //   this.setState({temperature: data.query.results.channel.item.condition.temp})
    // })

    // la donnée que nous allons chercher nous la mettons dans un state

    // ensuite après la chaine de promesse
    // on peut mettre un .catch()
    // .catch((error) => {
    //   console.log(error)
    // })
    // on peut aussi mettre un cas par défaut par exemple dans ce catch, genre
    // .catch((error) => {
    //   this.setState({temperature: 0})
    // })
  }
  render() {
    return (
      <div className="App">
      {this.state.temperature}
        
      </div>
    );
  }
}

export default App;
