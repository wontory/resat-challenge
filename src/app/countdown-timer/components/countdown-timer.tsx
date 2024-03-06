'use client'

import { useCallback, useEffect, useState } from 'react'

import { TimerInput } from './timer-input'
import { Button } from '@/components/button'

function CountdownTimer() {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(0)

  const decrementTime = useCallback(() => {
    setTime((prev) => prev - 1)
  }, [])

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(decrementTime, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [isRunning, decrementTime])

  useEffect(() => {
    if (time <= 0 || isNaN(time)) {
      setIsRunning(false)
      setTime(0)
    }
  }, [time])

  const handleToggle = () => {
    setIsRunning((prev) => !prev)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTime(0)
  }

  const handleTimeChange = (unit: string, value: number) => {
    const hours =
      unit === 'hours' ? value * 3600 : Math.floor(time / 3600) * 3600
    const minutes =
      unit === 'minutes' ? value * 60 : Math.floor((time % 3600) / 60) * 60
    const seconds = unit === 'seconds' ? value : time % 60

    setTime(hours + minutes + seconds)
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg border p-6 shadow-md">
      <div className="border p-6 text-xl">
        <TimerInput
          value={Math.floor(time / 3600)}
          disabled={isRunning}
          onChange={(e) => handleTimeChange('hours', parseInt(e.target.value))}
        />
        :
        <TimerInput
          value={Math.floor((time % 3600) / 60)}
          disabled={isRunning}
          onChange={(e) =>
            handleTimeChange('minutes', parseInt(e.target.value))
          }
        />
        :
        <TimerInput
          value={time % 60}
          disabled={isRunning}
          onChange={(e) =>
            handleTimeChange('seconds', parseInt(e.target.value))
          }
        />
      </div>
      <div className="flex gap-4">
        <Button
          onClick={handleToggle}
          disabled={time === 0}
          className={`w-full text-white ${
            isRunning
              ? 'bg-yellow-500 hover:bg-yellow-500/80'
              : 'bg-green-600 hover:bg-green-600/80'
          }`}
        >
          {isRunning ? 'STOP' : 'START'}
        </Button>
        <Button
          onClick={handleReset}
          className="w-full bg-red-600 text-white hover:bg-red-600/80"
        >
          RESET
        </Button>
      </div>
    </div>
  )
}

export { CountdownTimer }
