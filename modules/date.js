import { DateTime } from "../luxon.js";
//import { DateTime } from '../node_modules/luxon/src/luxon.js';
const dateTime = document.querySelector('.date-time');
let date = '';

const newDate = () => {
  date = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  dateTime.innerText = date;
};

export default newDate;
