import React, { Component } from "react";
import { Consumer } from "../../Context";
import axios from "axios";

const api_key = process.env.REACT_APP_M_KEY;

class Input extends Component {
  state = {
    trackTitle: "",
  };

  submitHandler = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${api_key}`
      )
      .then((res) => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-2 p-2">
              <h1 className="display-4 text-center">
                <i className="fas fa-music p-5"> Search For a Song</i>
              </h1>
              <p className="lead text-center">Get the lyrics for any Song</p>
              <form
                onSubmit={this.submitHandler.bind(this, dispatch)}
                className="text-center"
              >
                <div className="from-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song Title...."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={(e) =>
                      this.setState({ [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <button className="btn btn-primary btn-lg  m-3 mx-auto">
                  Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Input;
