import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Auth = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const register = () => {
        axios.post('/api/auth/register', {username, password})
        
    }

      
    return(
        <div>
           <input type="text" name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
           <input type="text" name="password" placeholder="pasword" onChange={(e) => setPassword(e.target.value)}/>
        
           <button onClick={() => register()}>Register</button>
        
        </div>

        
    )
}

export default Auth