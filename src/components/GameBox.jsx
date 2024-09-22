import React, { useState } from 'react'

function GameBox({ played, isGameAnal }) {
    const boxStyle = ' grid justify-center items-center w-8'
    const playedStyle = 'bg-[rgba(247, 250, 247, 0.121)]  text-gray-200/80 font-semibold'

    const [gamesIndex, setGameIndex] = useState(0)
    let gameArr = [
        [...Array.from({length:49}, (_,i)=>i+1)],
        [
            40,10,20,25,30,45,1,
            2,11,12,21,26,34,37,
            13,43,3,31,4,14,22,
            27, 39, 41,  5, 15, 35,  6, 
            16, 23, 28, 32, 44, 47, 48,  
            7, 17,  8, 18, 24, 29, 36, 
            42, 46,49,9,38,19,33
        ],
        [
            10, 20, 25, 30, 40, 45,  1, 11,  2, 12, 21,
            26, 34, 37, 43,  3, 13, 31,  4, 14, 22, 27,
            39, 41,  5, 15, 35,  6, 16, 23, 28, 32, 44,
            47, 48,  7, 17,  8, 18, 24, 29, 36, 38, 42,
            46, 49,  9, 19, 33
          ],
        [
            1, 10, 19, 28, 37, 46,  2, 11, 20, 29, 38,
           47,  3, 12, 21, 30, 39, 48,  4, 13, 22, 31,
           40, 49,  5, 14, 23, 32, 41,  6, 15, 24, 33,
           42,  7, 16, 25, 34, 43,  8, 17, 26, 35, 44,
            9, 18, 27, 36, 45
         ],
        [
        1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49,
        2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48
    ], [
        3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48,
        1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49,
        2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47
    ],
    [
        7, 14, 21, 28, 35, 42, 49, // Numbers where number % 7 === 0
        1, 8, 15, 22, 29, 36, 43,  // Numbers where number % 7 === 1
        2, 9, 16, 23, 30, 37, 44,  // Numbers where number % 7 === 2
        3, 10, 17, 24, 31, 38, 45, // Numbers where number % 7 === 3
        4, 11, 18, 25, 32, 39, 46, // Numbers where number % 7 === 4
        5, 12, 19, 26, 33, 40, 47, // Numbers where number % 7 === 5
        6, 13, 20, 27, 34, 41, 48  // Numbers where number % 7 === 6
    ],

    [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, // Prime numbers
        1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49 // Non-prime numbers
    ],

    [
        1, 4, 9, 16, 25, 36, 49, // Square numbers
        2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48 // Non-square numbers
    ],


    [
        1, 2, 3, 5, 8, 13, 21, 34, // Fibonacci numbers within 1-49
        4, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49 // Non-Fibonacci numbers
    ],

    [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 11, 22, 33, 44, 49, 21, 31, 32
    ],

    [
        5, 10, 15, 20, 25, 30, 35, 40, 45, // Multiples of 5
        1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24, 26, 27, 28, 29, 31, 32, 33, 34, 36, 37, 38, 39, 41, 42, 43, 44, 46, 47, 48, 49 // Non-multiples of 5
    ],

    [
        3, 13, 23, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 43, // Numbers containing the digit '3'
        1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 40, 41, 42, 44, 45, 46, 47, 48, 49 // Numbers not containing the digit '3'
    ],

    [
        1, 2, 3, 4, 5, 6, 7, 8, 9, // Sum of digits = 1-9
        10, 11, 20, 12, 21, 30, 13, 22, 31, 40, 14, 23, 32, 41, 15, 24, 33, 42, 16, 25, 34, 43, 17, 26, 35, 44, 18, 27, 36, 45, 19, 28, 37, 46, 29, 38, 47, 39, 48, 49, // Higher sums of digits
    ],

    [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, // Palindrome numbers
        10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49 // Non-palindrome numbers
    ],

    [
        7, 14, 21, 28, 35, 42, 49, // Multiples of 7
        1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48 // Non-multiples of 7
    ],

    [
        5, 15, 25, 35, 45, // Numbers ending in 5
        1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49 // Other numbers
    ],

    [
        4, 8, 13, 17, 22, 26, 31, 35, 40, 44, // Numbers whose digit sum is divisible by 4
        1, 2, 3, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 41, 42, 43, 45, 46, 47, 48, 49 // Other numbers
    ],

    [
        1, 3, 6, 10, 15, 21, 28, 36, 45, // Triangular numbers
        2, 4, 5, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49 // Non-triangular numbers
    ],

    [
        6, // Perfect number
        1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49 // Non-perfect numbers
    ],

    [
        6, 8, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, // Numbers with an even number of factors
        1, 2, 3, 4, 5, 7, 9, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 // Numbers with an odd number of factors
    ],

    [
        1, 2, 4, 8, 16, 32, // Powers of 2
        3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49 // Other numbers
    ],
    [
        1, 2, 4, 5, 8, 9, 10, 13, 16, 17, 18, 20, 25, 26, 29, 32, 34, 36, 37, 40, 41, 45, 49, // Numbers as the sum of two squares
        3, 6, 7, 11, 12, 14, 15, 19, 21, 22, 23, 24, 27, 28, 30, 31, 33, 35, 38, 39, 42, 43, 44, 46, 47, 48
    ],]


    let cols = []
    let rows = []
    let diag1 = []
    let diag2 = []
    for (let i = 0; i < 7; i++) {
        let col = []
        let row = []
        for (let j = 0; j < 7; j++) {

            //fill diag1
            if (i == j) !played.includes(gameArr[gamesIndex][7 * j + i]) && diag1.push(gameArr[gamesIndex][7 * j + i])

            //fill diag2
            if (i == (6 - j)) !played.includes(gameArr[gamesIndex][7 * j + i]) && diag2.push(gameArr[gamesIndex][7 * j + i])

            !played.includes(gameArr[gamesIndex][7 * j + i]) && col.push(gameArr[gamesIndex][7 * j + i])
            !played.includes(gameArr[gamesIndex][7 * i + j]) && row.push(gameArr[gamesIndex][7 * i + j])
        }
        cols.push(col)
        rows.push(row)
    }



    const forIncolandRow = [...rows.filter(n => n.length == 7).reduce((p, n) => [...p, ...n], []), ...cols.filter(n => n.length == 7).reduce((p, n) => [...p, ...n], [])]

    const libChecker = []
    const inColAndRow = []


    forIncolandRow.forEach(n => {
        if (libChecker.includes(n)) {
            inColAndRow.push(n)
        }
        libChecker.push(n)
    })



    return (
        <div className={`relative w-fit h-fit overflow-hidden grid grid-cols-7 grid-rows-7 gap-2 p-2 text-sm bg-green-950/50 text-white/50`}>
            <div className='absolute h-10 w-10 z-20 top-0 left-0'>
                <button onClick={()=>setGameIndex(gamesIndex+1)} className='block text-xl bg-white text-black px-3 '>next</button>
            </div>
            {gameArr[gamesIndex]?.map((n, i) => (
                played.includes(n) ? <div key={i} className={`${boxStyle} ${playedStyle} relative z-50 bg-black/30  border border-white/70  aspect-square`} >{n}</div> : <div key={i} className={`${boxStyle} ${inColAndRow.includes(n) && 'bg-black/60 text-white/50'} relative z-20  border border-white/20  aspect-square`}>{n}</div>
            ))}
            <div className='absolute h-full w-full bg-transparent top-0 left-0 grid grid-cols-7 gap-2 px-2 py-2'>
                {cols.map((n, i) => n.length == 7 ? <div key={i} className={'border border-yellow-100 bg-yellow-100/30 h-full w-8 scale-x-110 scale-y-[1.015]'}></div> : <div key={i} ></div>)}
            </div>
            <div className='absolute h-full w-full bg-transparent top-0 left-0 grid grid-rows-7 gap-2 px-2 py-2'>
                {rows.map((n, i) => n.length == 7 ? <div key={i} className='border bg-pink-100/20 border-pink-100 h-8 w-full scale-y-110 scale-x-[1.015]'></div> : <div key={i} ></div>)}
            </div>
            {diag1.length == 7 && <div className="diag1 absolute h-full w-12 border -rotate-[45deg] translate-x-[120px] border-purple-400/20 bg-purple-50/10 z-0 scale-y-150"></div>}
            {diag2.length == 7 && <div className="diag2 absolute h-full w-12 border rotate-45 translate-x-[120px] border-purple-400/20 bg-purple-50/10 z-0 scale-y-150"></div>}
        </div>

    )
}

export default GameBox