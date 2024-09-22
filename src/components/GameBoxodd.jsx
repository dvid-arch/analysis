

function GameBoxodd({ played, seeInPrime }) {
    const boxStyle = ' grid justify-center items-center w-8'
    const playedStyle = 'bg-[rgba(247, 250, 247, 0.121)]  text-gray-200/80 font-semibold'

 

    let pg = [
        1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35,37, 39, 41, 43, 45, 47, 49,2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24,26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48
    ];






    let cols = []
    let rows = []
    let diag1 = []
    let diag2 = []
    for (let i = 0; i < 7; i++) {
        let col = []
        let row = []
        for (let j = 0; j < 7; j++) {

            //fill diag1
            if (i == j) !played.includes(pg[7 * j + i]) && diag1.push(pg[7 * j + i])

            //fill diag2
            if (i == (6 - j)) !played.includes(pg[7 * j + i]) && diag2.push(pg[7 * j + i])

            !played.includes(pg[7 * j + i]) && col.push(pg[7 * j + i])
            !played.includes(pg[7 * i + j]) && row.push(pg[7 * i + j])
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
        <div className={`relative w-fit overflow-hidden grid grid-cols-7 grid-rows-7 gap-2 p-2 text-sm bg-green-950/50 text-white/50`}>
            {pg?.map((n, i) => (
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

export default GameBoxodd