import React, { FC } from "react";
// Utils
import { createDate } from "./utils/helpers/date/createDate";
// Css
import "./static/css/global.css";

console.log(createDate({ locale: "en-US" }));

const App: FC = () => {
  return <div className="app__container">Calendar</div>;
};

export default App;
