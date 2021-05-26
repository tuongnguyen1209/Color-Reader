import React from "react";
import googleOcrApi from "./apis/googleOcrApi";
import "./App.css";

function App() {
  googleOcrApi.getText({
    requests: [
      {
        image: {
          content: 'UklGRo4AAABXRUJQVlA4IIIAAACwCwCdASqAAWAAPm02mUmkIyKhIEgAgA2JaW7hdrEe3AfgB+AAAC0ty16KuEGQQ1VJrttFwgyCGqpNdtouEGQQ1VJrttFwgyCGqpNdtouEGQQ1VJrttFwgyCGqpNdtouEGQQ1VH4AA / v9DC///6yq+So/cl///pNGqfj7IAAAAAAAA '
        },
        features: [
          {
            type: "TEXT_DETECTION"
          }
        ]
      }
    ]
  }).then(response => { console.log(response); })
  return <div className="App"></div>;
}

export default App;
