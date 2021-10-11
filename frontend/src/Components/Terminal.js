import React, { useState } from 'react'
import { socket } from '../App'
import './Terminal.css'
export function Terminal(props) {
    const [chat, setChat] = useState('')
    return (
        <div class="user-chat-input">
            <textarea
                class="user-input"
                onChange={({ target }) => setChat(target.value)}
            ></textarea>
            <button
                class="submit"
                onClick={() => {
                    socket.emit('message', chat)
                }}
            >
                submit
            </button>
        </div>
    )
}
