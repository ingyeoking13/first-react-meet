import { useState } from 'react'
import './Article.css'

export function Article(props) {
    let message = `\n${props.chat}`

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
