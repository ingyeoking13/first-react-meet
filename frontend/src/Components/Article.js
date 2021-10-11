import { useState, useEffect } from 'react'
import { socket } from '../App'
import './Article.css'

export function Article(props) {
    let [message, setMessage] = useState('')
    function update(value) {
        setMessage(message + '\n' + value)
    }
    useEffect(() => {
        socket.on('message', update)
        // return function cleanup() {
        //     socket.off('message', update)
        // }
    })

    return (
        <article class="main-area">
            <textarea
                class="text-area"
                readOnly={true}
                value={message}
            ></textarea>
        </article>
    )
}
