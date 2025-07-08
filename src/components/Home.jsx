export default function Home(props) {
    return (
        <>
            <h1>My Timer</h1>
            <div className="options-container">
            <div className="option">
                <img src="./src/assets/stopwatch.png" alt="stopwatch icon" onClick={() => props.setPage('stopwatch')}/>
            </div>
            <div className="option">
                <img src="./src/assets/sandclock.png" alt="sandclock icon" onClick={() => props.setPage('timer')}/>
            </div>
            </div>
        </>
    )
}