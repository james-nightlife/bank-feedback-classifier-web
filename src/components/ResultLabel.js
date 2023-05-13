import React from "react";
import "./ResultLabel.scss"

export default function ResultLabel({ result }) {
  let background = "";
  if (result) {
    switch (result.CLASS_NAME) {
      // ['MyMo', 'บัตรและสลากออมสิน', 'สินเชื่อ', 'อื่น ๆ', 'เงินฝาก']
      case "MyMo":
        background = "#c59595";
        break;
      case "บัตรและสลากออมสิน":
        background = "#c595c2";
        break;
      case "สินเชื่อ":
        background = "#95c595";
        break;
      case "อื่น ๆ":
        background = "#c5c5c5";
        break;
      case "เงินฝาก":
        background = "#e6e1b7";
        break;
      default:
        background = "#b7d1e6";
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
