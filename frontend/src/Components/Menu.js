import { useEffect, useState } from 'react'
import { socket } from '../App'
import './Menu.css'

export function Menu() {
    const [userList, setUserList] = useState()
    useEffect(() => {
        socket.on('userUpdate', (data) => {
            setUserList(data)
        })
    })
    return (
        <div class="drawer-menu">
            <ul>
                {userList?.map((user) => (
                    <li>{user}</li>
                ))}
            </ul>
        </div>
    )
}
