import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import details from "./Details"
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            newemail: '',
           newpassword:'',
           
    }
}


    handleChange= (e)=> {
     this.setState({[e.target.name]:e.target.value});
    }
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

    handleFormSubmit() {
        if(this.state.newemail === this.documentData.email && this.state.newpassword=== this.documentData.password){
            this.props.history.push('/details')
        
    }
    else{
        alert("invalid cred")
    }
       
    }


    render() {
        return (<Router>
            <form onSubmit={this.handleFormSubmit}>
                <h3 >Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="newemail" placeholder="Enter email" value={this.state.newemail} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="newpassword" placeholder="Enter password" value={this.state.newpassword} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
            
                <button type="submit" className="btn btn-primary btn-block" > Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="">password?</a>

                </p>
                <Route path="/details" component={details} />
            </form>
            </Router>     );
    }
}