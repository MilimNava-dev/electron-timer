import { useState, useEffect } from "react"

export default function Stopwatch(props) {
    const [timeState, setTimeState] = useState('stop')
    const [time, setTime] = useState(0)

    useEffect(() => {
        let interval = null

        if (timeState === 'play') {
        interval = setInterval(() => {
            setTime((prev) => prev + 1)
        }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [timeState])

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600)
        const minutes = Math.floor((time / 60) % 60)
        const seconds = time % 60
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
    return (
        <>
            <h2>Stopwatch</h2>
            <button className="backward button" onClick={() => {props.setPage('home'); setTimeState('stop'); setTime(0)}}>
                <i className="fa-solid fa-angle-left"></i>
            </button>
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
                    {timeState === 'pause' || timeState === 'play'? <button className="control-button button" onClick={() => {setTimeState('stop'); setTime(0)}}>
                        <i className="fa-solid fa-stop"></i>
                    </button>: null}
                </div>
            </div>
        </>
    )
}