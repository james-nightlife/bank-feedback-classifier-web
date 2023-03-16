import { useState } from "react";
import React from "react";
import "./FormComponent.scss";
import Axios from "axios";
import { IoTrashBin, IoAdd } from "react-icons/io5";
// import { uuid } from 'uuidv4';

/*ผู้ใช้งานกรอกข้อมูลที่ใช้ในการจำแนกคลาส*/
function FromComponent() {
  const [numberInput, setNumberInput] = useState(1);
  const [texts, setTexts] = useState([""]);
  const [test, setTest] = useState([]);

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

  const isMockUpMode = true;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setNumberInput("");
    setTexts([""]);
    console.log(texts);
    //รับ-ส่งข้อมูลระหว่าง client และ server และแสดงผลลัพธ์ที่ resultcomponent
    var dataResponse = queryData();
  };

  const queryData = () => {
    try {
      if (isMockUpMode) {
        console.log(mockUpData);
        return mockUpData;
      } else {
        Axios.post("http://localhost:3001/submit", { data: texts }).then(
          (response) => {
            //setTest(response.data);
            console.log(response);
            return response.data || [];
          }
        );
      }
    } catch (ex) {
      console.error(ex);
    }
  };

  const mockUpData =
    ([
      {
        INPUT: "เขาโอนเงินมาเยอะมากเกินไป",
        CLASS_NO: 5,
        CLASS_NAME: "เงินฝาก",
        PROBABILITY: 87,
      },
    ],
    [
      {
        INPUT: "เขาโอนเงินมา",
        CLASS_NO: 4,
        CLASS_NAME: "MyMo",
        PROBABILITY: 87,
      },
      {
        INPUT: "เขาโอนเงินมาไม่ไหว",
        CLASS_NO: 6,
        CLASS_NAME: "สินเชื่อ",
        PROBABILITY: 50,
      },
    ]);

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
            <label>
              Text Input {index + 1}:
              <input
                className="text-input-box"
                type="text"
                value={text}
                onChange={(event) =>
                  handleTextChange(index, event.target.value)
                }
              />
            </label>
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
        ))}
        <br />
        <button className="submit-btn" type="submit">
          Submit
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
