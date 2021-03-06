import React, { Component } from "react";

const city = "Marseille";

export default class App2 extends Component {
  state = { city: null };

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=06b50d32565202dcd5d76bc954529d6b"
      ); // la c'est comme si on faisait le premier then
      const data = await response.json();
      console.log(data);
      this.setState({ city: data.city.name });
      // la c'est comme si on faisait le 2eme then
      // this.setState({temperature: data.query.results.channel.item.condition.temp})
    } catch (error) {
      //   this.setState({temperature: 0})
    }
  }

  render() {
    return (
      <div>
        <p>City: {this.state.city}</p>
        {/* <p>Temperature: {this.state.</p> */}
      </div>
    );
  }
}
