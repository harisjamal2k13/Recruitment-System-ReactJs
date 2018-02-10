import React,{Component} from 'react';
import * as firebase from 'firebase';
import './LeftPanel.css';
import JobPost from './jobPost';
import ViewAllStudents from './viewAllStudent';
import ViewJobs from './viewJobs';
import ViewCompany from './viewCompany';
import{
BrowserRouter as Router,
Route,
Link
}from 'react-router-dom';
class LeftPanelAdmin extends Component{
    constructor(){
        super();
        this.state={
            user:null
        }
    }
componentDidMount(){
  firebase.auth().onAuthStateChanged(()=>{
        var userId = firebase.auth().currentUser.uid;
        const rootRef= firebase.database().ref();
        const speedRef = rootRef.child('USER/'+userId);
        speedRef.on('value',snap => {
        var userName= snap.val().name
        console.log(userName);
        this.setState({user: userName})
    });
  })
}
getDetail(){
    
}
postJob(){

   
}
render(){
    return(
     <Router>
      <div>
          {this.state.user?
           <div id="left-navigation">
           <h2>{this.state.user}</h2>
            <img src="title.jpg" alt="logo" height="250" width="250"/>
             <p><Link className="link" to="/Admin/ViewAllStudents">View Students</Link></p>
             <p><Link className="link" to="/Admin/ViewJobs">View Jobs</Link></p>
           <p><Link className="link" to="/Admin/ViewCompany">View Comapny</Link></p>
           </div>
            :
               <h4>please wait. . </h4>
            }
       
      
         <Route path="/Admin/ViewAllStudents" component={ViewAllStudents}/>
         <Route path="/Admin/ViewJobs" component={ViewJobs}/>
         <Route path='/Admin/ViewCompany' component={ViewCompany}/>
      
       </div>
       </Router>  
    );
 }
}
export default LeftPanelAdmin;
