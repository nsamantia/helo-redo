import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { loginUser } from '../../ducks/reducer'

const Nav = () =>{


    return(
        <div>
            
            <Link to='/Dashbaord'><button>Home</button></Link>
            <Link to='/Form'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>

        </div>
    )
}


export default connect(null, {loginUser})(Nav)