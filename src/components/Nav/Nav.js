import {Link} from 'react-router-dom'

const Nav = () =>{


    return(
        <div>
            
            <Link to='/Dashbaord'><button>Home</button></Link>
            <Link to='/Form'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>

        </div>
    )
}

export default Nav