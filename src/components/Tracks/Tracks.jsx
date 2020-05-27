import React, { Component } from "react";
import { Consumer } from "../../Context";
import Spinner from "../Spinner/Spinner";
import Track from "./Track";

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { tracksList, heading } = value;
          if (tracksList === undefined || tracksList.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h2 className="text-center">{heading}</h2>
                <hr />
                <div className="row">
                  {tracksList.map((item) => (
                    <Track track={item.track} key={item.track_id} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
