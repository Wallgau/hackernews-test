import React from "react";
import Articles from "./Components/Articles";
import HeaderPage from "./Components/HeaderPage";
import Top from "./Components/Top";
import Footer from "./Components/Footer";
import {Body} from "./Components/styled";
import "./App.css"

function App() {
    return (
        <>
            <HeaderPage/>
            <Top/>
            <Body>
                <div>
                    <Articles/>
                </div>
            </Body>
            <Footer/>
        </>
    );
}

export default App;
