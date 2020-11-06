import './App.css';
import Auth from './components/Auth/Auth'
import routes from '.src/routes'


function App() {
  return (
    <div className="App">
      <Auth />
      
      {routes}
      
    </div>
  );
}

export default App;
