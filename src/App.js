import React,{Component} from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import EditScreen from './components/EditScreen';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class App extends Component{
  render(){
    return(
     <Router>
        <div>
        <Route exact path="/" component={LoginForm}/>
        <Route path="/RegisterForm" component={RegisterForm}/>
        <Route path="/Home" component={Home}/>
        <Route path="/EditScreen" component={EditScreen}/>
      </div>
     </Router>
    )
  }
}

export default App;
