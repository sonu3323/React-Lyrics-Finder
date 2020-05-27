import React, { Component } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const api_key = process.env.REACT_APP_M_KEY;

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${api_key}`
      )
      .then((res) => {
        this.setState({ lyrics: res.data.message.body.lyrics });
      })
      .catch((error) => {
        console.log(error);
      });

    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${api_key}`
      )
      .then((res) => {
        this.setState({ track: res.data.message.body.track });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { track, lyrics } = this.state;

    let getTrack = null;

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics) === 0
    ) {
      getTrack = <Spinner />;
    } else {
      getTrack = (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} by{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>

          <ul className="list-group mt3">
            <li className="list-group-item">
              <strong>Album Id</strong>: {track.album_id}
            </li>

            <li className="list-group-item">
              <strong>Release Date</strong>:{" "}
              <Moment format="DD/MM/YYYY">{track.updated_time}</Moment>
            </li>
          </ul>
        </React.Fragment>
      );
    }

    return <div>{getTrack}</div>;
  }
}

export default Lyrics;
