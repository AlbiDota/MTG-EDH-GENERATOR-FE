import { useState } from "react";
import ColorPanel from "../components/colorPanel/ColorPanel";
import InputField from "../components/inputField/InputField";
import Submit from "../components/submit/Submit";

// const url = process.env.url || "http://localhost:3001/deckbuilder"
const url = "http://localhost:3001/deckbuilder"

function Home() {

    const [colorSelection, setColorSelection] = useState("");
    const [inputValue, setInputValue] = useState("");

    async function handleSubmit() {
        // den tar inntasta navn som førstepri
        const param = inputValue.trim() ? 
        `?commander=${inputValue}` :
        `?colors=${colorSelection}`;

        if(!inputValue && !colorSelection) {
            alert("You need to select some colors OR enter a legendary name!");
            return;
        }

        console.log(url+param);

        try {
            const res = await fetch(`${url}/${param}`, {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            });
            const result = await res.json();
            console.log(result);
        } catch(err) {
            alert(err);
            console.error(err);
        }
    };

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