import React,{Component} from 'react';
import * as firebase from 'firebase';
import StudentDetail from './student-detail';
import ViewCompany from './viewCompany';
import ViewJobs from './viewJobs';
import './LeftPanel.css';
import{
BrowserRouter as Router,
Route,
Link
}from 'react-router-dom';
class LeftPanel extends Component{
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
    this.props.history.push('/StudentDetail');
}
viewjobs(){
  this.props.history.push('/ViewJobs');
}
viewcompanies(){
   this.props.history.push('/ViewCompany');
}
render(){
    return(
      <Router>
      <div>
          {this.state.user?
           <div id="left-navigation">
           <h1>Student</h1>
           <h2>{this.state.user}</h2>
            <img src="title.jpg" alt="logo" height="250" width="250"/>
             <p><Link className="link" to="/Student/StudentDetail">Edit Details</Link></p>
             <p><Link className="link" to="/Student/ViewCompany">View Company</Link></p>
             <p><Link className="link" to ="/Student/ViewJobs"> View Jobs</Link></p>
           </div>
            :
               <h4>please wait. . </h4>
            }
            <Route path="/Student/StudentDetail" component={StudentDetail}/>
            <Route path='/Student/ViewCompany' component={ViewCompany}/>
            <Route path="/Student/ViewJobs" component={ViewJobs}/>
       </div>
       </Router>
    
            
         
    );
 }
}
export default LeftPanel;
