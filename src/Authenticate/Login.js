import React, {Component} from "react";
import {Navigate} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:"",
            password:"",
            goToDashboardPge:false,
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        e.preventDefault();

        //We can use the service to check the user credentials are correct against the database userid and password
        if(this.state.password !== "user" && this.state.userName !== "user") {
            alert("credentials are incorrect");
        }else{
            this.setState({goToDashboardPge: true});
            sessionStorage.setItem('token', "[qK5fy5d#KMA*sAf");
        }
    }

    render() {
        if(this.state.goToDashboardPge) {
            return <Navigate to={{pathname:'/dashboard'}}/>
        }

        return (
            <div className="container">
                <div className="col-6 mx-auto">
                    <h3 className="mb-4">Login</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label>Username</label>
                            <input type="text" className="form-control" onChange={e => this.setState({userName:e.target.value})} required/>
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" className="form-control" onChange={e => this.setState({password: e.target.value})} required/>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;