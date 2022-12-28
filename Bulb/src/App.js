import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/" exact component={ProductList}></Route>
        <Route path="/Add" component={ProductAdd}></Route>
      </Switch>
        
      </Router>
    </div>)
}

export default App;
