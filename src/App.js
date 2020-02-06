import React from "react";
import logo from "./logo.svg";
import "./App.css";
import cart from "./component/Header/menu icon.png";

class App extends React.Component {
  state = {
    image: logo,
    replaceText: "i appeared when you clicked the buttons!!!",
    backgroundColor: "black",
    text: "Learn React",
    width: ""
  };

  handleColor = () => {
    this.setState({ backgroundColor: "purple" });
  };

  handleText = () => {
    this.setState({ text: this.state.replaceText });
  };
  handleImage = () => {
    this.setState({ image: cart, width: "150px" });
  };
  render() {
    return (
      <div style={{ backgroundColor: this.state.backgroundColor }}>
        <header className="App-header">
          <img
            src={this.state.image}
            className="App-logo"
            alt="logo"
            style={{ width: this.state.width }}
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.text}
          </a>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button onClick={this.handleColor}>change color</button>
            <button onClick={this.handleImage}>change image</button>
            <button onClick={this.handleText}>change text</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
