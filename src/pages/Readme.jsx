import { useState } from "react";
import ColorPanel from "../components/inputs/colorPanel/ColorPanel";
import InputField from "../components/inputs/inputField/InputField";
import { useNavigate } from "react-router-dom";
import "./pages.css";

function Home() {

    return (
        <div style={{
            display:"flex", 
            flexDirection:"column", 
            alignItems:"center" 
        }}>
        <h1>MTG-EDH-GENERATOR</h1>

        <h2>Select your future commander</h2>
        <h3>by color..</h3>
        <ColorPanel selection={colorSelection} setSelection={setColorSelection}/>
        <br/><br/>
        <h3>.. or by name</h3>
        <InputField input={inputValue} setInput={setInputValue}/>
        <br/><br/>
        <button onClick={handleSubmit} className="btn">Submit & pray</button>
        </div>
    )
}

export default Home;