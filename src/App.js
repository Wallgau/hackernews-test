import React from "react";
import Articles from "./Articles";
import HeaderPage from "./HeaderPage";
import Top from "./Top";
import Footer from "./Footer";
import {Body} from "./styled";
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
