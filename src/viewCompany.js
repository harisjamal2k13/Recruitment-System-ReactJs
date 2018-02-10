import React,{Component} from 'react';
import *as firebase from 'firebase';
import './viewJobs.css';
export default class ViewCompany extends Component{
 componentDidMount(){
 
    const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('USER/');
      speedRef.on('value',snap => {
    //   var userobj=snap.val();
    //   var keyvalue=Object.keys(userobj);
    
    //    for (var i=0;i<keyvalue.length;i++){
    //      var k=keyvalue[i];
    //      var cId=userobj[k].CompanyId;
    //      var jt=userobj[k].JobTitle;
    //      var des=userobj[k].Description;
    //      var sal=userobj[k].Salary;
     
    //      console.log(cId ,jt ,des ,sal);
    //    }

   // running code
   var count=0;
   var userobj=snap.val();
   var key=Object.keys(userobj);
   var table = document.createElement('table');
   for(var i=0; i<key.length; i++){
    var k=key[i];
    console.log("for k andr !")
    console.log(userobj[k].type);
    if(userobj[k].type==='company'){
        console.log("If k andr agaya !")
      this.state.email[i]=userobj[k].Email;
      console.log("Company email"+this.state.email[i])
      this.state.name[i]=userobj[k].name;
      console.log("Company Name"+this.state.name[i])
       var table = document.getElementById("myTable");
       var row = table.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       cell1.innerHTML =  this.state.name[i];
       cell2.innerHTML = this.state.email[i];
    }
     console.log("if k andr nai gaya !")
   
 }
       //running code
}) 
}
constructor(){
        super();
this.state={
        email:[],
        name:[]
    }
 }
render(){
return(
    <div>
     <p>
                <table id="myTable">
                   <tr>
                        <th>Company Name</th>
                        <th>Company Email</th>   
                    </tr>
                </table>
         </p> 
    </div>
)

}

}