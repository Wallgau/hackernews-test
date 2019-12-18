import React from "react";
import Articles from "./Articles";
import HeaderPage from "./HeaderPage";
import { Body } from "./styled";

function App() {
  return (
    <Body>
      <div>
        <HeaderPage />
        <Articles />
      </div>
    </Body>
  );
}

export default App;
