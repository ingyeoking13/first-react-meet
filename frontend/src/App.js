import './App.css'
import {Header} from './Components/Header'
import {Menu} from './Components/Menu'
import {Article} from './Components/Article'
import {Terminal} from './Components/Terminal'
import {useState} from 'react'

import io from 'socket.io-client'
let host = ''

console.log(process.env.REACT_APP_NODE_ENV)
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') host = 'http://127.0.0.1:3002'
else host = 'http://101.101.218.26:3002/'

const socket = io(host)

function App() {
    const [childprops, setProps] = useState({})
    socket.connect()

    return (
        <div className="App">
            {Header()}
            {Menu()}
            <div className="float-right">
                {Article(childprops)}
                {Terminal({
                    OnSubmit: (value) => setProps({chat: value}),
                })}
            </div>
        </div>
    )
}

export default App
export {socket}
