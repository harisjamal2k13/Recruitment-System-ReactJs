import React,{Component} from 'react';
// import './Admin.css';
import LeftPanelAdmin from '../leftAdminPanel';
import Logout from '../logout'
class Admin extends Component{
render(){
    return(
        <div>
          <Logout {...this.props}/>
         <LeftPanelAdmin {...this.props}/>
      
            
        </div>
    );
 }
}
export default Admin;