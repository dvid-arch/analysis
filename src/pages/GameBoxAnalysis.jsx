import GameBoxodd from "../components/GameBoxodd"


function GameBoxAnalysis({played, gameBoxAnal, setGameBoxAnal}) {
  return (
    <div className=" py-20  flex flex-col sm:flex-row min-h-screen md:justify-center md:items-start px-4 md:px-8">
        <div className="sm:flex-1 flex flex-col justify-center">
            <GameBoxodd played={played} seeInPrime={true} />
            <button onClick={()=>setGameBoxAnal(gameBoxAnal+1)} className="block mt-4 px-8 py-2 border w-fit bg-blue-600/50">Next</button>
            <button onClick={()=>setGameBoxAnal(gameBoxAnal-1)} className="block mt-4 px-8 py-2 border w-fit bg-blue-600/50">Previous</button>
        </div>
        <div className="flex-1">
            <h2 className="text-white/80 text-2xl font-bold mb-4">Game Analysis and Prediction</h2>
            <ul className="text-white/70 capitalize pl-4">
                <li className="font-semibold text-xl mb-2">confluence: <span className="text-bold text-white/90">14, 16</span></li>
                <li className="font-semibold text-xl">Primes: <span className="text-bold text-white/90">14, 16</span></li>
            </ul>
        </div>
    </div>
  )
}

export default GameBoxodd