// https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as firebase from 'firebase';
import Company from './pages/Company';
import App from './App';

import{
BrowserRouter as Router,
Route,
Link
}from 'react-router-dom';
class Login extends Component {
constructor(props){
  super(props);
//   var temp = JSON.parse(localStorage.getItem("item"));
  this.state={
  username:'',
  password:''
  }
 }
handleClick(event) {
firebase.auth().signInWithEmailAndPassword(this.state.username,this.state.password).then((error)=> {
  // Handle Errors here.
   var typeCheck;
    var userId = firebase.auth().currentUser.uid;
    const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('USER/'+userId);
    speedRef.on('value',snap => {
     typeCheck=snap.val().type;
     if(typeCheck==='student'){
       this.props.history.push('/Student');
     }
    if(typeCheck==='company'){
      this.props.history.push('/Company');
    }
        if(typeCheck ===('')){
      this.props.history.push('/Admin');
    }
 
})
    

}).catch((error)=>{
var errorCode = error.code;
  var errorMessage = error.message;
  console.log("err",errorCode);
   
});
  
   
  }

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
              <br></br>  <br></br>
          {/*<AppBar style={{ backgroundColor: '#2196F3' }} title="Signin"/>*/}
           <TextField
             hintText="Enter your E-Mail"
             floatingLabelText="E-Mail"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Sign in" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;

























