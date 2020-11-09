import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { loginUser } from '../../ducks/reducer'
import { connect } from 'react-redux'

const Auth = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const register = () => {
        axios.post('/api/auth/register', {username, password})
        
    }

    const login = () => {
        axios.post('/api/auth/login', {username, password})
        
        .then( res => {
            props.loginUser(res.data)
            props.history.push('/dashboard')
        }).catch(err => alert(err.messgae));
        
        
    }

      
    return(
        <div>
           <input type="text" name="username" placeholder="username" onChange={e => setUsername(e.target.value)}/>
           <input type="text" name="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
        
            <button onClick={() => login()}>Login</button>
           <button onClick={() => register()}>Register</button>
        
        </div>

        
    )
}

export default connect(null, {loginUser})(Auth)