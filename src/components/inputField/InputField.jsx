import './InputField.css'
import { useState } from 'react'

function InputField({input, setInput}) {
    // const [input, setInput] = useState("");

    function handleChange(e) {
        // console.log(e.target.value)
        const val = e.target.value;
        setInput(val);
        
    }

    return (
        <div className="input-field">
            <div>
                <img src="/src/assets/empty_card.gif" alt="card" draggable="false" />
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Eddy D. Highlander"
                />
            </div>
        </div>
    )

}

export default InputField;