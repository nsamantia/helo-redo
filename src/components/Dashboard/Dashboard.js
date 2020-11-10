import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import './Dashboard.css'
import DashboardMap from './DashboardMap'


const Dashboard = (props) => {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [userPosts, setUserPosts] = useState(false)

    useEffect(() => {
        axios.get(`/api/posts/${props.user.id}?search=${search}&userPosts=${userPosts}`)
        .then(res => setPosts(res.data))
    }, [])




    return(
        <div className="dashboard-container">
            <input type="text" name="search"/>
            <input type="checkbox" id="myPosts"/>
            <label>My Posts</label>
            <div className="button-container">
                <button>Search</button>
                <button>Reset</button>
            </div>

            {posts.map(e => {
                return(
                    < DashboardMap
                        post={e}
                        key={e.id}
                        title={e.title}
                        username={e.username}
                        
                        
                    />
                )
            })}
        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Dashboard)