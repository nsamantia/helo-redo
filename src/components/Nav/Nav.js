import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { logoutUser, loginUser } from '../../ducks/reducer'

const Nav = (props) =>{


useEffect(() => {
    axios.get(`/api/auth/getUser`)
    .then(res =>{
        props.loginUser(res.data)
    })
}, [])


    
    return(
        <div>
            {props.user.username}
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/form'><button>New Post</button></Link>
            <Link to='/'><button onClick={props.logoutUser}>Logout</button></Link>

        </div>
    )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {logoutUser, loginUser})(Nav)