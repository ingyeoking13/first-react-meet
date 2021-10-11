import './App.css'
import { Header } from './Components/Header'
import { Menu } from './Components/Menu'
import { Article } from './Components/Article'
import { Terminal } from './Components/Terminal'
import { useState } from 'react'

import io from 'socket.io-client'

function App() {
    const [childprops, setProps] = useState({})
    const socket = io('https://127.0.0.1:4000', {
        extraHeaders: {
            'my-custom-header': 'abcd',
        },
    })
    socket.connect((r) => {
        console.log(r)
    })

    return (
        <div className="App">
            {Header()}
            {Menu()}
            <div class="float-right">
                {Article(childprops)}
                {Terminal({
                    OnSubmit: (value) => setProps({ chat: value }),
                })}
            </div>
        </div>
    )
}

export default App
