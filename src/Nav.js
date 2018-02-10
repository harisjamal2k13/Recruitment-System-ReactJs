import React from "react";
import * as firebase from 'firebase';
import{
BrowserRouter as Router,
Route,
Link
}from 'react-router-dom';
import './Nav.css';
import { Button } from 'react-bootstrap';
import SignUp from './signup';
export default class Nav extends React.Component{
getSignUp(props){
 this.props.history.push('/SignUp');

}
 render(){
   return(
    <div className="nav_header">
       <Button bsStyle="primary">Sign in</Button>
       <Button bsStyle="primary" onClick={this.getSignUp.bind(this)}>Sign Up</Button>
    </div> 

   )}

}


/*export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";
    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button  bsStyle="primary" type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
            </button>
          </div>
             <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li activeClassName="active">
                <Link to="Student" onClick={this.toggleCollapse.bind(this)}>Student</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}*/
