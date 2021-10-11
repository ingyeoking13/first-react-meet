import React, { useState } from 'react'
import './Terminal.css'
export function Terminal(props) {
    const [chat, setChat] = useState('')
    return (
        <div class="user-chat-input">
            <textarea
                class="user-input"
                onChange={({ target }) => setChat(target.value)}
            ></textarea>
            <button class="submit" onClick={() => props.OnSubmit(chat)}>
                submit
            </button>
        </div>
    )
}
