import React,{Component} from 'react';
import * as firebase from 'firebase';
import './LeftPanel.css';
import JobPost from './jobPost';
import MypostJob from './myPostJob';
import ViewAllStudents from './viewAllStudent';
import{
BrowserRouter as Router,
Route,
Link
}from 'react-router-dom';
class LeftPanelCompany extends Component{
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
// getDetail(){
//     this.props.history.push('/');
// }
// postJob(){

//     this.props.history.push('/JobPost');
// }
// MypostJob(){
//     this.props.history.push('/MypostJob');
// }
// AllStudent(){
//     this.props.history.push('./ViewAllStudents')
// }/Company
render(){
    return(
        <Router>
                  <div>
          {this.state.user?
           <div id="left-navigation">
           <h1>Company</h1>
           <h2>{this.state.user}</h2>
            <img src="title.jpg" alt="logo" height="250" width="250"/>
             <p><Link className="link" to="/Company/JobPost">Post Job</Link></p>
             <p><Link className="link" to="/Company/MypostJob">My Post Job</Link></p>
             <p><Link className="link" to ="/Company/ViewAllStudents"> View Students</Link></p>

           </div>
            :
               <h4>please wait. . </h4>
            }
        <Route path="/Company/JobPost" component={JobPost}/>
        <Route path="/Company/MypostJob" component={MypostJob}/>
        <Route path="/Company/ViewAllStudents" component={ViewAllStudents}/>
       </div>
        </Router>
         
    );
 }
}
export default LeftPanelCompany;
