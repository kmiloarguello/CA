import React from "react";
import { render } from "react-dom";
import CA from "./CA.jsx";
import { PersonalInfo } from "./data/data.js";

render(<CA PersonalInfo={PersonalInfo} />, document.getElementById("root"));
