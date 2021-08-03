import {fireEvent, render,screen} from '@testing-library/react'
import React from 'react'
import Homepage from './homepage'
import AppContext from "../../AppContext";



describe("Homepage test",()=>{

    it("check if initial state values are set",()=>{
        render(<Homepage/>)
        const input = screen.queryByTestId("inputField")
        // console.log(input.textContent,"hi")
        expect(input.textContent).toBe("")
        

    })

    it("Check if todo is populated correctly",()=>{
        render(<AppContext.Provider value={{'timerStatus':false}}><Homepage/></AppContext.Provider>)
        const input = screen.queryByTestId("inputField")
        const button = screen.queryByTestId('add-todo-button')
        fireEvent.change(input,{target:{value:"hello"}})
        fireEvent.click(button)
    
        expect(JSON.parse(localStorage.getItem("todos"))[0]['val']).toEqual("hello")


        
    })

})
