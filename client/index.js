import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const old_fetch = fetch;
function fetch_special(data, requestOptions, port=4000){
    // Will return a promise
    const url = `http://${window.location.hostname}:${port}${data}`
    console.log("URL: ", url);
    return old_fetch( url , {...requestOptions, mode: 'cors', credentials: 'include', } )
}

if( true ){//window.localStorage.getItem("fetch_special") == null){
    window.localStorage.setItem("fetch_special", true )
    console.log("Setting new special fetch")
    window.fetch = fetch_special;
}

ReactDOM.render(<App />, document.getElementById("root"));
