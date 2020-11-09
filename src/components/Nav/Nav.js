import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { logoutUser } from '../../ducks/reducer'

const Nav = (props) =>{


    return(
        <div>
            {props.user.username}
            <Link to='/Dashbaord'><button>Home</button></Link>
            <Link to='/Form'><button>New Post</button></Link>
            <Link to='/'><button onClick={props.logoutUser}>Logout</button></Link>

        </div>
    )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {logoutUser})(Nav)