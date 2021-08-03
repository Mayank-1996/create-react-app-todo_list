import { render,screen} from '@testing-library/react'
import React from 'react'
import Todo from './todo'

describe("Todo Test",()=>{
    it("Check if end time is displayed correctly",()=>{
        render(<Todo task={{val:"hello",time:"2secs"}}/>)
        const totalTime = screen.queryByTestId("task-time") 
        // expect(totalTime.textContent).not.toBeNull()
        expect(totalTime.textContent).toBe("2secs")
    
        
    })

    it("Check if the value is populated correctly",()=>{

        render(<Todo task={{val:"hello",time:"2secs"}}/>)

        const value=screen.queryByTestId("task-value")
        
        expect(value.textContent).toBe("hello | ")

    })
})