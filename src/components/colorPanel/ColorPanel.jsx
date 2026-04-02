import './ColorPanel.css'
import W from '../../assets/big/W.svg'
import U from '../../assets/big/U.svg'
import B from '../../assets/big/B.svg'
import R from '../../assets/big/R.svg'
import G from '../../assets/big/G.svg'
import C from '../../assets/big/C.svg'
import { useState } from 'react'

function ColorPanel({selection, setSelection}) {
    const icons = [
       { name: "w", img: W },
       { name: "u", img: U },
       { name: "b", img: B },
       { name: "r", img: R },
       { name: "g", img: G },
       { name: "c", img: C },
    ];

    // let selection = ""
    // const [selection, setSelection] = useState("");

    const handleClick = (c) => {
        // if (selection.includes(c)) {
        //     // toggle off
        //     return selection = selection.replace(c, "");
        // } else {
        //     // toggle on!
        //     return selection += c;
        // }
        // console.log(c);
        setSelection((prev) => {
            
            if (c=="c" && !prev.includes(c)) {
                // colorless skal ikke kunne kombineres med noen
                return prev = "c"
            }
            if (prev.includes(c)) {
                // toggle off - fjerne farge
                return prev.replace(c,"");
            } else {
                // toggle on - legge til :D
                return prev.replace("c","") + c
            }
        });
    }

    return (
        <div className="color-panel">
            {icons.map((color) => (
                <button 
                    key={color.name} 
                    className={`color-button ${selection.includes(color.name) ? "selected" : ""}`} 
                    onClick={() => handleClick(color.name)}
                    style={{
                        opacity: selection.length>0 && !selection.includes(color.name) ? 0.5 : 1
                    }}
                >
                    <img src={color.img} alt={color.name} draggable="false"/>
                </button>
            ))}
        </div>
    )
}


export default ColorPanel;