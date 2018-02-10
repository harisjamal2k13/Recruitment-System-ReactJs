import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import * as firebase from 'firebase'; 
import LeftPanel from './LeftPanal';
import ViewJObs from './viewJobs';
class StudentDetail extends Component {
  constructor(props){
    super(props);
    this.state={
      user:'',
      fullName:'',
      education:'',
      gpa:'',
      skills:'',
      overview:''
   }
  }

componentDidMount(){

   var userId=firebase.auth().currentUser.uid;
   const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('USER/'+userId);
    var userobj;
     speedRef.on('value',snap => {
      userobj=snap.val();
    
       this.setState({
         user:userobj
          
     })
       console.log("user ki state :"+this.state.user);
     })
}
UpdateStudent(event){
var userId=firebase.auth().currentUser.uid;
  firebase.database().ref('USER'+'/'+userId).set({
      ...this.state.user,
       
      name:this.state.fullName,
      Education:this.state.education,
      GPA:this.state.gpa,
      Skills:this.state.skills, 
      Overview:this.state.overview,
     
     });
}

  render() {
    return (
   <div>
    
        <MuiThemeProvider>
          <div>
          <AppBar style={{ backgroundColor: '#2196F3' }} title="Student Details"/>
           <TextField
             hintText="Enter your Full Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({fullName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Education"
             floatingLabelText="Education"
             onChange = {(event,newValue) => this.setState({education:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your GPA"
             floatingLabelText="GPA"
             onChange = {(event,newValue) => this.setState({gpa:newValue})}
             />
           <br/>
             <TextField
             hintText="Enter your Skills"
             floatingLabelText="SKILL"
             onChange = {(event,newValue) => this.setState({skills:newValue})}
             />
           <br/>
             <TextField
             hintText="Your Overview"
             floatingLabelText="Overview"
             onChange = {(event,newValue) => this.setState({overview:newValue})}
             />
           <br/>
           <RaisedButton label="Update" primary={true} style={style} onClick={(event) => this.UpdateStudent(event)}/>
         </div>
        </MuiThemeProvider>   
       
      </div>
    );
  }
}

const style = {
  margin: 15,
};
export default StudentDetail;
