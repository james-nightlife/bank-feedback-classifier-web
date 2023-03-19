import React from "react";
import "./ResultLabel.scss"

export default function ResultLabel({ result }) {
  let background = "";
  if (result) {
    switch (result.CLASS_NAME) {
      // ['MyMo', 'บัตรและสลากออมสิน', 'สินเชื่อ', 'อื่น ๆ', 'เงินฝาก']
      case "MyMo":
        background = "red";
        break;
      case "บัตรและสลากออมสิน":
        background = "pink";
        break;
      case "สินเชื่อ":
        background = "green";
        break;
      case "อื่น ๆ":
        background = "lightgray";
        break;
      case "เงินฝาก":
        background = "yellow";
        break;
      default:
        background = "blue";
        break;
    }
  }

  return (
    <div className="result">
      {result.CLASS_NAME && <div className="result-class-name" style={{ background }}>{result.CLASS_NAME}</div>}
      {result.PROBABILITY && <div className="result-probability">{result.PROBABILITY}</div>}
    </div>
  );
}
