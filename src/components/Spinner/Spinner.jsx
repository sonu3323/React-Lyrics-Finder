import React from 'react';
import SpinnerGif from "../assets/Spinner.gif"

const Spinner = () => {
    return (
       <img src={SpinnerGif} alt="loading" style={{width: "150px" , margin:"40px auto" , display: "block"}} />
    )
}

export default Spinner;
