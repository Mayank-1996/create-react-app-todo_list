import React from 'react'
import Timer from './timer'
// import { renderHook } from '@testing-library/react-hooks';
import {fireEvent, render,cleanup,screen} from '@testing-library/react'
import AppContext from '../../AppContext'

// Mocking context function
var timerStatus=false
var setTimerStatus=(x)=>{
  timerStatus=x
}

// Fake timers using Jest
beforeEach(() => {
    jest.useFakeTimers()
  })

// Running all pending timers and switching to real timers using Jest
afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
    cleanup()
  })

describe("Timer tests",()=>{
    it("when timer Status is false",()=>{
    render(<AppContext.Provider value={{'timerStatus':false}}><Timer task={{val:"abc",active:true}}/></AppContext.Provider>)   
    const button=screen.queryByTestId("startButton")
    expect(button.value).toBe("start")
    })

    it("when start button is clicked timer is updated correctly",()=>{
      render(<AppContext.Provider value={{timerStatus:timerStatus,setTimerStatus:setTimerStatus}}><Timer task={{val:"abc",active:true}}/></AppContext.Provider>)   
      const button=screen.queryByTestId("startButton")
      // console.log(container.stat)
      fireEvent.click(button)
      jest.advanceTimersByTime(2000)
      const val=screen.queryByTestId('time-val')
      expect(val.textContent).toBe('0m:2s')

    })
})