'use client'

import { useState } from 'react'
import {
  add,
  differenceInDays,
  endOfMonth,
  setDate,
  startOfMonth,
  sub,
} from 'date-fns'

import { cn } from '@/utils/cn'
import { Button } from '@/components/button'
import { Textarea } from '@/components/textarea'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

const datecmp = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()

const memoDatecmp = (a: Date, b: Date, index: number) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === index

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [memos, setMemos] = useState<{ date: Date; memo: string }[]>([])

  const start = startOfMonth(selectedDate)
  const end = endOfMonth(selectedDate)

  const handlePrevMonth = () => {
    setSelectedDate((prev) => sub(prev, { months: 1 }))
  }

  const handleNextMonth = () => {
    setSelectedDate((prev) => add(prev, { months: 1 }))
  }

  const handleDateClick = (day: number) => {
    setSelectedDate((prev) => setDate(prev, day))
  }

  const handleMemoSave = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemos((prev) => {
      const index = prev.findIndex((memo) => datecmp(memo.date, selectedDate))

      return index === -1
        ? [...prev, { date: selectedDate, memo: e.target.value }]
        : [
            ...prev.slice(0, index),
            { date: selectedDate, memo: e.target.value },
            ...prev.slice(index + 1),
          ]
    })
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg border p-6 shadow-md">
      <div className="flex items-center justify-center gap-4">
        <Button className="shadow-none" onClick={handlePrevMonth}>
          ◀
        </Button>
        <h2 className="text-center text-xl font-semibold">
          {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월
        </h2>
        <Button className="shadow-none" onClick={handleNextMonth}>
          ▶
        </Button>
      </div>

      <div className="text-ceter grid grid-cols-7 [&>*:nth-child(7n)]:text-blue-600 [&>*:nth-child(7n+1)]:text-red-600">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="mb-2 flex h-10 w-10 items-center justify-center border-b border-black/60 font-semibold"
          >
            {day}
          </div>
        ))}

        {Array.from({ length: start.getDay() }).map((_, index) => (
          <div key={`pre-${index}`} className="h-10 w-10"></div>
        ))}

        {Array.from({ length: differenceInDays(end, start) + 1 }).map(
          (_, index) => (
            <button
              key={`day-${index}`}
              onClick={() => handleDateClick(index + 1)}
              className={cn(
                'relative flex h-10 w-10 items-center justify-center text-center text-sm',
                selectedDate.getDate() === index + 1 &&
                  'rounded-full bg-black/20',
              )}
            >
              {index + 1}
              {memos.find((memo) =>
                memoDatecmp(memo.date, selectedDate, index + 1),
              )?.memo && (
                <div className="absolute top-[-4px] text-green-600">•</div>
              )}
            </button>
          ),
        )}

        {Array.from({ length: 6 - end.getDay() }).map((_, index) => (
          <div key={`post-${index}`} className="h-10 w-10"></div>
        ))}
      </div>

      <hr />

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">메모</h2>
        <Textarea
          value={
            memos.find((memo) => datecmp(memo.date, selectedDate))?.memo || ''
          }
          onChange={handleMemoSave}
          className="h-28 w-full"
        />
      </div>
    </div>
  )
}

export { Calendar }
