import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Student from './pages/Student';
import Company from './pages/Company';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Login from './login';
import { Button } from 'react-bootstrap';
import Nav from './Nav';
import SignUp from './signup';
import ViewJobs from './viewJobs';
import JobPost from './jobPost';
import StudentDetail from './student-detail';
import ViewCompany from './viewCompany';
import MypostJob from './myPostJob';
import ViewAllStudents from './viewAllStudent';
import{
BrowserRouter as Router,
Route,
Link
}from 'react-router-dom';
class App extends Component {
constructor(){
super();
this.state={
  speed:10,
};
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
            <h2 id="titlename">Campus Recruitment System</h2>
            <img id="headerImage" src="title.jpg" alt="logo"/>
            
        </div>
        
         <Router>
           <div>
              <Route exact path="/" component={Home}/>
              <Route  path="/Student" component={Student}/>
              <Route  path="/Company" component={Company}/>
              <Route path="/Admin" component={Admin}/>
              <Route path="/Login" component={Login}/>
              <Route path="/SignUp" component={SignUp}/>
              {/*<Route path="/StudentDetail" component={StudentDetail}/>*/}
              {/*<Route path="/ViewJobs" component={ViewJobs}/>*/}
              {/*<Route path="/JobPost" component={JobPost}/>*/}
              {/*<Route path='/ViewCompany' component={ViewCompany}/>*/}
              {/*<Route path='/MypostJob' component={MypostJob}/>*/}
              {/*<Route path='/ViewAllStudents' component={ViewAllStudents}/>*/}
              
{/*
              <Link to="/">Home</Link><br></br> <br></br><br></br>  
              <Link to="/Student"> <Button bsStyle="primary" bsSize="large">Student Login</Button></Link><br></br><br></br>
              <Link to="/Company"><Button bsStyle="primary" bsSize="large"> Company Login</Button></Link><br></br><br></br>
              <Link to="/Admin"><Button bsStyle="primary" bsSize="large"> Admin Login</Button></Link>
                */}
              <footer>
                   <p>Posted by: Mirza Umer</p>
                   <p>Contact information: <a href="mailto:mirzaumersaleem@outlook.com">
                    mirzaumersaleem@outlook.com.</a></p>
              </footer>
          </div>
         </Router>
        <div className="loginPanel">
       {/*<SignUp/>*/}
       {/*<h1>{this.state.speed}</h1>*/}
        </div>      
      </div>
    );
  }
}
export default App;
