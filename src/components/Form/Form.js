import React, {useState} from 'react'
import {connect} from 'react-redux'

const Form = () =>{

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [content, setContent] = useState('')


    return(
        <div>
            
            <input type='text' name ='title' placeholder='title' onChange={(e)=> setTitle(e.target.value)}/>
            <input type='text' name ='image' placeholder='image'onChange={(e)=> setImage(e.target.value)}/>
            <input type='text' name ='content' placeholder='content' onChange={(e)=>setContent(e.target.value)}/>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Form)