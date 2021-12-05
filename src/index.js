import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";

/** Get your free Moralis Account https://moralis.io/ */

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const appid = "V5QlurXlsO8zfvZiEMhIurQ1oJ1Rl2GSrUfeJRZD"
const serverUrl = "https://yuaam9ymoe07.usemoralis.com:2053/server"

const Application = () => {
  const isServerInfo = appid && serverUrl ? true : false;
  if (isServerInfo)
    return (
      <MoralisProvider appId={appid} serverUrl={serverUrl}>
        <App isServerInfo />
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
       Jebiga
      </div>
    );
  }
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById("root")
);
