import React, {useState} from 'react'
import {socket} from '../App'
import './Terminal.css'
export function Terminal(props) {
    const [chat, setChat] = useState('')
    return (
        <div className="user-chat-input">
            <textarea
                className="user-input"
                onChange={({target}) => setChat(target.value)}
            ></textarea>
            <button
                className="submit"
                onClick={() => {
                    socket.emit('message', chat)
                }}
            >
                submit
            </button>
        </div>
    )
}
