import React,{Component} from 'react';
import '../Home.css';
import { Button } from 'react-bootstrap';
import Login from '../login';
import SignUp from '../signup';
import Nav from '../Nav';
import * as firebase from 'firebase';
class Home extends Component{
render(){
    return(
        <div>
           <Nav {...this.props}/>
           <Login {...this.props} />
        
        </div>
         
            
         
    );
 }
}
export default Home;