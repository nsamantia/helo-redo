import './App.css';
import { withRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import routes from './routes';

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/' ? null : <Nav />}

      {routes}
    </div>
  );
}

export default withRouter(App);
