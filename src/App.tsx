import React, { FC } from "react";
// Utils
import { createDate } from "./utils/helpers/date/createDate";
import { createMonth } from "./utils/helpers/date/createMonth";
// Css
import "./static/css/global.css";

console.log(createMonth({ locale: "en-US" }).createMonthDays());

const App: FC = () => {
  return <div className="app__container">Calendar</div>;
};

export default App;
