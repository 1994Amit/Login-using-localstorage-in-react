import React, { Component } from "react";


export default class SignUp extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            name: '',
            lname: '',
            email: '',
            password:'',
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem('document',JSON.stringify(this.state));
}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
    if (localStorage.getItem('document')) {
        this.setState({
            name: this.documentData.name,
           lname: this.documentData.lname,
           email: this.documentData.email,
           password:this.documentData.password
    })
} else {
    this.setState({
        name: '',
            lname: '',
            email: '',
            password:'',
    })
}
}
    
    render() {
        
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control"  name="name" placeholder="First name" value={this.state.name} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control"  name="lname" placeholder="Last name" value={this.state.lname} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control"  name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}