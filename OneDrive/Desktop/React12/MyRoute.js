import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import First from './my-app/src/First'

const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<First/>} />
                <Route path='/secondpage' element={<Second/>}/>
                <Route path='/thirdpage' element={<Third/>}/>
                <Route path='/hellopage' element={<Hello/>}/>
            </Routes>
        </Router>
    )
}

export default MyRoute
