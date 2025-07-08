import { useState, useEffect } from "react"

export default function Timer(props) {
    const [timeState, setTimeState] = useState('stop')
    const [time, setTime] = useState(25*60)
    const [pomodoro, setPomodoro] = useState(25*60)
    const [config, setConfig] = useState(false)

    useEffect(() => {
        let interval = null

        if (timeState === 'play') {
            interval = setInterval(() => {
                setTime((prev) => {
                    if (prev <= 1) {
                    clearInterval(interval)
                    setTimeState('stop')
                    return 0
                    }
                    return prev - 1
                })
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [timeState])

    useEffect(() => {
        setTimeState('stop')
        setTime(pomodoro)
    }, [pomodoro])

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
    return (
        <>
            <h2>Timer</h2>
            <button className="backward button" onClick={() => {props.setPage('home'); setTimeState('stop'); setTime(pomodoro)}}>
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="config button" onClick={() =>setConfig(true)}>
                <i className="fa-solid fa-gear"></i>
            </button>
            {config && (
                <>
                    <div className="overlay" onClick={() => setConfig(false)}></div>
                    <div className="config-container">
                        <button className={`select-button ${pomodoro/60===10? "active": ""}`} onClick={() => setPomodoro(10*60)}>10 min</button>
                        <button className={`select-button ${pomodoro/60===25? "active": ""}`} onClick={() => setPomodoro(25*60)}>25 min</button>
                        <button className={`select-button ${pomodoro/60===30? "active": ""}`} onClick={() => setPomodoro(30*60)}>30 min</button>
                        <button className={`select-button ${pomodoro/60===45? "active": ""}`} onClick={() => setPomodoro(45*60)}>45 min</button>
                        <button className={`select-button ${pomodoro/60===55? "active": ""}`} onClick={() => setPomodoro(55*60)}>55 min</button>
                        <button className="select-button close" onClick={() => setConfig(false)}>Close</button>
                    </div>
                </>
            )}
            <div className="stopwatch-container">
                <div className="stopwatch">
                    <h3>{formatTime(time)}</h3>
                </div>
                <div class="controls">
                    {timeState === 'stop'|| timeState === 'pause'? <button className="control-button button" onClick={() => setTimeState('play')}>
                        <i className="fa-solid fa-play"></i>
                    </button>: null}
                    {timeState === 'play' && <button className="control-button button" onClick={() => setTimeState('pause')}>
                        <i className="fa-solid fa-pause"></i>
                    </button>}
                    {timeState === 'pause' || timeState === 'play'? <button className="control-button button" onClick={() => {setTimeState('stop'); setTime(pomodoro)}}>
                        <i className="fa-solid fa-stop"></i>
                    </button>: null}
                </div>
            </div>
        </>
    )
}