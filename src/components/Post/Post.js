import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

const Post = (props) => {

    const [info, setInfo] = useState({})
  

    useEffect(() => {
        axios.get(`/api/post/${props.match.params.postid}`).then(res => setInfo(res.data))
    }, [])

    const deletePost = () => {
        axios.delete(`/api/post/delete/${props.match.params.postid}`)
        .then(res => {
            props.history.push('/dashboard')
        })
    }
 
   

    return(
        <div>
           <p>{info.title}</p>
            <p><img src={info.img}/></p>
            <p>{info.content}</p>

            {( info.author_id === props.user.id) ? (<div><button onClick={()=>deletePost()}>Delete</button></div>) : (null)
            


        }

            
            
        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default (connect)(mapStateToProps, withRouter)(Post)