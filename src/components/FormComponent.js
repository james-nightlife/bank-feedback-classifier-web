import { useState } from "react";
import React from "react";
import "./FormComponent.scss";
import { IoTrashBin, IoAdd } from "react-icons/io5";
import { queryData } from "./Api";
import ResultLabel from "./ResultLabel";
// import { uuid } from 'uuidv4';

/*ผู้ใช้งานกรอกข้อมูลที่ใช้ในการจำแนกคลาส*/
function FromComponent() {
  const [numberInput, setNumberInput] = useState(1);
  const [texts, setTexts] = useState([""]);
  const [result, setResult] = useState([]);

  const handleNumberInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (value < 1) {
      setNumberInput(1);
      setTexts([""]);
    } else if (value > 10) {
      setNumberInput(10);
      setTexts(Array(10).fill(""));
    } else {
      setNumberInput(value);
      setTexts(Array(value).fill(""));
    }
  };

  const handleTextChange = (index, value) => {
    const newValues = [...texts];
    newValues[index] = value;
    setTexts(newValues);
  };

  // useEffect(() => {
  //   console.log(texts);
  // }, [texts]);

  const handleRemove = (index) => {
    const newValues = [...texts];
    newValues.splice(index, 1);
    setTexts(newValues);
    setNumberInput(newValues.length);
  };

  const handleAdd = () => {
    const newValues = [...texts, ""];
    setTexts(newValues);
    setNumberInput(newValues.length);
  };

  const handleSubmit = (event) => {
    showLoading();
    event.preventDefault();
    // setNumberInput(0);
    // setTexts([""]);
    callWebService();
  };

  const callWebService = async () => {
    console.log("texts ::: ", texts);
    //รับ-ส่งข้อมูลระหว่าง client และ server และแสดงผลลัพธ์ที่ resultcomponent
    const queryResult = await queryData(texts);
    if (queryResult) { //queryResult ได้ผลลัพธ์กลับมา
      console.log("queryResult ::: ", queryResult);
      setResult(queryResult);
      hideLoading();
    } else {
      callWebService();
    }
  };

  const hideLoading = () => {
    document.getElementById("loading").style.display = "none";
  };

  const showLoading = () => {
    document.getElementById("loading").style.display = "block";
  };

  const handleClearForm = () => {
    setNumberInput(1);
    setTexts([""]);
    setResult([]);
  };

  return (
    <div className="form">
      <form className="form-con">
        <label className="input-con">
          Number Input :
          <input
            type="number"
            min="1"
            max="10"
            // defaultValue={1}
            value={numberInput}
            onChange={handleNumberInputChange}
          />
        </label>
        <div className="text-input-main">
          {texts.map((text, index) => (
            <div className="text-input" key={index}>
              <label className="input-layout">
                Text Input {index + 1}:
                <textarea
                  className="text-input-box"
                  value={text}
                  onChange={(event) =>
                    handleTextChange(index, event.target.value)
                  }
                />
              </label>
              <div className="right-container">
                {index > 0 && (
                  <button
                    className="remove-btn"
                    type="button"
                    onClick={() => handleRemove(index)}
                  >
                    <IoTrashBin size={20} />
                  </button>
                )}
                {index === texts.length - 1 && index < 9 && (
                  <button className="add-btn" type="button" onClick={handleAdd}>
                    <IoAdd size={20} />
                  </button>
                )}
              </div>
              {result[index] && <ResultLabel result={result[index]} />}
            </div>
          ))}
        </div>
        <div className="btn-container">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="clear-btn" onClick={handleClearForm}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default FromComponent;
