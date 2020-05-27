import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const api_key = process.env.REACT_APP_M_KEY;

const reduce = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRACKS":
      return {
        ...state,
        tracksList: action.payload,
        heading: "Seacth Results",
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    tracksList: [],
    heading: "Top 10 Tracks",
    dispatch: (action) => this.setState((state) => reduce(state, action)),
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=IN&f_has_lyrics=1&apikey=${api_key}`
      )
      .then((res) => {
        this.setState({ tracksList: res.data.message.body.track_list });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
