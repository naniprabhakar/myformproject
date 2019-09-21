import React from "react";
export default class Form extends React.Component {

  state = {
        firstName: "",
        lastName:"",
        userName: "",
        email: "",
        password:""
    };


change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
        [e.target.name]: e.target.value
    });

};

onSubmit = e => {
    e.preventDefault();
 //   this.props.onSubmit(this.state);
    this.setState({
        
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
    });

this.props.onChange({
    
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: ""


});
};
render()
{
    return (
        <form>
            <center>
            <table>
            <tr><td>FirstName</td><td><input name="firstname" placeholder='firstname' value={this.state.firstname}  onChange={e => this.change(e)} /></td></tr>

            <br></br><br></br>
            
            <tr><td>LastName</td><td><input name="lastname" placeholder='lastname' value={this.state.lastname} onChange={e => this.change(e)} /></td></tr>
            
            <br></br> <br></br>
            
            <tr><td>UserName</td><td><input name="username"  placeholder='username' value={this.state.username} onChange={e => this.change(e)} /></td></tr>
            
            <br></br> <br></br>
            <tr><td>Email</td><td><input name="email"    placeholder='email' value={this.state.email} onChange={e => this.change(e)} /></td></tr>
            
            <br></br> <br></br>
            
            <tr><td>Password</td><td><input name="password" type="password" placeholder='password' value={this.state.password} onChange={e => this.change(e)} /></td></tr>
                    
            <br></br> <br></br>
            
            <tr><td><button onClick={e => this.onSubmit(e)}>Submit</button></td><td><button type="reset" onClick={e => this.onSubmit(e)}>React</button></td></tr>
            </table>
            </center>
        </form>
    );
}
}