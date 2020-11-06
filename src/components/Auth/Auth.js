import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Auth = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    


    return(
        <div>
           <input type="text" name="username" placeholder="username"/>
           <input type="text" name="password" placeholder="pasword"/>
        </div>
    )
}

export default Auth