import './App.css'
import {Header} from './Components/Header'
import {Menu} from './Components/Menu'
import {Article} from './Components/Article'
import {Terminal} from './Components/Terminal'
import {useEffect, useState} from 'react'
import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_WEBHOST)
socket.connect()

function App() {
    return (
        <div className="App">
            <Header />
            <Menu />
            <div className="float-right">
                <Article />
                <Terminal />
            </div>
        </div>
    )
}

export default App
export {socket}
