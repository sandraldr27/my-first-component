import React, {useState} from 'react'
import '../styles/Button.css'

function Counter(props) {

    const [number, setNumber] = useState(0);
    //number es el valor de mi estado
    //SetNumber es lo que hace que cambie mi estado
    // useState es el valor inicial
  const counter = () => {
    setNumber(number + 1);
  }
  
    return (
    <div>
      <button className={`basic-btn ${props.clase}`}onClick={counter}>{props.text} {number}</button>
    </div>
  )
}

export default Counter;

Counter.defaultProps = {
    text: '❤️',
}





