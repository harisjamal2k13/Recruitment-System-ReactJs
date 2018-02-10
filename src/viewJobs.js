import React,{Component} from 'react';
import './viewJobs.css';
import *as firebase from 'firebase';
export default class ViewJObs extends Component{
 constructor(){
        super();
    this.state={
        companyId:[],
        description:[],
        salary:[],
        jobtitle:[],
        key:[]
    }
 }
 componentDidMount(){
   var currentUserEmail=  firebase.auth().currentUser.email
   console.log("y email hai "+currentUserEmail)
    var uid = firebase.auth().currentUser.uid;
    const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('Job/');
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
  var uid=firebase.auth().currentUser.email;
   var userobj=snap.val();
   var key=Object.keys(userobj);
   this.setState({key})
   var table = document.createElement('table');
   for(var i=0; i<key.length;i++){
    var k=key[i];
     this.state.companyId[i]=userobj[k].CompanyId;
     console.log("Company ID  at :"+ i +  this.state.companyId[i])
     this.state.description[i]=userobj[k].Description;
     console.log("Description  at:" +i + this.state.description[i])
     this.state.salary[i]=userobj[k].Salary;
     console.log("Salary at "+i +  this.state.salary[i]);
     this.state.jobtitle[i]=userobj[k].JobTitle;
     console.log("Job Title at "+i +this.state.jobtitle[i]);  

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7= row.insertCell(7)
    cell1.innerHTML =  this.state.jobtitle[i];
    cell2.innerHTML = " ";
    cell3.innerHTML = this.state.description[i];
    cell4.innerHTML = " ";
    cell5.innerHTML = this.state.salary[i];
    if(currentUserEmail==="admin@gmail.com"){
    var button = document.createElement('button');
    var buttonText = document.createTextNode('Delete')
    button.appendChild(buttonText)
    cell6.appendChild(button)
    button.addEventListener('click', this.deleteUser.bind(this,i))
}
else{
    var button = document.createElement('button');
    var buttonText = document.createTextNode('apply')
    button.appendChild(buttonText)
    cell6.appendChild(button)
    button.addEventListener('click', this.Apply.bind(this, i))
   }
 }
       //running code
}) 

}
deleteUser(i){
    //firebase.database().ref('jobs/'+key).remove();
      var indexValue=this.state.key[i]
      firebase.database().ref('Job/'+indexValue).remove();
}

Apply(index){
     var currentUser= firebase.auth().currentUser;
   
     console.log("Current user "+currentUser)
     var currentId= firebase.auth().currentUser.uid;
     console.log("Current ID "+currentId)
        var rootRef=firebase.database().ref();
        const speedRef = rootRef.child("USER/"+currentId);
     speedRef.on("value",snap=>{
           var values= snap.val();
         let obj=(snap.val() || {
             name: values.name,
             email: values.Email,
             UserId:currentId

         });
       console.log("values.name"+values.name)
       console.log("value.Email"+values.Email)
      var rootRef=firebase.database().ref();
      const speedRef=rootRef.child("Job/"+this.state.key[index]+"/Apply/"+currentId).set(obj)
          
     })

}
 render(){
     return(
            <div>
            {/*{jobs}*/}
            {/*<button onClick={this.getData.bind(this)}>hit me to get data from firebase</button>*/}
         <p>
                <table id="myTable">
                   <tr>
                    
                        <th>Job Title</th>
                       <th> </th>
                        <th>Description </th>
                 
                        <th>Salary</th>
                    </tr>
         
                </table>
         </p> 
            </div>
           

     )};


}