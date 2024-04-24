import React, { useState, useEffect } from 'react';

const PomodoroTimer: React.FC = () => {
    const [sessionLength, setSessionLength] = useState<number>(25);
    const [breakLength, setBreakLength] = useState<number>(5);
    const [minutes, setMinutes] = useState<number>(25);
    const [seconds, setSeconds] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isBreak, setIsBreak] = useState<boolean>(false);
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const [offset, setOffset] = useState<number>(circumference);
    const [phase, setPhase] = useState<string>('Session');

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isRunning) {
            const totalTimeInSeconds = (isBreak ? breakLength : sessionLength) * 60;
            timer = setInterval(() => {
                const remainingTime = (minutes * 60 + seconds) - 1;
                const progress = 1 - remainingTime / totalTimeInSeconds;
                setOffset(circumference * progress);

                if (remainingTime <= 0) {
                    clearInterval(timer);
                    setIsRunning(false);
                    setIsBreak(!isBreak);
                    setPhase(isBreak ? 'Session' : 'Break');
                    setMinutes(isBreak ? sessionLength : breakLength);
                    setSeconds(0);
                    setOffset(circumference);
                    startTimer();
                } else {
                    const mins = Math.floor(remainingTime / 60);
                    const secs = remainingTime % 60;
                    setMinutes(mins);
                    setSeconds(secs);
                }
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isRunning, minutes, seconds, isBreak, sessionLength, breakLength, circumference]);

    useEffect(() => {
        if (isRunning) {
            startTimer();
        }
    }, [isBreak]);

    const startTimer = () => setIsRunning(true);
    const pauseTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setIsBreak(false);
        setPhase('Session');
        setMinutes(sessionLength);
        setSeconds(0);
        setOffset(circumference);
    };

    const handleSessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setSessionLength(value);
        if (!isRunning && !isBreak) setMinutes(value);
    };

    const handleBreakChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setBreakLength(value);
        if (!isRunning && isBreak) setMinutes(value);
    };

    const formatTime = (time: number) => (time < 10 ? `0${time}` : `${time}`);

    return (
        <div className="pomodoro-timer p-5 rounded-lg flex flex-col items-center w-1/3 bg-blue-light">
            <h2 className='text-lg uppercase text-back-light font-semibold underline'>
                Таймер
            </h2>
            <svg className="progress-ring" width="200" height="200">
                <circle className="ring-background stroke-dark-card" strokeWidth="4" fill="transparent" r={radius} cx="100" cy="100" />
                <circle className="ring-progress" stroke={isBreak ? '#B2FF66' : '#FF6666'} strokeWidth="4" fill="transparent" r={radius} cx="100" cy="100" style={{ strokeDasharray: circumference, strokeDashoffset: offset, transition: 'stroke-dashoffset 1s linear' }} />
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                    <tspan x="50%" dy="-0.5em" fill='#F2E9E4' className='font-bold'>{phase == 'Session' ? 'Сессия' : 'Перерыв'}</tspan>
                    <tspan x="50%" fill='#EADBD3' dy="1.2em">{formatTime(minutes)}:{formatTime(seconds)}</tspan>
                </text>
            </svg>
            <div className="controls mb-5 flex items-center gap-2">
                {!isRunning && <button className='bg-light-card text-blue-dark rounded-lg p-2' onClick={startTimer}>Старт</button>}
                {isRunning && <button className='bg-light-card text-blue-dark rounded-lg p-2' onClick={pauseTimer}>Пауза</button>}
                <button className='bg-dark-card text-blue-dark rounded-lg p-2' onClick={resetTimer}>Сброс</button>
            </div>
            <div className="settings border-2 rounded-lg p-3 border-dark-card text-center">
                <h2 className='uppercase text-back-light mb-2'>Настройки</h2>
                <div className='flex justify-between'>
                <div className='flex flex-col items-center'>
                <label className='text-light-card'>Сессия</label>
                    <input type="number" className='text-back-light p-1 w-1/2 bg-transparent rounded-lg text-left border-card-light border-1 focus:ring-0' value={sessionLength} onChange={handleSessionChange} />
                </div>
                <div className='flex flex-col items-center'>
                    <label className='text-light-card'>Перерыв</label>
                    <input type="number" className='text-back-light p-1 w-1/2 bg-transparent rounded-lg text-left border-card-light border-1' value={breakLength} onChange={handleBreakChange} />
                </div>
                </div>
            </div>
        </div>
    );
};

export default PomodoroTimer;
