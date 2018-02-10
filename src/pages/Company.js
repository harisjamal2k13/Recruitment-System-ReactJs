import React,{Component} from 'react';
// import './Company.css';
import JobPost from '../jobPost';
import LeftPanelCompany from '../leftpanelCompany';
import Logout from '../logout';
class Company extends Component{
render(){
    return(
        <div>
            <Logout {...this.props} />
            <LeftPanelCompany {...this.props}/>
            
            
        </div>
    );
 }
}
export default Company;