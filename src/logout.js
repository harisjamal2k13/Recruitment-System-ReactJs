import React,{Component} from 'react';
import SignUp from './signup'
import * as firebase from 'firebase';
import './logout.css';
import { Button } from 'react-bootstrap';
export default class Logout extends Component{

handleClick(event){
firebase.auth().signOut().then(() => {
  // Sign-out successful.
   console.log(" Sign-out successful.")
}).catch(function(error) {
  console.log(error);
});
this.props.history.push('/');

}
render(){
    return(
        <div id="navigation">
           <Button bsStyle="primary" onClick={(event) => this.handleClick(event)}>Log Out </Button>
        </div>
    );
 }
}