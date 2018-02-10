import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import * as firebase from 'firebase'; 
class JobPost extends Component {
  constructor(props){
    super(props);
    this.state={
      user:'',
      title:'',
      salary:'',
      description:'',
      type:''
   }
  }

PostNewJob(){
    var uid = firebase.auth().currentUser.uid;
      firebase.database().ref('Job/').push({
      JobTitle:this.state.title,
      Salary :this.state.salary,
      Description:this.state.description,
      CompanyId:uid
     });
}

  render() {
    return (
   <div>
        <MuiThemeProvider>
          <div>
          <AppBar style={{ backgroundColor: '#2196F3' }} title="Post New Job"/>
           <TextField
             hintText="Job Title"
             floatingLabelText="Title"
             onChange = {(event,newValue) => this.setState({title:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter Salary "
             floatingLabelText="Salary"
             onChange = {(event,newValue) => this.setState({salary:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter Description"
             floatingLabelText="Description"
             onChange = {(event,newValue) => this.setState({description:newValue})}
             />
           
           <br/>
           <RaisedButton label="Post" primary={true} style={style} onClick={(event) => this.PostNewJob(event)}/>
         </div>
        </MuiThemeProvider>      
      </div>
    );
  }
}

const style = {
  margin: 15,
};
export default JobPost;
