import './App.css'
import {Header} from './Components/Header'
import {Menu} from './Components/Menu'
import {Article} from './Components/Article'
import {Terminal} from './Components/Terminal'
import io from 'socket.io-client'

let host = ''
if (process.env.NODE_ENV == 'production') host = 'http://101.101.218.26:3002'
else host = process.env.REACT_APP_WEBHOST

const socket = io(host)
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
