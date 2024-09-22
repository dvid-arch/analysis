import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { testdata, ata } from './data/db.js'
import './App.css'
import GameBox from './components/gameBox';
import GameBoxAnalysis from './pages/GameBoxAnalysis.jsx';
import GameToWin from './pages/GameToWin.jsx';


function App() {

  const [gameBoxAnal, setGameBoxAnal] = useState(0)

  function handleExpand(i){
    
    setGameBoxAnal(i+1)
  }

  return (
    <div className='bg-black/90 py-10'>
      {
        !gameBoxAnal>0 ? (<div className=' p-6   grid justify-center w-fit mx-auto gap-8  sm:grid-cols-2 lg:grid-cols-3 '>
          {testdata.map((n, i) =>
            <div className='p-2 w-fit border border-white/20 bg-black/10' key={i}>
              <GameBox played={n} />
              <button onClick={(e)=>handleExpand(i)} className=' text-sm  capitalize border border-white/20 px-2 text-white/90 py-1 block ml-auto mt-2 bg-cyan-600/50'>expand</button>
            </div>)}

        </div>): (<GameBoxAnalysis played={testdata[gameBoxAnal-1]} gameBoxAnal={gameBoxAnal} setGameBoxAnal={setGameBoxAnal}/>)
      }
      {/* <GameToWin /> */}

    </div>
  )
}

export default App
