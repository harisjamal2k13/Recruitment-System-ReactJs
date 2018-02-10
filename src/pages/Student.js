import React,{Component} from 'react';
import '../Student.css';
import Login from '../login';
import SignUp from '../signup'
import Logout from '../logout'
import App from '../App';
import * as firebase from 'firebase';
import LeftPanel from '../LeftPanal';
import StudentDetail from '../student-detail';
export default class Student extends Component{
constructor(){
    super();
this.state={
   firebase:''
}
}
getData(){
  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref('USER').once('value').then(function(snapshot) {
  var username = snapshot.val();
  console.log(snapshot.val());

 
  // ...
});

}
render(){
    return(
     <div>
      <Logout {...this.props}/>
      <LeftPanel {...this.props}/>
     
         
    </div>
    );
 }
}