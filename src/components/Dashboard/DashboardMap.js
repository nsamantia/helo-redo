import React from 'react'
import {Link} from 'react-router-dom'


const DashboardMap = (props) => {

    return(
        <div>
           
            <Link to={{pathname: `/Post/${props.id}`}}>
                <button><p>{props.title}</p>
                <p>{props.username}</p></button>
            </Link>
            

        </div>
    )
}

export default DashboardMap