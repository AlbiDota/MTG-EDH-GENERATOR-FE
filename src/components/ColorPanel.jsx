import W from '../assets/big/W.svg'
import U from '../assets/big/U.svg'
import B from '../assets/big/B.svg'
import R from '../assets/big/R.svg'
import G from '../assets/big/G.svg'
import C from '../assets/big/C.svg'

function ColorPanel() {

    const icons = [
       { name: "W", img: W },
       { name: "U", img: U },
       { name: "B", img: B },
       { name: "R", img: R },
       { name: "G", img: G },
       { name: "C", img: C },
        
    ];

    const handleClick = (e) => {
        console.log(e)
    }

    return (
        <div className="color-panel">
            {icons.map((color) => (
                <button key={color.name} className="color-button" onClick={() => handleClick(color.name)}>
                    <img src={color.img} alt={color.name} width="50" height="50" style={{ display: 'block' }}/>
                </button>
            ))}
        </div>
    )
}

export default ColorPanel;