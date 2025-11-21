import { useState } from 'react';
import './Square.css';

type setterFunction = React.Dispatch<React.SetStateAction<number>>;

interface SquareProps {
    count: number;
    setCount: setterFunction;
}

export default function Square(props: SquareProps) {
    const [caracter, setCaracter] = useState('');
    
    let change: boolean = true; 

    function changeCaracter(count: number, setCount: setterFunction) {
        if (count % 2 === 0) {
            setCaracter('X');
        } else {
            setCaracter('O');
        }
        setCount(count + 1); 
        change = false; 
    }

    const btnStyle = caracter === 'X' ? 'X-marker' : 'O-marker';
    
    return (
        <div 
          className="btn-container" 
          onClick={() => changeCaracter(props.count, props.setCount)} 
        >
            <h1 className={btnStyle}>{caracter}</h1>
        </div>
    );
}