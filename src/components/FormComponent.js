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
  const [test, setTest] = useState([]);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setNumberInput(0);
    // setTexts([""]);
    console.log("texts ::: ", texts);
    //รับ-ส่งข้อมูลระหว่าง client และ server และแสดงผลลัพธ์ที่ resultcomponent
    const queryResult = await queryData(texts);
    console.log("queryResult ::: ", queryResult);
    setResult(queryResult);
  };

  const handleClearForm = () => {};

  return (
    <div className="form">
      <form className="form-con" onSubmit={handleSubmit}>
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
        <br />
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
        <br />
        <button className="submit-btn" type="submit">
          Submit
        </button>
        <button className="submit-btn" onClick={handleClearForm}>
          Clear
        </button>
        {/* <div>
          {test.map((val, key) => {
            return <div key={key}>{val.name}</div>;
          })}
        </div> */}
      </form>
    </div>
  );
}

export default FromComponent;
