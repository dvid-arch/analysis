import { useEffect } from "react";
import { useState } from "react";

function GameToWin() {
    let games = Array.from({ length: 49 }, (_, i) => i + 1)
    let [youWin, setYouWin] = useState(false);
    let [played, setPlayed] = useState(false);
    let [tiledPicked, setTilePicked] = useState([]);

    function handleElClick(e, i) {

        function swapColor() {
            e.target.classList.toggle('bg-yellow-300')
            e.target.classList.toggle('bg-black')
        }

        if (e.target.classList.value.includes('bg-yellow-300')) {
            setTilePicked([...tiledPicked, i + 1])
            swapColor()
        } else {
            setTilePicked(tiledPicked.filter(n => n !== i + 1))
            swapColor()
        }
    }

    useEffect(() => {

        if (youWin) {
            alert('you win')
        }

    }, [youWin])



    function handlePlayed() {
        let arr = [1, 2, 3]
        let won = checkIfWon(arr);

        setYouWin(won);
    }

    function checkIfWon(arr) {
        return tiledPicked.filter((n) => !arr.includes(n)).length == 0
    }


    return (
        <div className="min-h-screen text-white px-8 py-10">
            <h1 className="mb-2">what do you think</h1>
            <div className="h-full ">

                <div className="grid grid-cols-7 grid-rows-7 w-fit mb-4">
                    {games.map((n, i) => (
                        <div key={i} className="h-10 w-10 border bg-yellow-300" onClick={(e) => handleElClick(e, i)}>

                        </div>
                    ))}

                </div>
                {tiledPicked.length ? <button onClick={handlePlayed} className="py-2 px-8 bg-blue-600 block mb-2">play</button> : <button disabled onClick={handlePlayed} className="py-2 px-8 bg-blue-100 block mb-2">play</button>}
                <div className="">

                    <h2>how to play?</h2>
                    <p>eg: choose one correct to win X2 stake</p>
                    <p>choose 2 correct squares win 5X amount</p>
                    <p>choose 3 correct squares get X15</p>
                    <p>choose a row or col to be empty and win X100</p>
                    <p>combine to get a multiple of their points and added bonus</p>

                </div>
            </div>
        </div>
    )
}

export default GameToWin