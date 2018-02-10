import React,{Component} from 'react';
import *as firebase from 'firebase';
import './viewJobs.css';
export default class ViewAllStudents extends Component{
 componentDidMount(){
 
    const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('USER/');
      speedRef.on('value',snap => {

   var count=0;
   var userobj=snap.val();
   var key=Object.keys(userobj);
   var table = document.createElement('table');
   for(var i=0; i<key.length; i++){
    var k=key[i];
    console.log(userobj[k].type);
    if(userobj[k].type==='student'){
      this.state.email[i]=userobj[k].Email;
      this.state.name[i]=userobj[k].name;
       var table = document.getElementById("myTable");
       var row = table.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
        cell1.innerHTML =  this.state.name[i];
        cell2.innerHTML = this.state.email[i];
        var button = document.createElement('button');
        var buttonText = document.createTextNode('View Detail')
        button.appendChild(buttonText)
        cell3.appendChild(button)
        button.addEventListener('click', this.detail)
    }

 }
       //running code
}) 
}
detail(){
    console.log("Student more detail");
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
                        <th>Student Name</th>
                        <th>Student Email</th>   
                    </tr>
                </table>
         </p> 
    </div>
)

}

}