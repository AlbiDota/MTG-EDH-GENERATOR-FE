import { useState } from "react";
import ColorPanel from "../components/inputs/colorPanel/ColorPanel";
import InputField from "../components/inputs/inputField/InputField";
import Submit from "../components/submit/Submit";
import { useNavigate } from "react-router-dom";


function Home() {
    const nav = useNavigate();
    const [colorSelection, setColorSelection] = useState("");
    const [inputValue, setInputValue] = useState("");


    const handleSubmit = () => {
        if(!inputValue && !colorSelection) {
            alert("You need to select some colors OR enter a legendary name!");
            return;
        }

        // den tar inntasta navn som førstepri
        let redirect = ""
        // const param = inputValue.trim() ? 
        // `?commander=${inputValue}` :
        // `?colors=${colorSelection}`;

        if (inputValue.trim()) {
            redirect = `/deck?commander=${encodeURIComponent(inputValue)}`;
        } else {
            redirect = `/deck?colors=${colorSelection}`;
        }

        // console.log("url fra Home: ",url+redirect);

        // redirect til Deck.jsx med query params
        // nav(redirect);
        window.open(redirect, '_blank')

    }


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
        <button onClick={handleSubmit}>Submit & pray</button>
        </div>
    )
}

export default Home;