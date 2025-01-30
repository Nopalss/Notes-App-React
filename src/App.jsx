import { Fragment } from "react";
import React from "react";
import "./assets/style/App.css";
import Navbar from "./components/layouts/Navbar";
import MainPage from "./components/layouts/MainPage";
import FooterPage from "./components/layouts/FooterPage";
import { getInitialData } from "./utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNotes: getInitialData(),
      maxLength: 50,
      searchNotes: "",
    };
    this.onHandlerDelete = this.onHandlerDelete.bind(this);
    this.onHandlerAddToArsip = this.onHandlerAddToArsip.bind(this);
    this.onHandlerAddToAktif = this.onHandlerAddToAktif.bind(this);
    this.onHandlerAddNotes = this.onHandlerAddNotes.bind(this);
    this.onMaxLength = this.onMaxLength.bind(this);
    this.onSearchNotes = this.onSearchNotes.bind(this);
  }
  render() {
    return (
      <Fragment>
        <Navbar onSearchNotes={this.onSearchNotes} />
        <MainPage
          searchNotes={this.state.searchNotes}
          dataNotes={this.state.dataNotes}
          onHandlerDelete={this.onHandlerDelete}
          onHandlerAddToArsip={this.onHandlerAddToArsip}
          onHandlerAddToAktif={this.onHandlerAddToAktif}
          onHandlerAddNotes={this.onHandlerAddNotes}
          onMaxLength={this.onMaxLength}
          maxLength={this.state.maxLength}
        />
        <FooterPage />
      </Fragment>
    );
  }
  onHandlerDelete = (id) => {
    const dataNotes = this.state.dataNotes.filter((note) => note.id !== id);
    this.setState({ dataNotes });
  };
  onHandlerAddToArsip = (id) => {
    const dataNotes = this.state.dataNotes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    );
    this.setState({ dataNotes });
  };

  onHandlerAddToAktif = (id) => {
    const dataNotes = this.state.dataNotes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );
    this.setState({ dataNotes });
  };

  onHandlerAddNotes = (e) => {
    e.preventDefault();
    const dataNotes = this.state.dataNotes.concat({
      id: +new Date(),
      title: e.target.addTitle.value,
      body: e.target.addText.value,
      createdAt: new Date().toISOString(),
      archived: false,
    });
    e.target.addTitle.value = "";
    e.target.addText.value = "";

    console.log(e.target.addTitle.value);
    this.setState({ dataNotes });
  };
  onMaxLength(e) {
    const value = e.target.value.length;
    this.setState({
      maxLength: 50 - Number(value),
    });
  }

  onSearchNotes(e) {
    this.setState({ searchNotes: e.target.value });
  }
}

export default App;
