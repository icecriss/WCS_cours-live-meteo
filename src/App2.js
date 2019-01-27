import React, { Component } from "react";

export default class App2 extends Component {
  state = { temperature: null };

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=06b50d32565202dcd5d76bc954529d6b"
      ); // la c'est comme si on faisait le premier then
      const data = await response.json();
      console.log(data);
      // la c'est comme si on faisait le 2eme then
      // this.setState({temperature: data.query.results.channel.item.condition.temp})
    } catch (error) {
      //   this.setState({temperature: 0})
    }
  }

  render() {
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }
}
