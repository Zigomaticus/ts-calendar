import React, { FC } from "react";
// Utils
import { createDate } from "./utils/helpers/date/createDate";
// Css
import "./static/css/global.css";

console.log(createDate({ locale: "en-US" }));

function test(str: string) {
  console.log("test");
}
function test2(str: string) {
  console.log("test 2");
}

const App: FC = () => {
  return <div className="app__container">Calendar</div>;
};

export default App;
