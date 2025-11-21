import { useState } from 'react';
import './components/Square.tsx';
import './App.css';
import Square from './components/Square.tsx';



export default function Board() {
  let [count, setCount] = useState(0);
  
  return (
    <div className='board-container'>
      <Square count = {count} setCount = {setCount}/> 
      <Square count = {count} setCount = {setCount}/> 
      <Square count = {count} setCount = {setCount}/> 
      <Square count = {count} setCount = {setCount}/> 
      <Square count = {count} setCount = {setCount}/> 
      <Square count = {count} setCount = {setCount}/> 
      <Square count = {count} setCount = {setCount}/> 
      <Square count = {count} setCount = {setCount}/> 
      <Square count = {count} setCount = {setCount}/> 
    </div>
  );
}