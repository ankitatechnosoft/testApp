import React,{Component} from 'react';
import './style.css'

class Home extends Component{
    userData;
    constructor(props){
        super(props)
        let userData = JSON.parse(localStorage.getItem('user'));
        this.state={
        userData:userData,
        edit:false
        }
    }
    
    handleClick=()=>{
       this.setState({
           edit:true
       })
    }
    
    render(){
        console.log(this.state.userData.fields.username)
          return(
            <div id="main-registration-container">
            <div id="register">
               <h3>Home screen</h3>
               <form method="post"  name="userRegistrationForm">
               <label>Name</label>
               <input type="text" name="username" value={this.state.userData.fields.username} />
               <label>Email ID:</label>
               <input type="text" name="emailid" value={this.state.userData.fields.emailid}/>
               <label>Mobile No:</label>
               <input type="text" name="mobileno" value={this.state.userData.fields.mobileno}/>
               <label>Password</label>
               <input type="password" name="password" value={this.state.userData.fields.password}/>
               </form>
               <input type="button" className="button"  value="Edit" onClick={()=>this.handleClick()}/>
               {
                (this.state.edit)?
                this.props.history.push('/EditScreen'):""
        }
               </div>
               </div>
         )
    }
}

export default Home