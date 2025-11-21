import { useState } from 'react';
import './Square.css';

type setterFunction = React.Dispatch<React.SetStateAction<number>>;

interface SquareProps {
    count: number;
    setCount: setterFunction;
}

export default function Square(props: SquareProps) {
    const [caracter, setCaracter] = useState<string>('');
    const [change, setChange] = useState<boolean>(true);

    function changeCaracter(count: number, setCount: setterFunction) {
        if (count % 2 === 0) {
            if(change){
                setCaracter('X');
                setCount(count + 1); 
            }   
        } else {
            if(change){
               setCaracter('O'); 
               setCount(count + 1); 
            }  
        }
        setChange(false)
    }

    const btnStyle = caracter === 'X' ? 'X-marker' : 'O-marker';
    
    return (
        <div className="btn-container" onClick={() => changeCaracter(props.count, props.setCount)}>
            <h1 className={btnStyle}>{caracter}</h1>
        </div>
    );
}