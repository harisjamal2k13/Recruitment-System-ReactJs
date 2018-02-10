import React,{Component} from 'react';
import *as firebase from 'firebase';
import './viewJobs.css';
export default class MyPostJob extends Component{
 componentDidMount(){

     var uid = firebase.auth().currentUser.uid;
    const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('Job/');
    speedRef.on('value',snap => {
  
   var userobj=snap.val();
   var key=Object.keys(userobj);
      this.setState({key})
   var table = document.createElement('table');
   for(var i=0; i<key.length; i++){
    var k=key[i];
    if(uid === userobj[k].CompanyId){
   
     this.state.description[i]=userobj[k].Description;
     this.state.salary[i]=userobj[k].Salary;
     this.state.jobtitle[i]=userobj[k].JobTitle;
 
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML =  this.state.jobtitle[i];
    cell2.innerHTML = " ";
    cell5.innerHTML = this.state.description[i];
    cell4.innerHTML = " ";
    cell3.innerHTML = this.state.salary[i];
    var button = document.createElement('button');
    var buttonText = document.createTextNode('Delete ')
    button.appendChild(buttonText)
    cell6.appendChild(button)
    button.addEventListener('click', this.deleteUser.bind(this,i))

    var button = document.createElement('button');
    var buttonText = document.createTextNode(' CVS')
    button.appendChild(buttonText)
    cell7.appendChild(button)
    button.addEventListener('click', this.viewCvs.bind(this,i))
}
     console.log("if k andr nai gaya !")  
 }

}) 
}

deleteUser(i){
      var indexValue=this.state.key[i]
      firebase.database().ref('Job/'+indexValue).remove();
}
viewCvs(i){
  console.log("No Student Applied yet ")

     var uid = firebase.auth().currentUser.uid;
    const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('Job/');
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
       
    }

 }
}) 
}
constructor(){
        super();
this.state={
       description:[],
        salary:[],
        jobtitle:[],
        key:[]
    }
 }
render(){
return(
    <div>
        <p>
             <table id="myTable">
                   <tr>
                        <th>Job Title</th>
                        <th></th>
                        <th>Salary</th> 
                        <th></th> 
                        <th>Description</th>
                  </tr>
                </table>
         </p> 
    {/*<div class="container">
            <h2>Modal Example</h2>

            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

            
            <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
                
            
                <div class="modal-content">
                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Modal Header</h4>
                    </div>
                    <div class="modal-body">
                    <p>Some text in the modal.</p>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
                
                </div>
            </div>
            
            </div>*/}


    </div>
)

}

}