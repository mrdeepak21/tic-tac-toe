import { useState } from 'react';
import Blocks from './components/Blocks';

function App() {

  const [value, setValue] = useState(Array(9).fill(null));
  const [currTurn, setTurn] = useState('X');
  const [result, setResult] = useState('');

  const checkWinner = () => {
    const _winPos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    
    for (let i = 0; i < _winPos.length; i++) {
      const [a,b,c] = _winPos[i];
      if(value[a] && value[a]===value[b] && value[b]===value[c])
      return true;
    }
    return false;
  }

  const handleClick = (pos) => {
    if(value[pos]!==null || checkWinner()) return;
    let temp = value;
    temp[pos] = currTurn;
    setValue(temp);
    setResult(checkWinner()? `${currTurn} won!`:'');
    console.log(checkWinner());
    setTurn(currTurn==='X'?'O':'X');
  }

  const resetGame = ()=>{
    setValue(Array(9).fill(null));
    setTurn('X');
    setResult('');
  }

  return (
    <div className="dark:bg-slate-800 dark:text-white  h-dvh p-1">
      <p className='text-5xl mb-5 font-thin text-center'>{result ===''? `${currTurn}'s turn.`:`${result}`}</p>
    <div className="flex flex-col items-center justify-center">
      <div className="flex">
        <Blocks onClick={() => { handleClick(0) }} value={value[0]} />
        <Blocks onClick={() => { handleClick(1) }} value={value[1]} />
        <Blocks onClick={() => { handleClick(2) }} value={value[2]} />
      </div>
      <div className="flex">
        <Blocks onClick={() => { handleClick(3) }} value={value[3]} />
        <Blocks onClick={() => { handleClick(4) }} value={value[4]} />
        <Blocks onClick={() => { handleClick(5) }} value={value[5]} />
      </div>
      <div className="flex">
        <Blocks onClick={() => { handleClick(6) }} value={value[6]} />
        <Blocks onClick={() => { handleClick(7) }} value={value[7]} />
        <Blocks onClick={() => { handleClick(8) }} value={value[8]} />
      </div>
    </div>
    <div className="text-center py-4">
      <button className='font-bold border-green-500 border-2 rounded-full px-20 py-2' onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}

export default App;
