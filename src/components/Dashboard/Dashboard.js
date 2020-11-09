import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './Dashboard.css'

const Dashboard = () => {

const [posts, setPosts] = useState([])
const [search, setSearch] = useState('')

    return(
        <div className="dashboard-container">
            <input type="text" name="search"/>
            <div className="button-container">
                <button>Search</button>
                <button>Reset</button>
            </div>
        </div>
    )
}

export default Dashboard