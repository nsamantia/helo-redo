import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const Post = (props) => {

    const [info, setInfo] = useState({})
  

    useEffect(() => {
        axios.get(`/api/post/${props.match.params.postid}`).then(res => setInfo(res.data))
    }, [])

   
    return(
        <div>
           <p>{info.title}</p>
            <p>{info.img}</p>
            <p>{info.content}</p>
            
        </div>
    )
}



export default withRouter(Post)