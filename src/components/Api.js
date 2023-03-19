import Axios from "axios";

const isMockUpMode = false;

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

export const queryData = async (texts) => {
  try {
    if (isMockUpMode) {
      console.log(mockUpData);
      return mockUpData;
    } else {
      const response = await Axios.post("https://bank-feedback-classifier-api.herokuapp.com/submit", {
        data: texts,
      });
      //setTest(response.data);
      console.log(response);
      return response?.data?.data || [];
    }
  } catch (ex) {
    console.error(ex);
  }
};
